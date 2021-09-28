import React from 'react'
import Node from '../Node.jsx'

function Ansible(props) {
  return (
	<Node {...props} content={props.content} >
	    {props.children}
	  <div className={"wrapper"} style={{background: 'rgb(21, 21, 21)', color: 'white'}} >
	    Ansible
	  </div>
	</Node>
  )
}

export default Ansible
