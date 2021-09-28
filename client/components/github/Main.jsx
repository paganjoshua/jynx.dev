import React from 'react'
import Node from '../Node.jsx'

const Main = (props) => {
  const id = "github-main"
  const node = {
    arrows: [
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'dockerhub', startAnchor: 'right', endAnchor: 'left', },
    ],
    id: id, 
    className: 'github-main',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	Main
      </div>
    </Node>
  )
}

export default Main
