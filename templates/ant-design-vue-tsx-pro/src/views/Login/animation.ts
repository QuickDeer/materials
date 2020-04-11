import { TweenLite } from "gsap";

type Color = string;

interface Point {
  x: number;
  y: number;
  originX?: number;
  originY?: number;
  closest?: Point[];
  circle?: Circle;
  active?: number;
}

class Circle {
  pos: Point;
  radius: number;
  color: Color;

  constructor(pos: Point, radius: number, color: Color) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
  }

  public static active: number;

  public static draw(ctx: CanvasRenderingContext2D, pos: Point, radius: number, active: number) {
    if (!active) {
      return;
    }

    ctx.beginPath();
    ctx.arc(pos.x, pos.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156, 217, 249, ${active})`;
    ctx.fill();
  };
}

export default class Animation {
  private width: number = 0;
  private height: number = 0;
  private largeHeader: HTMLElement = null;
  private canvas: HTMLCanvasElement = null;
  private ctx: CanvasRenderingContext2D = null;
  private points: Point[] = [];
  private target: Point = {
    x: 0,
    y: 0
  };
  private animateHeader = true;

  // Main
  constructor() {
    this.initHeader();
    this.initAnimation();
    this.addListeners();
  }

  private initHeader() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.target = {
      x: this.width / 2,
      y: this.height / 2
    };

    this.largeHeader = document.getElementById('large-header');
    this.largeHeader.style.height = `${this.height}px`;

    this.canvas = <HTMLCanvasElement>document.getElementById('polyCanvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

    // create points
    this.points = [];
    for(var x = 0; x < this.width; x = x + this.width / 20) {
      for(var y = 0; y < this.height; y = y + this.height / 20) {
        const px = x + Math.random() * this.width / 20;
        const py = y + Math.random() * this.height / 20;
        const point = {
          x: px,
          originX: px,
          y: py,
          originY: py
        };
        this.points.push(point);
      }
    }

    // for each point find the 5 closest points
    for(var i = 0; i < this.points.length; i++) {
      var closest = [];
      var p1 = this.points[i];

      for(var j = 0; j < this.points.length; j++) {
        var p2 = this.points[j]
        if (!(p1 == p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for(var k = 0; k < 5; k++) {
            if (!placed) {
              if (this.getDistance(p1, p2) < this.getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for(let i in this.points) {
      this.points[i].circle = new Circle(
        this.points[i],
        2 + Math.random() * 2,
        'rgba(255, 255, 255, 0.3)'
      );
    }
  }

  // Event handling
  addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', this.mouseMove);
      }
      window.addEventListener('scroll', this.scrollCheck);
      window.addEventListener('resize', this.resize);
  }

  mouseMove(event: MouseEvent) {
    let posx = 0;
    let posy = 0;

    if (event.pageX || event.pageY) {
      posx = event.pageX;
      posy = event.pageY;
    }

    else if (event.clientX || event.clientY)    {
      posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    this.target.x = posx;
    this.target.y = posy;
  }

  scrollCheck() {
    if (document.body.scrollTop > this.height) {
      this.animateHeader = false;
    }
    else this.animateHeader = true;
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.largeHeader.style.height = this.height+'px';
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  // animation
  initAnimation() {
    this.animate();
    for (let i in this.points) {
      this.shiftPoint(this.points[i]);
    }
  }

  animate() {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for(let i in this.points) {
        // detect points in range
        if(Math.abs(this.getDistance(this.target, this.points[i])) < 4000) {
          this.points[i].active = 0.3;
          this.points[i].circle.active = 0.6;
        } else if(Math.abs(this.getDistance(this.target, this.points[i])) < 20000) {
          this.points[i].active = 0.1;
          this.points[i].circle.active = 0.3;
        } else if(Math.abs(this.getDistance(this.target, this.points[i])) < 40000) {
          this.points[i].active = 0.02;
          this.points[i].circle.active = 0.1;
        } else {
          this.points[i].active = 0;
          this.points[i].circle.active = 0;
        }

        this.drawLines(this.points[i]);
        this.points[i].circle.draw();
      }
    }
    requestAnimationFrame(this.animate);
  }

  shiftPoint(p: Point) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random()*100,
      y: p.originY - 50 + Math.random()*100,
      ease: Circ.easeInOut,
      onComplete: () => {
        this.shiftPoint(p);
      }
    });
  }

  // Canvas manipulation
  drawLines(p: Point) {
    if(!p.active) {
      return;
    }

    for(let i in p.closest) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.closest[i].x, p.closest[i].y);
      this.ctx.strokeStyle = `rgba(156, 217, 249, ${p.active})`;
      this.ctx.stroke();
    }
  }

  // Util
  getDistance(p1: Point, p2: Point) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

}