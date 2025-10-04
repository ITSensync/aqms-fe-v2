import React from 'react'
import Navbar from './ContentFixed/Navbar'
import Content from './ContentFixed/Content'

export default function LayoutFixed() {
  return (
    <div className='h-screen bg-zinc-950'>
      <Navbar/>
      <Content/>
    </div>
  )
}
