import Image from "next/image";

import AddressIcon from "../icons/location-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { title, price, category,image } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={image} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>{category}</LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{ price }</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
