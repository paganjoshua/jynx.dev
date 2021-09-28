import React from 'react'
import Node from '../../Node.jsx'

const Deploy = (props) => {
  const id = "control-deploy"
  const node = {
    arrows: [
      {color: 'var(--deploy)', light: 'var(--deploy-light)', start: id, end: 'website', startAnchor: 'bottom', endAnchor: 'top', 
	      headSize: 4, _cpx1Offset: 0, _cpx2Offset: 0
      },
    ],
    id: id, 
    className: 'deploy',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	Deploy
      </div>
    </Node>
  )
}

export default Deploy
