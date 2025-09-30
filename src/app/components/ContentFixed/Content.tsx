import React from 'react'
import TopParameter from './TopParameter'
import BottomParameter from './BottomParameter'

export default function Content() {
  return (
    <div className='flex flex-col'>
      <TopParameter/>
      <BottomParameter/>
    </div>
  )
}
