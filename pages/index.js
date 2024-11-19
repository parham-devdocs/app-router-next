import React from 'react'
import EventList from '../components/eventList'
import { getAllEvents } from '../data/DummyData'
import EventSearch from '../components/event-search'

const HomePage = () => {
  const events=getAllEvents()
  return (
    <div>
      <EventSearch/>
      <EventList items={events} />
    </div>
  )
}

export default HomePage
