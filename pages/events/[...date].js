import { useRouter } from "next/router";
import React from "react";
import { getFilteredEvents } from "../../data/DummyData";
import EventList from "../../components/eventList";

const SpecialEvent = () => {

  const router=useRouter()
  const date = router.query.date;
  if (!date) {
    return <p className="center">Loading</p>;
  }
  const year = Number(date[0]);
  const month = Number(date[1])
  if (isNaN(year)|| isNaN(month)|| year<2021 || year>2030|| month<1|| month>12) {
    return <p className=" center">invalid filter</p>
  }
  const filteredDate={year,month}
  const filteredEvent = getFilteredEvents(filteredDate)
  if (filteredEvent.length === 0) {
    setTimeout(()=>{router.replace("/events")},3000)
    return <p className=" center">no event found</p>
  }
  return <div><EventList items={filteredEvent}/></div>;
};

export default SpecialEvent;
