import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { Row, Col, Form, Button, Input, Radio, Checkbox } from 'ant-design-vue';

import { translate } from '@/i18n';

import Animation from './animation';

import './index.less';

@Component
export default class Login extends Vue {
  form: any;

  @Action('toggleLanguage')
  toggleLanguage!: Function;

  private changeLanguage(event: Event) {
    this.toggleLanguage((event.target as HTMLInputElement).value);
  }

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  }

  // protected mounted() {
  //   if (this.rememberMeChecked) {
  //     let { account, password } = this.rememberLoginInfo || { account: '', password: '' }
  //     if (!account || !password) return
  //     try {
  //       password = crypto.decrypt(password)
  //       this.form.setFieldsValue({
  //         username: account,
  //         password
  //       })
  //     } catch(e) {
  //       console.error(e)
  //     }
  //   }
  // }

  protected render() {
    const { getFieldDecorator } = this.form;

    new Animation();

    return (
      <div class="container-box">
        {/* 背景布局 */}
        <Row>
          <Col class="right-col" span="6" push="18">
            <div class="language-choose">
              <Radio.Group defaultValue="en" buttonStyle="solid" onChange={this.changeLanguage}>
                <Radio.Button value="en">English</Radio.Button>
                <Radio.Button value="cn">中文</Radio.Button>
              </Radio.Group>
              <canvas id="polyCanvas"></canvas>
            </div>
          </Col>
          <Col class="left-col" span="18" pull="6"></Col>
        </Row>

        {/* 登录表单 */}
        <Form
          id="components-form-demo-normal-login"
          form="form"
          class="login-form"
          onSubmit="handleSubmit"
        >
          <Form.Item>
            {
              getFieldDecorator('userName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!'
                  }
                ]
              })(
                <Input placeholder={translate('username')}>
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
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
                    message: 'Please input your Password!'
                  }
                ]
              })(
                <Input type="password" placeholder={translate('password')}>
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </Input>
              )
            }
          </Form.Item>
          <Form.Item>
            {/* {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>
                  {translate('remember')}
                </Checkbox>
              )
            } */}
            <a class="login-form-forgot" href="">
              {translate('forget')}
            </a>
            <Button type="primary" html-type="submit" class="login-form-button">
              {translate('login')}
            </Button>
            {/* Or
            <a href="">
              {translate('register')}
            </a> */}
          </Form.Item>
        </Form>
      </div>
    );
  }
}
