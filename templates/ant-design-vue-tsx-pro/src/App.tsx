import { Component, Vue } from 'vue-property-decorator';

import './style/index.less';

@Component
export default class App extends Vue {
  protected render() {
    return (
      <div class="container">
        <router-view></router-view>
      </div>
    );
  }
}
