import React from 'react'
import { Form, Icon, Input, Button, DatePicker } from 'antd'

const { RangePicker } = DatePicker
const { TextArea } = Input

const AddTaskPure = ({ form }) => {
  const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }]
  }

  const { getFieldDecorator } = form

  return (
    <div>
      <h1>Add new task</h1>
      <Form>
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input title!' }]
          })(
            <Input
              prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Title"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Please input description!' }]
          })(<TextArea rows={5} placeholder="Description" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="button">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export const AddTask = Form.create({ name: 'AddTask' })(AddTaskPure)
