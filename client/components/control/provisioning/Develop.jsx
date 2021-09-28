import React from 'react'
import Node from '../../Node.jsx'

const Develop = (props) => {
  const id = "control-develop"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'registry', startAnchor: 'left', endAnchor: 'right', 
	      headSize: 3, _cpx1Offset: -15, _cpx2Offset: -15
      },
    ],
    id: id, 
    className: 'develop',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	Develop
      </div>
    </Node>
  )
}

export default Develop
