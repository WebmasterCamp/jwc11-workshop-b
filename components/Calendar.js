import React, { useState } from 'react'
import { Calendar, Badge, Card, Icon } from 'antd'

function getListData(value) {
  let listData
  switch (value.date()) {
    case 8:
      listData = [{ type: 'success', content: 'งานนิทรรศการวิชาการ' }]
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
    <React.Fragment>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
        onSelect={onSelect}
      />
      <style jsx>
        {`
          .events {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .events .ant-badge-status {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-overflow: ellipsis;
            font-size: 12px;
          }
          .notes-month {
            text-align: center;
            font-size: 28px;
          }
          .notes-month section {
            font-size: 28px;
          }
        `}
      </style>
    </React.Fragment>
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
        style={{ width: 300 }}
        title="ฝากตัวรับใช้นาย"
        actions={[
          <Icon type="setting" />,
          <Icon type="eye-invisible" onClick={disable} />,
          <Icon type="check" onClick={disable} />
        ]}
      >
        <p>Start : 10/04/62</p>
        <p>End : 10/04/62</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
          nisi, egestas vel sagittis sed, semper vel risus. Sed luctus elit
          nulla, at maximus eros bibendum eget. Proin porttitor, nulla at tempus
          eleifend, mi erat tempus lacus, eget posuere erat sem a diam.
          Suspendisse potenti. Fusce est tellus, ornare ut placerat a,
          vestibulum quis lacus. Aenean sed ex blandit, facilisis turpis eget,
          ultrices velit. Aliquam erat volutpat. Pellentesque imperdiet
          consectetur hendrerit. Vestibulum porttitor a nunc sed vehicula.
          Mauris neque nibh, vehicula a enim sit amet, tincidunt tincidunt nunc.
          Mauris tortor nunc, congue a arcu nec, pulvinar dignissim leo.
        </p>
      </Card>
    </div>
  )
}
