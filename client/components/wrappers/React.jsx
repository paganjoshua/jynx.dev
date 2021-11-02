import React from 'react'

function ReactWrapper(props) {
  return (
	<div className={"wrapper-content " + props.content.id} >
	    {props.children}
		<div className={"wrapper"} style={{background: 'rgb(97, 218, 251)', color: 'white'}} >
			React
		</div>
	</div>
  )
}

export default ReactWrapper
