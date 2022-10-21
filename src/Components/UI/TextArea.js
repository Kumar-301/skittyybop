import React from 'react'

function TextArea(props) {
  return (
    <textarea id={props.id} 
    name={props.name} 
    rows={props.rows} 
    cols={props.col}
    className={props.className}>
    
</textarea>
  )
}

export default TextArea