import React from 'react'
import Wrapper from '../components/Wrapper'
import { AddTask } from '../components/AddTask'

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
        <AddTask />
      </div>
    </Wrapper>
  )
}
