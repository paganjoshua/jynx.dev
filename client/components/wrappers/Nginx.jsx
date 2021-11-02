import React from 'react'

function Nginx(props) {
  return (
	<div className={"wrapper-content " + props.content.id} >
	    {props.children}
		<div className={"wrapper"} style={{background: 'rgb(0, 150, 57)', color: 'white'}} >
			Nginx
		</div>
	</div>
  )
}

export default Nginx
