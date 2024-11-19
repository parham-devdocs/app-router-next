import { useRouter } from "next/router";
import { getEventById } from "../../data/DummyData";
import React from "react";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.query);
  const event = getEventById(router.query.id);
  console.log(event.date);
  return <div>{event.location }</div>;
};

export default SingleEvent;
