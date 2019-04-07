import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Menu, Layout } from 'antd'
import moment from 'moment'
import 'moment/locale/th'

moment.locale('th')

const { Header, Content, Footer } = Layout

const Wrapper = ({ children, router }) => {
  const currentPage = path => {
    switch (path) {
      case '/index':
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
        router.push('/index')
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
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[currentPage(router.pathname)]}
            style={{ lineHeight: '64px' }}
            onClick={handleClick}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Overview</Menu.Item>
            <Menu.Item key="3">Task</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', height: 'calc(100vh - 133px)' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>JWC11 Team B</Footer>
      </Layout>
    </React.Fragment>
  )
}

export default withRouter(Wrapper)
