import React from 'react'
import Node from '../Node.jsx'

function Nginx(props) {
  return (
	<Node {...props} content={props.content} >
	    {props.children}
	  <div className={"wrapper"} style={{background: 'rgb(0, 150, 57)', color: 'white'}} >
	    Nginx
	  </div>
	</Node>
  )
}

export default Nginx
