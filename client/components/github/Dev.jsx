import React from 'react'
import Node from '../Node.jsx'

const Dev = (props) => {
  const id = "github-dev"
  const node = {
    arrows: [
      {color: 'var(--dev)', light:'var(--dev-light)', start: id, end: 'control-nginx', startAnchor: 'right', endAnchor: 'top', 
	      headSize: 3,
      },
      {color: 'var(--deploy)', light:'var(--deploy-light)', start: id, end: 'github-main', startAnchor: 'top', endAnchor: 'left', 
	headSize: 3, dashness: true,
      },
    ],
    id: id, 
    className: 'github-dev',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	Dev
      </div>
    </Node>
  )
}

export default Dev
