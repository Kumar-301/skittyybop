import React from 'react'

export default function Button(props) {
  return (
    <button type={props.type} 
    className={props.button}
    onClick={props.onClick}
    >{props.value}</button>
  )
}
