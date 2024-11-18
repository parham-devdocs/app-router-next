import React from 'react'
import EventItem from "./event-item";
const EventList = ({items}) => {
  return (
    <ul>
      {items.map(event=>{return <EventItem id={event.id} image={event.image} title={event.title} date={event.date} location={event.location}/>})}
    </ul>
  )
}

export default EventList
