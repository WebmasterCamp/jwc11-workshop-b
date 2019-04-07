import React from 'react'
import Wrapper from '../components/Wrapper'
import { Overview } from '../components/Overview'

export default () => {
  return (
    <Wrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: '50px'
        }}
      >
        <Overview />
      </div>
    </Wrapper>
  )
}
