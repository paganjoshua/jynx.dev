import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Golang from '../wrappers/Golang.jsx'

const Webhooks = (props) => {
  const [s, setS] = useState({})
  const id = "webhooks"
  const node = {
    arrows: [
      {color: 'var(--dev)', light:'var(--dev-light)', start: id, end: 'control-develop', startAnchor: 'auto', endAnchor: 'top', 
	      headSize: 3, _cpy1Offset: 0, _cpy2Offset: 0},
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'control-deploy', startAnchor: 'auto', endAnchor: 'top', 
	      headSize: 3, _cpy1Offset: 0, _cpy2Offset: 0},
    ],
    id: id, 
    className: 'webhooks',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"webhooks-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
        <Golang {...props} content={node} >
          <div className={"content-padding"} >
            Webhooks
          </div>
        </Golang>
      </DraggableNode>
    </div>
  )
}

export default Webhooks
