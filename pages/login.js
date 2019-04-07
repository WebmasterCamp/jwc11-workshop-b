import React from 'react'
import { withRouter } from 'next/router'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

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
    <React.Fragment>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div>
          <h1>Login</h1>
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
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: false
              })(<Checkbox>Remember me</Checkbox>)}
              <a style={{ float: 'right' }} href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                <a href="/">Log in</a>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withRouter(Form.create({})(Login))
