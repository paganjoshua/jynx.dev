import React from 'react'
import Node from '../Node.jsx'

const Development = (props) => {
  const id = "development"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'github-dev', startAnchor: 'left', endAnchor: 'bottom',
	      headSize: 4, tailSize: 4, showTail: true, dashness: true, /*_cpx1Offset: -15, _cpx2Offset: -20*/ },
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'registry', startAnchor: 'top', endAnchor: 'bottom', 
	      showHead: false, dashness: true, /*_cpx1Offset: 26, _cpx2Offset: 26*/},
    ],
    id: id, 
    className: 'development',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <Node {...props} content={node} >
      <div className={"content-padding"} >
	Development
      </div>
    </Node>
  )
}

export default Development
