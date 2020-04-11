import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Radio } from 'ant-design-vue';

import { translate } from '@/i18n';
import { HelloWorld } from '@/components';

@Component
export default class Home extends Vue {
  @Action('toggleLanguage')
  toggleLanguage!: Function;

  private changeLanguage(event: Event) {
    this.toggleLanguage((event.target as HTMLInputElement).value);
  }

  protected render() {
    return (
      <div class="home">

        <div id="nav">
          <router-link to="/">{translate('nav.home')}</router-link> |
          <router-link to="/about">{translate('nav.about')}</router-link>
        </div>

        <div id="language">
          <Radio.Group defaultValue="en" buttonStyle="solid" onChange={this.changeLanguage}>
            <Radio.Button value="en">English</Radio.Button>
            <Radio.Button value="cn">中文</Radio.Button>
          </Radio.Group>
        </div>

        <HelloWorld msg={translate('welcome')}/>
      </div>
    );
  }
}
