import { useRouter } from "next/router";
import getAllEvents, { getEventById } from "../../helper/api";
import React, { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEvent = ({selectedEvent}) => {
  if (!selectedEvent) {
    return <h1>event not found</h1>;
  }
  return (
    <Fragment>
      <EventSummary title={selectedEvent.category} />
      <EventLogistics
        title={selectedEvent.title}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      
    </Fragment>
  );
};

export default SingleEvent;

export const getStaticPaths = async () => {
  const events = await getAllEvents(); // Fetch all events
  const paths = events.map((event) => ({
    params: { id: event.id.toString() }, // Ensure ID is a string
  
  }
  
  
  ));
  return {
    paths:paths,
    fallback: false, // false or "blocking"
  };
};

export async function getStaticProps(context) {
  const eventId = await context.params.id;
  
  const event = await getEventById(eventId);
  return {
    props:{selectedEvent:event},revalidate:10
  };
}
