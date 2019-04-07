import React from 'react'
import { Table, Divider, Tag } from 'antd'
import moment from 'moment'

moment().format('llll')

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: 'Start',
    dataIndex: 'start',
    key: 'start'
  },
  {
    title: 'End',
    dataIndex: 'end',
    key: 'end'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Edit</a>
        <Divider type="vertical" />
        <a href="javascript:;">Cancel</a>
      </span>
    )
  }
]

const data = [
  {
    key: '1',
    title: 'งานนิทรรศการวิชาการ',
    start: '08/04/62',
    end: '08/04/62',
    tags: ['nice', 'internal']
  },
  {
    key: '1',
    title: 'ต้อนรับผอใหม่',
    start: '10/04/62',
    end: '10/04/62',
    tags: ['nice', 'internal']
  },
  {
    key: '1',
    title: 'คุมสอบ',
    start: '10/04/62',
    end: '10/04/62',
    tags: ['nice', 'internal']
  },
  {
    key: '1',
    title: 'ฝากตัวรับใช้นาย',
    start: '10/04/62',
    end: '10/04/62',
    tags: ['nice', 'internal']
  }
]

export const Overview = () => {
  return (
    <div id="container">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
