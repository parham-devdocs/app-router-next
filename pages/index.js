import React from 'react'
import EventList from '../components/eventList'
import { getAllEvents, getFilteredEvents } from '../data/DummyData'
import EventSearch from '../components/event-search'
import { useRouter } from 'next/router'

const HomePage = () => {
  const events = getAllEvents()
  const router=useRouter()
  const findEvent = (year, month) => {
    
   router.push(`/events/${year}/${month}`)
  }
  return (
    <div>
      <EventSearch onSearch={findEvent}/>
      <EventList items={events} />
    </div>
  )
}

export default HomePage
