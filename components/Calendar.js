import React, { useState } from 'react'
import { Calendar, Badge, Card, Icon, Button, Upload } from 'antd'

import '../static/calendar.css'

function getListData(value) {
  let listData
  switch (value.date()) {
    case 8:
      listData = [{ type: 'success', content: 'ต้อนรับครูใหม่' }]
      break
    case 10:
      listData = [
        { type: 'warning', content: 'ต้อนรับผอใหม่' },
        { type: 'success', content: 'คุมสอบ' },
        { type: 'error', content: 'ฝากตัวรับใช้นาย' }
      ]
      break
    default:
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  )
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394
  }
}

function monthCellRender(value) {
  const num = getMonthData(value)
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
    </div>
  ) : null
}

export const CalendarOverview = () => {
  const [calendarVisibility, setCalendarVisibility] = useState(true)

  return (
    <div>
      {calendarVisibility ? (
        <CalendarComponent onSelect={() => setCalendarVisibility(false)} />
      ) : (
        <CardComponent disable={() => setCalendarVisibility(true)} />
      )}
    </div>
  )
}

const CalendarComponent = ({ onSelect }) => {
  return (
    <div>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={onSelect}
      />
    </div>
  )
}

const CardComponent = ({ disable }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Card
        style={{ width: 800 }}
        title="ต้อนรับครูใหม่"
        actions={[
          <Icon type="setting" />,
          <Icon type="eye-invisible" onClick={disable} />,
          <Icon type="check" onClick={disable} />
        ]}
        hoverable
        headStyle={{
          backgroundColor: '#F7C45F',
          color: 'black'
        }}
      >
        <p>Start : 10/04/62</p>
        <p>End : 10/04/62</p>
        <p>
          ขอให้คุณครูมาต้อนรับคุณครูที่มาใหม่วันนี้ ที่ชื่อ สามารถ สมดี
          และออกไปซื้อของมาต้อนรับครูที่จะมาในวันนี้ หลังจากนั้นช่วยดูแล
          และแนะนำเขา คอยสอนงานเกี่ยวกับโรงเรียนนี้ ว่ามีอะไรต้องทำบ้าง
          บอกเกี่ยวกับกฎของโรงเรียนให้ครบถ้วนเรียบร้อย
        </p>
        <Upload>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </Card>
    </div>
  )
}
