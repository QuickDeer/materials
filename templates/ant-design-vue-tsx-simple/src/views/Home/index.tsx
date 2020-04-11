import { Component, Vue } from 'vue-property-decorator';
import { HelloWorld } from '../../components';

import { translate } from '@/i18n';

@Component
export default class Home extends Vue {
  protected render() {
    return (
      <div class="home">
        <HelloWorld msg={translate('welcome')}/>
      </div>
    );
  }
}
