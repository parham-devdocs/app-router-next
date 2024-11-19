import React from 'react'
import { getAllEvents } from '../../data/DummyData'
import EventList from "../../components/eventList";
const EventsPage = () => {
  const events=getAllEvents()
  return (
    <div>
    <EventList items={events}/>
    </div>
  )
}

export default EventsPage
