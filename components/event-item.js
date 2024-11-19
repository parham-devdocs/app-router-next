import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./event.item.module.css";
import Button from "./ui/button";
import ArrowIcon from "./icons/arrow-right-icon";
import LocationIcon from "./icons/location-icon";
import DateIcon from "./icons/date-icon";
const EventItem = ({ title, image, location, date, id }) => {
  const formattedAddress = location.replace(",", "\n");
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={150} height={100} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />

            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
