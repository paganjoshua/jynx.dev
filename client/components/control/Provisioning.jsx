import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Ansible from '../wrappers/Ansible.jsx'
import Deploy from './provisioning/Deploy.jsx'
import Develop from './provisioning/Develop.jsx'
import Control from './provisioning/Control.jsx'
import Scale from './provisioning/Scale.jsx'

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
    <div className={"provisioning-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
        <Ansible setS={setS} {...props} content={node} >
          <div className={"content-padding"} >
            {/* <div>
              Provisioning
            </div> */}
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Develop parent={node} s={s} />
              <Deploy parent={node} s={s} />
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Control parent={node} s={s} />
              <Scale parent={node} s={s} />
            </div>
          </div>
        </Ansible>
      </DraggableNode>
    </div>
  )
}

export default Provisioning
