import React from 'react'
import EventList from './components/eventList'
import { getAllEvents } from '../data/DummyData'

const HomePage = () => {
  const events=getAllEvents()
  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default HomePage
