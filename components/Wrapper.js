import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Menu, Layout, Icon } from 'antd'
import moment from 'moment'
import 'moment/locale/th'

import '../static/antd.css'

moment.locale('th')

const { Content, Footer, Sider } = Layout

const Wrapper = ({ children, router }) => {
  const currentPage = path => {
    switch (path) {
      case '/home':
        return '1'
      case '/main':
        return '2'
      case '/overview':
        return '3'
      case '/task':
        return '4'
    }
  }

  const handleClick = e => {
    switch (e.key) {
      case '1':
        router.push('/home')
        break
      case '2':
        router.push('/main')
        break
      case '3':
        router.push('/overview')
        break
      case '4':
        router.push('/task')
        break
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>School's Management</title>
      </Head>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div
            className="logo"
            style={{ textAlign: 'center', padding: '10px' }}
          >
            <img src="../static/logo.png" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[currentPage(router.pathname)]}
            onClick={handleClick}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              Home
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calendar" />
              Calendar
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="global" />
              Overview
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="inbox" />
              Task
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="layout" style={{ marginLeft: 200 }}>
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
              height: 'calc(100vh - 90px)'
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>JWC11 Team B</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  )
}

export default withRouter(Wrapper)
