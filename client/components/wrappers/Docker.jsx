import React from 'react'
import Node from '../Node.jsx'

function Docker(props) {
  return (
	<Node {...props} content={props.content} >
	    {props.children}
	  <div className={"wrapper"} style={{background: 'rgb(38, 151, 237)', color: 'white'}} >
	    Container
	   </div>
	</Node>
  )
}

export default Docker
