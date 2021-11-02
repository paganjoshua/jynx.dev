import React from 'react'

function Docker(props) {
  return (
	<div className={"wrapper-content " + props.content.id} >
		{props.children}
		<div className={"wrapper"} style={{background: 'rgb(38, 151, 237)', color: 'white'}} >
	    	Container
		</div>
	</div>
  )
}

export default Docker
