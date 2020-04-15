import { Component, Vue } from 'vue-property-decorator'
import {
  Layout,
  Menu,
  Icon
} from 'ant-design-vue';
import { State } from 'vuex-class';

import { theme } from '@/store/types';
import { Logo } from '@/components';

import styles from './index.less';

@Component
export default class BasicLayout extends Vue {

  @State('theme')
  theme!: theme;

  render() {
    // return (
    //   <section class={`${styles.basicLayout} ${ this.theme === 'dark' ? styles.dark : styles.light }`}>
    //     <header>
    //       <Logo type="top" theme={this.theme} />
    //       <div class={styles.navTop}>
    //         <SiderMenu
    //           theme={this.theme}
    //           class={`${styles.siderMenu}`}
    //         />
    //       </div>
    //       <RightBox
    //         top
    //         theme={this.theme}
    //       />
    //     </header>
    //     <main>
    //       <div style={{ height: 'inherit', overflowX: 'hidden' }}>
    //         <transition name="router-fade">
    //           <router-view></router-view>
    //         </transition>
    //       </div>
    //     </main>
    //   </section>
    // )
    return (
      <Layout class={`${styles.basicLayout} ${ this.theme === 'dark' ? styles.dark : styles.light }`}>
        <Layout.Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken: string) => {
            console.log(broken);
          }}
          onCollapse={(collapsed: boolean, type: string) => {
            console.log(collapsed, type);
          }}
        >
          <Logo type="top" theme={this.theme} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" theme="outlined" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" theme="outlined" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>

        <Layout>
          <Layout.Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Layout.Content style={{ margin: '24px 16px 0', backgroundColor: '#fff' }}>
            <div class="site-layout-background" style={{ height: 'inherit', overflowX: 'hidden' }}>
              <transition name="router-fade">
                <router-view></router-view>
              </transition>
            </div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>APM ©2020 Created by QuickDeer</Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}
