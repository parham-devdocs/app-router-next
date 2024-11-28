import React from 'react'
import getAllEvents from "../../helper/api";
import EventList from '../../components/eventList'

const EventsPage = ({events}) => {
  return (
    <div>
        <EventList items={events}/>
    </div>
  )
}

export default EventsPage

export async function getStaticProps() {
  const events = await getAllEvents();
  console.log(events)
return { props: { events }, revalidate: 10 };
}