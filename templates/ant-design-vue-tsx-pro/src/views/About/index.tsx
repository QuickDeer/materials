import { Component, Vue } from 'vue-property-decorator';
import { translate } from '@/i18n';

@Component
export default class About extends Vue {

  protected render() {
    return (
      <div class="about">
        <h1>{translate('title')}</h1>
      </div>
    );
  }
}
