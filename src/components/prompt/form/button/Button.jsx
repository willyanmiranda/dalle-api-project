import React from 'react'
import "./Button.css"

const Button = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} onClick={props.handleClick}>{props.name}</button>
  )
})

export default Button