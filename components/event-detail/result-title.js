import React from 'react'
import Button from '../ui/button'
import classes from "./result-title.module.css";
const ResultTitle = ({date}) => {
    const humanReadableDate=new Date(date).toLocaleDateString("en-US",{month:"long",year:"numeric"})
  return (
    <div className={classes.container}>
          <p className={classes.date}>events in {humanReadableDate}</p>
          <Button  link="/events">show all events</Button>
    </div>
  )
}

export default ResultTitle
