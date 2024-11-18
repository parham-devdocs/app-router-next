import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventItem = ({ title, image, location, date, id }) => {
 const formattedAddress=location.replace(",","\n")
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", { day: "numeric", "month": "long", year: "numeric" })
  return (
    <li>
      <Image src={`/${image}`} alt={title} width={150} height={100} />
      <div>
        <div>
                  <h2>{ title }</h2>
          <div>
                      <time>{ humanReadableDate }</time>
          </div>
          <div>
                      <address>{ formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/evnets/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
