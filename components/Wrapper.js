import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Menu, Layout } from 'antd'
import moment from 'moment'
import 'moment/locale/th'

import '../static/antd.css'

moment.locale('th')

const { Header, Content, Footer, Sider } = Layout

const Wrapper = ({ children, router }) => {
  const currentPage = path => {
    switch (path) {
      case '/main':
        return '1'
      case '/overview':
        return '2'
      case '/task':
        return '3'
    }
  }

  const handleClick = e => {
    switch (e.key) {
      case '1':
        router.push('/main')
        break
      case '2':
        router.push('/overview')
        break
      case '3':
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
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[currentPage(router.pathname)]}
            onClick={handleClick}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Overview</Menu.Item>
            <Menu.Item key="3">Task</Menu.Item>
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
