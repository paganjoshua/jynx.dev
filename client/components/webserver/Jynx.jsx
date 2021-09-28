import React from 'react'
import Golang from '../wrappers/Golang.jsx'

const Jynx = (props) => {
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
    <Golang {...props} content={node} >
      <div className={"content-padding"} >
	jynx.dev
      </div>
    </Golang>
  )
}

export default Jynx
