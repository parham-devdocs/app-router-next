import React, { useEffect, useState } from "react";
import EventList from "../components/eventList";
import EventSearch from "../components/event-search";
import { useRouter } from "next/router";
import getAllEvents from "../helper/api";

const HomePage = ({featuredEvents}) => {

  const router = useRouter();
  const findEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventSearch onSearch={findEvent} />
     
      {featuredEvents.length > 0 ? (
        <EventList items={featuredEvents} />
      ) : (
        <p>No events found.</p> // Display a message if no data is available
      )}
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const events = await getAllEvents()
 
  return {props:{featuredEvents:events},revalidate:10}
}