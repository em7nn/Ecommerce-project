import React from 'react'
import KidsLatest from './kidsLatest/KidsLatest'
import MenLatest from './menLatest/MenLatest'
import WomenLatest from './womenLatest/WomenLatest'
import "./Latest.scss"

const Latest = () => {
  return (
    <div className='latest'>
        <MenLatest />
        <WomenLatest />
        <KidsLatest/>
    </div>
  )
}

export default Latest