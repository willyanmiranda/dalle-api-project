import React from 'react'

const InputRange = props => {
  return (
    <div>
        <label htmlFor={props.name}>{props.label} <span>1000</span></label>
        <input type="range" id={props.name}/>
    </div>
  )
}

export default InputRange;