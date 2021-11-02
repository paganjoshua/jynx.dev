import React, { useState } from 'react'
import DraggableNode from '../DraggableNode.jsx'
import Nginx from '../wrappers/Nginx.jsx'

const ReverseProxy = (props) => {
  const [s, setS] = useState({})
  const id = "webserver-nginx"
  const node = {
    arrows: [
      {color: 'var(--nginx)', light: 'var(--nginx-light)', start: id, end: 'website', startAnchor: 'auto', endAnchor: 'auto', headSize: 2}
    ],
    id: id, 
    className: 'webserver-nginx',
    lighten: 'lightgrey',
    style: {},
  }
  return (
    <div className={"webserver-nginx-wrapper"}>
      <DraggableNode setS={setS} {...props} node={node} >
        <Nginx {...props} content={node} >
          <div className={"content-padding"} >
            ReverseProxy
          </div>
        </Nginx>
      </DraggableNode>
    </div>
  )
}

export default ReverseProxy
