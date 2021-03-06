import React from 'react'
import { withRouter } from 'next/router'
import { Form, Icon, Input, Button } from 'antd'

import '../static/antd.css'

const Login = ({ form, router }) => {
  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (values.password === 1234) {
        switch (values.userName) {
          case 'user':
            router.push('/index')
          case 'admin':
            router.push('/index')
          case 'owner':
            router.push('/index')
          default:
            router.push('/index')
        }
      }
    })
  }

  const { getFieldDecorator } = form

  return (
    <div
      style={{
        backgroundColor: '#1E2328',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}
      >
        <img src="../static/logo.png" />
        <h1 style={{ color: 'white' }}>Managecher</h1>
        <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              <a href="/main">Log in</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(Form.create({})(Login))
