import Link from 'next/link'
import React from 'react'
import classes from "./button.module.css";
const Button = ({ link, children,onclick }) => {
  if (link) {
      return <Link href={link}>{children}</Link>;
  }
 return <button className={classes.btn} onClick={onclick}>{ children }</button>
}

export default Button
