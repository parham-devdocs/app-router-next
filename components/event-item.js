import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./event.item.module.css";
import Button from "./ui/button";
import ArrowIcon from "./icons/arrow-right-icon";
import LocationIcon from "./icons/location-icon";
import DateIcon from "./icons/date-icon";
const EventItem = ({ title, image, price, category, id }) => {
 
  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={150} height={100} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <p>{ category }</p>
          </div>
          <div className={classes.address}>
            <LocationIcon />

            <p>{ price} $</p>
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
