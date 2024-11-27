import { useRouter } from "next/router";
import { getEventById } from "../../data/DummyData";
import React, { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.query);
  const event = getEventById(router.query.id);
  
  if (!event) {
    return <h1>event not found</h1>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
     imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default SingleEvent;
