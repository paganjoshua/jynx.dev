import React from 'react'
import Node from '../Node.jsx'

function Golang(props) {
  return (
	<Node {...props} content={props.content} >
	    {props.children}
	  <div className={"wrapper"} style={{background: 'rgb(0, 125, 156)', color: 'white'}} >
	    Golang
	  </div>
	</Node>
  )
}

export default Golang
