import { TweenLite, Circ } from "gsap";

/* eslint-disable */
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
  active!: number;

  constructor(pos: Point, radius: number, color: Color) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    if (!this.active) {
      return;
    }

    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156, 217, 249, ${this.active})`;
    ctx.fill();
  };
}

export default class Animation {
  private width!: number;
  private height!: number;
  private largeHeader!: HTMLElement;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private points!: Point[];
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

    this.largeHeader = document.getElementById('rightCol') as HTMLElement;
    this.largeHeader.style.height = `${this.height}px`;

    this.canvas = document.getElementById('polyCanvas') as HTMLCanvasElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    // create points
    this.points = [];
    for(let x = 0; x < this.width; x = x + this.width / 20) {
      for(let y = 0; y < this.height; y = y + this.height / 20) {
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
    for(let i = 0; i < this.points.length; i++) {
      const closest = [];
      const p1 = this.points[i];

      for(let j = 0; j < this.points.length; j++) {
        const p2 = this.points[j]
        if (!(p1 == p2)) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for(let k = 0; k < 5; k++) {
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
    for(const i in this.points) {
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
        window.addEventListener('mousemove', (event: MouseEvent) => {
          this.mouseMove(event);
        });
      }
      window.addEventListener('scroll', () => {
        this.scrollCheck();
      });
      window.addEventListener('resize', () => {
        this.resize();
      });
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
    for (const i in this.points) {
      this.shiftPoint(this.points[i]);
    }
  }

  animate() {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);

      for(const i in this.points) {
        const currentPoint: Point = this.points[i];

        // detect points in range
        if(Math.abs(this.getDistance(this.target, currentPoint)) < 4000) {
          currentPoint.active = 0.3;
          currentPoint.circle!.active = 0.6;
        } else if(Math.abs(this.getDistance(this.target, currentPoint)) < 20000) {
          currentPoint.active = 0.1;
          currentPoint.circle!.active = 0.3;
        } else if(Math.abs(this.getDistance(this.target, currentPoint)) < 40000) {
          currentPoint.active = 0.02;
          currentPoint.circle!.active = 0.1;
        } else {
          currentPoint.active = 0;
          currentPoint.circle!.active = 0;
        }

        this.drawLines(currentPoint);
        currentPoint.circle?.draw(this.ctx);
      }
    }
    requestAnimationFrame(() => {
      this.animate()
    });
  }

  shiftPoint(p: Point) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: (p.originX || 0) - 50 + Math.random()*100,
      y: (p.originY || 0) - 50 + Math.random()*100,
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

    for(const i in p.closest) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.closest[i as any].x, p.closest[i as any].y);
      this.ctx.strokeStyle = `rgba(156, 217, 249, ${p.active})`;
      this.ctx.stroke();
    }
  }

  // Util
  getDistance(p1: Point, p2: Point) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

}