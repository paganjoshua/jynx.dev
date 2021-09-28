import React, { useEffect, useState, useRef } from 'react'
import DraggableNode from './DraggableNode.jsx'
import Provisioning from './control/Provisioning.jsx'
import Webhooks from './control/Webhooks.jsx'
import Registry from './control/Registry.jsx'
import Nginx from './control/Nginx.jsx'
import Development from './control/Development.jsx'

const Control = (props) => {
  const [s, setS] = useState({});
  const id = "control" 
  const node = {
    arrows: [
    ],
    className: "toplevel",
    id: id, 
    lighten: 'lightgrey',
    style: {},
    x: 180,
    y: 250,
  }
  return (
    <DraggableNode setS={setS} {...props} node={node} >
      <div >
	Control
      <div style={{display: 'flex', flexDirection: 'row'}}  >
	<div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
	  <Registry parent={node} s={s} {...props} />
	  <Development parent={node} s={s} {...props} />
	</div>  
	<Provisioning parent={node} s={s} {...props} />
	<div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
	  <Nginx parent={node} s={s} {...props} />
	  <Webhooks parent={node} s={s} {...props} />
	</div>
      </div>
      </div>
    </DraggableNode>
  )
}

export default Control
