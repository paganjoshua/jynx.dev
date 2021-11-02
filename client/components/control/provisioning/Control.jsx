import React from 'react'
import Node from '../../Node.jsx'

const Control = (props) => {
  const id = "provisioning-control"
  const node = {
    arrows: [
      {color: 'cadetblue', light: 'var(--ansible-light)', start: 'provisioning-control', end: 'control', startAnchor: 'auto', endAnchor: 'auto', 
	      headSize: 4, _cpx1Offset: 0, _cpx2Offset: 0
      },
    ],
    id: id, 
    className: 'provisioning-control',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	      Control
      </div>
    </Node>
  )
}

export default Control
