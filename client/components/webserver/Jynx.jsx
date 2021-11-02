import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Golang from '../wrappers/Golang.jsx'

const Jynx = (props) => {
  const [s, setS] = useState({})
  const node = {
    arrows: [
      //{color: 'Green', light: 'lightgreen', end: 'carroll', startAnchor: 'bottom', endAnchor: 'top'}
    ],
    id: 'jynx', 
    className: 'jynx',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"jynx-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
      <Golang {...props} content={node} >
        <div className={"content-padding"} >
          jynx.dev
        </div>
      </Golang>
      </DraggableNode>
    </div>
  )
}

export default Jynx
