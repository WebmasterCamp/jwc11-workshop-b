import React from 'react'
import Wrapper from '../components/Wrapper'
import { CalendarOverview } from '../components/Calendar'

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
        <CalendarOverview />
      </div>
    </Wrapper>
  )
}
