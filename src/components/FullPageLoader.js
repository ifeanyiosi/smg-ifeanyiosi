import React from 'react'
import snake from './../assets/snake.gif'


function FullPageLoader() {
  return (
    <div className='fixed w-full h-full top-0 left-0'>
        <img src={snake} className='absolute' alt="" />
    </div>
  )
}

export default FullPageLoader