import React from 'react'
import Node from '../../Node.jsx'

const Develop = (props) => {
  const id = "control-develop"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'registry', startAnchor: 'auto', endAnchor: 'auto', 
	      headSize: 3, _cpy1Offset: 0, _cpy2Offset: 0
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
