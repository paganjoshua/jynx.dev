import React from 'react'

function Golang(props) {
  return (
	<div className={"wrapper-content " + props.content.id} >
	    {props.children}
		<div className={"wrapper"} style={{background: 'rgb(0, 125, 156)', color: 'white'}} >
			Golang
		</div>
	</div>
  )
}

export default Golang
