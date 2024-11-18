import React from 'react'
import EventItem from "./event-item";
import classes from "./event.list.module.css";
const EventList = ({items}) => {
  return (
    <ul className={classes.list}>
      {items.map(event=>{return <EventItem id={event.id} image={event.image} title={event.title} date={event.date} location={event.location}/>})}
    </ul>
  )
}

export default EventList
