import React, { useState } from 'react'
import DraggableNode from './DraggableNode.jsx'
import Nginx from './webserver/Nginx.jsx'
import Website from './webserver/Website.jsx'

const Webserver = (props) => {
  const [s, setS] = useState({})
  const id = "webserver"
  const node = {
    arrows: [
      //{color: 'Blue', light:'lightblue', start: id, end: 'github', startAnchor: 'top', endAnchor: 'right'},
    ],
    className: "toplevel",
    id: id, 
    lighten: 'lightgrey',
    style: {},
    x: 267,
    y: 520,
  }
  return (
    <div className={"layer webserver-wrapper"} >
      <DraggableNode setS={setS} {...props} node={node} >
        <div >
          {/* <div>
            Webserver
          </div> */}
          <Website s={s} parent={node} {...props} />
          <Nginx s={s} parent={node} {...props} />
        </div>
      </DraggableNode>
    </div>
  )
}

export default Webserver
