import React, { useState } from 'react'
import Docker from '../wrappers/Docker.jsx'
import DraggableNode from '../DraggableNode.jsx'

const Registry = (props) => {
  const [s, setS] = useState({});
  const id = "registry"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'github-dev', startAnchor: 'auto', endAnchor: 'auto', 
	      headSize: 4, tailSize: 4, showTail: true, dashness: true, /*_cpx1Offset: -26, _cpx2Offset: -66*/},
    ],
    id: id, 
    className: 'registry',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"registry-wrapper"}>
      <DraggableNode setS={setS} {...props} node={node} >
        <Docker {...props} content={node} >
          <div className={"content-padding"} >
            Local Registry
          </div>
        </Docker>
      </DraggableNode>
    </div>
  )
}

export default Registry
