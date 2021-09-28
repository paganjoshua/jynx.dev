import React, { useState } from 'react'
import Ansible from '../wrappers/Ansible.jsx'
import Deploy from './provisioning/Deploy.jsx'
import Develop from './provisioning/Develop.jsx'

const Provisioning = (props) => {
  const [s, setS] = useState({})
  const id = 'provisioning' 
  const node = {
    arrows: [
      //{color: 'rgb(36, 150, 237)', light: 'lightcoral', start: id, end: 'webserver', startAnchor: 'bottom', endAnchor: 'top', 
      //        headSize: 4, curveness: 0.8, _cpy2Offset: 0
      //},
    ],
    id: id,
    className: 'provisioning',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <Ansible setS={setS} {...props} content={node} >
      <div className={"content-padding"} >
	Provisioning
	<div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      	  <Develop parent={node} s={s} />
      	  <Deploy parent={node} s={s} />
      	</div>
      </div>
    </Ansible>
  )
}

export default Provisioning
