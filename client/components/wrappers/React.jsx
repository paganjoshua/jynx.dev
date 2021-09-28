import React from 'react'
import Node from '../Node.jsx'

function ReactWrapper(props) {
  return (
	<Node {...props} content={props.content} >
	    {props.children}
	  <div className={"wrapper"} style={{background: 'rgb(97, 218, 251)', color: 'white'}} >
	    React
	  </div>
	</Node>
  )
}

export default ReactWrapper
