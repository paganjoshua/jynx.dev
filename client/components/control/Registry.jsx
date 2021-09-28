import React from 'react'
import Docker from '../wrappers/Docker.jsx'

const Registry = (props) => {
  const id = "registry"
  const node = {
    arrows: [
      {color: 'var(--dev)', light: 'var(--dev-light)', start: id, end: 'github-dev', startAnchor: 'left', endAnchor: 'bottom', 
	      headSize: 4, tailSize: 4, showTail: true, dashness: true, /*_cpx1Offset: -26, _cpx2Offset: -66*/},
    ],
    id: id, 
    className: 'registry',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <Docker {...props} content={node} >
      <div className={"content-padding"} >
	Local Registry
      </div>
    </Docker>
  )
}

export default Registry
