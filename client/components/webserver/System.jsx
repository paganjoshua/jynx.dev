import React from 'react'
import ReactWrapper from '../wrappers/React.jsx'

const System = (props) => {
  const id = "system"
  const node = {
    arrows: [
      //{color: 'lightblue', light: 'lightcoral', start: id, end: 'jynx', startAnchor: 'top', endAnchor: 'bottom', headSize: 2}
    ],
    id: id, 
    className: 'system',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <ReactWrapper {...props} content={node} >
      <div className={"content-padding"} >
	System
      </div>
    </ReactWrapper>
  )
}

export default System
