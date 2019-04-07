import React from 'react'
import Wrapper from '../components/Wrapper'
import { Card, Avatar, Timeline } from 'antd'

export default () => {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <div>
          <Card
            style={{ width: 800 }}
            title="โรงเรียนจอมเวทย์"
            hoverable
            headStyle={{ fontSize: '2rem', fontFamily: 'Kanit' }}
          >
            <Avatar size={256} src="/static/teacher.jpg" />
            <br />
            <br />

            <div style={{ fontFamily: 'Kanit' }}>
              <h2>วิชาดา ธีปประกรศิลป์</h2>
              <p>อายุ 37 ปี</p>
              <p>ครูชำนาญการ กลุ่มสาระการเรียนรู้พลศึกษา</p>
            </div>

            <Timeline>
              <Timeline.Item>
                เกิดที่บ้านน้ำวน ตำบลอเรศ อำเภอเมือง จังหวัดนครแสวง
              </Timeline.Item>
              <Timeline.Item>
                จบการศึกษาชั้นอนุบาลที่โรงเรียนอนุบาลปฐมเวทย์
              </Timeline.Item>
              <Timeline.Item>
                จบการศึกษาชั้นประถมศึกษาที่โรงเรียนปฐมเวทย์
              </Timeline.Item>
              <Timeline.Item>
                จบการศึกษาชั้นมัธยมศึกษาที่โรงเรียนปฐมเวทย์
              </Timeline.Item>
              <Timeline.Item>
                จบการศึกษาระดับปริญญาตรี ครุศาสตร์ จาก มหาวิทยาลัยเอกแขนง
              </Timeline.Item>
              <Timeline.Item>
                เข้ารับราชการครูในปี 1990 ที่โรงเรียนปฐมเวทย์
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
      </div>
    </Wrapper>
  )
}
