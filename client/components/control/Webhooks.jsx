import React from 'react'
import Golang from '../wrappers/Golang.jsx'

const Webhooks = (props) => {
  const id = "webhooks"
  const node = {
    arrows: [
      {color: 'var(--dev)', light:'var(--dev-light)', start: id, end: 'control-develop', startAnchor: 'left', endAnchor: 'right', 
	      headSize: 3, _cpy1Offset: 0, _cpy2Offset: 0},
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'control-deploy', startAnchor: 'left', endAnchor: 'right', 
	      headSize: 3, _cpy1Offset: 0, _cpy2Offset: 0},
    ],
    id: id, 
    className: 'webhooks',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <Golang {...props} content={node} >
      <div className={"content-padding"} >
	Webhooks
      </div>
    </Golang>
  )
}

export default Webhooks
