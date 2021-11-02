import React from 'react'

function Ansible(props) {
  return (
	<div className={"wrapper-content " + props.content.id} {...props} >
		{props.children}
		<div className={"wrapper"} style={{background: 'var(--ansible)', color: 'white'}} >
			Ansible
		</div>
	</div>
  )
}

export default Ansible
