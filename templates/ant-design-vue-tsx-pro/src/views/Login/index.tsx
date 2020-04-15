import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Row, Col, Form, Button, Input, Radio, Icon, Tabs } from 'ant-design-vue';
import { WrappedFormUtils } from 'ant-design-vue/types/form/form';

import { translate } from '@/i18n';
import defaultLanguage from '@/i18n/default';
import defaultHomeKey from '@/config/default.homeKey';

import Animation from './animation';

import styles from './index.less';

interface UserInfo {
  [propsName: string]: string;
}

@Component
export default class Login extends Vue {
  form!: WrappedFormUtils;
  btnLoading = false;
  loginType = 'account';

  @Action('toggleLanguage')
  toggleLanguage!: Function;

  @Action('login')
  login!: Function;

  private changeLanguage(event: Event) {
    this.toggleLanguage((event.target as HTMLInputElement).value);
  }

  beforeCreate() {
    this.form = this.$form.createForm(this, {
      name: 'normal_login'
    });
  }

  protected mounted() {
    new Animation();
  }

  protected handleSubmit(event: Event) {
    event.preventDefault();

    this.form.validateFields(async (errors: Error[], values: UserInfo) => {
      if (!errors) {
        const loginInfo: UserInfo = {};

        if (this.loginType === 'account') {
          // 账号密码登录
          loginInfo.username = values.username;
          loginInfo.password = values.password;
        } else {
          // 手机号登录
          loginInfo.phone = values.phone;
          loginInfo.captcha = values.captcha;
        }

        this.btnLoading = true;
        const res = await this.login(loginInfo);
        this.btnLoading = false;

        if (res && typeof res === 'string') {
          return this.$message.error(translate(`message.${res}`) as string);
        }

        this.$router.push({
          name: defaultHomeKey.toLowerCase()
        });
      }
    });
  }

  protected render() {
    const { getFieldDecorator } = this.form;

    return (
      <div class={styles.containerBox}>
        {/* 背景布局 */}
        <Row>
          <Col class={styles.rightCol} id="rightCol" span="6" push="18">
            <div class={styles.languageChoose}>
              <Radio.Group defaultValue={defaultLanguage} buttonStyle="solid" onChange={this.changeLanguage}>
                <Radio.Button value="en">English</Radio.Button>
                <Radio.Button value="cn">中文</Radio.Button>
              </Radio.Group>
            </div>
            <canvas id="polyCanvas" class={styles.polyCanvas}></canvas>
          </Col>
          <Col class={styles.leftCol} span="18" pull="6"></Col>
        </Row>

        <Form
          id="loginForm"
          form={this.form}
          class={styles.loginForm}
          onSubmit={this.handleSubmit}
        >
          <Tabs defaultActiveKey="1">
            {/* 登录表单 */}
            <Tabs.TabPane key="1">
              <span slot="tab">{translate('login.title')}</span>
              <Form.Item>
                {
                  getFieldDecorator('username', {
                    rules: [
                      {
                        required: true,
                        message: translate('message.usernameRequired') as string
                      }
                    ]
                  })(
                    <Input placeholder={translate('username')}>
                      <Icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </Input>
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: translate('message.passwordRequired') as string
                      }
                    ]
                  })(
                    <Input type="password" placeholder={translate('password')}>
                      <Icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </Input>
                  )
                }
              </Form.Item>
              <Form.Item>
                {/* <a class="login-form-forgot" href="">
                  {translate('forget')}
                </a> */}
                <Button
                  loading={this.btnLoading}
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  {translate('login.button')}
                </Button>
                {/* Or
                <a href="">
                  {translate('register')}
                </a> */}
              </Form.Item>
            </Tabs.TabPane>

            {/* 注册表单 */}
            {/* <Tabs.TabPane key="2">
              <span slot="tab">{translate('register.title')}</span>
              注册表单
            </Tabs.TabPane> */}
          </Tabs>
        </Form>

      </div>
    );
  }
}
