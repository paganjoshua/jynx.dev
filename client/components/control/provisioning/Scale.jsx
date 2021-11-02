import React from 'react'
import Node from '../../Node.jsx'

const Scale = (props) => {
  const id = "provisioning-scale"
  const node = {
    arrows: [
      {color: 'brown', light: 'var(--ansible-light)', start: 'provisioning-scale', end: 'webserver', startAnchor: 'auto', endAnchor: 'auto', 
	      headSize: 4, _cpx1Offset: 0, _cpx2Offset: 0
      },
    ],
    id: id, 
    className: 'provisioning-scale',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
      	Scale
      </div>
    </Node>
  )
}

export default Scale
