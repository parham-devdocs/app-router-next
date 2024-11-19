import Link from 'next/link'
import React from 'react'

const Button = ({link,children}) => {
  return (
      <Link href={link}>{ children }</Link>
  )
}

export default Button
