import React from 'react'
import Title from '../../components/Title'

const Dashboard = () => {
  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.' />
      <div className='flex gap-4 my-8'>
        {/* total bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
        <img src="" alt="" />
        </div>
        {/* total revenue */}
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
