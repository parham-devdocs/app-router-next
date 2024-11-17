import { useRouter } from "next/router";
import React from "react";

const SingleEvent = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>single event</div>;
};

export default SingleEvent;
