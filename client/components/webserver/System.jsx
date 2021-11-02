import React, { useState } from 'react'
import ReactWrapper from '../wrappers/React.jsx'
import DraggableNode from '../DraggableNode.jsx'

const System = (props) => {
  const [s, setS] = useState({})
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
    <div className={"system-wrapper"}>
      <DraggableNode setS={setS} {...props} node={node} >
        <ReactWrapper {...props} content={node} >
          <div className={"content-padding"} >
            System
          </div>
        </ReactWrapper>
      </DraggableNode>
    </div>
  )
}

export default System
