import React, { useState } from 'react'
import Docker from '../wrappers/Docker.jsx'
import Jynx from './Jynx.jsx'
import System from './System.jsx'

const Website = (props) => {
  const [s, setS] = useState({})
  const id = "website"
  const node = {
    arrows: [
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'dockerhub', startAnchor: 'right', endAnchor: 'bottom', 
	      headSize: 4, showHead: false, tailSize: 4, showTail: true, dashness: true, _cpx1Offset: 10, _cpx2Offset: 10,
      },
    ],
    className: "website",
    id: id, 
    lighten: 'lightgrey',
    style: {},
    parent: props.parent,
  }
  return (
    <Docker setS={setS} content={node} {...props} >
      <div className={"content-padding"} >
	Website
      	<div className={"inner"} >
      	  <Jynx parent={node} s={s} />
      	  <System parent={node} s={s} />
      	</div>
      </div>
    </Docker>
  )
}

export default Website
