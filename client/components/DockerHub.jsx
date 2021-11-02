import React from 'react'
import DraggableNode from './DraggableNode.jsx'

const DockerHub = (props) => {
  const id = "dockerhub"
  const node = {
    arrows: [
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'control-nginx', startAnchor: 'auto', endAnchor: 'auto', 
	      headSize: 3
      },
    ],
    className: "toplevel",
    id: id, 
    lighten: 'lightgrey',
    style: {},
    //x: 725, 
    //y: 120,
  }
  return (
    <DraggableNode {...props} node={node} >
      <div >
	DockerHub
      </div>
    </DraggableNode>
  )
}

export default DockerHub
