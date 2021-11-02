import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Node from '../Node.jsx'

const Development = (props) => {
  const [s, setS] = useState({})
  const id = "development"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'github-dev', startAnchor: 'auto', endAnchor: 'auto',
	      headSize: 4, tailSize: 4, showTail: true, dashness: true, /*_cpx1Offset: -15, _cpx2Offset: -20*/ },
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'registry', startAnchor: 'auto', endAnchor: 'auto', 
	      showHead: false, dashness: true, /*_cpx1Offset: 26, _cpx2Offset: 26*/},
    ],
    id: id, 
    className: 'development',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"development-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
        <div className={"content-padding"} >
          Development
        </div>
      </DraggableNode>
    </div>
  )
}

export default Development
