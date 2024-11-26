import React from 'react'
import EventItem from "../components/event-item";
import classes from "./event.list.module.css";
const EventList = ({items}) => {
  return (
    <ul className={classes.list}>
      {items.map(event=>{return <EventItem id={event.id} image={event.image} title={event.title} category={event.category} price={event.price}/>})}
    </ul>
  )
}

export default EventList
