import React, { useState } from 'react'
import DraggableNode from './DraggableNode.jsx'
import Main from './github/Main.jsx'
import Dev from './github/Dev.jsx'

const GitHub = (props) => {
  const [s, setS] = useState({})
  const id = "github"
  const node = {
    arrows: [
    ],
    className: "toplevel",
    id: id, 
    lighten: 'lightgrey',
    style: {},
    //x: 70, 
    //y: 120,
  }
  return (
    <DraggableNode setS={setS} {...props} node={node} >
      <div >
        {/* <div>
          GitHub
        </div> */}
        <div className={"github-branches"} >
          <Dev s={s} parent={node} />
          <Main s={s} parent={node} />
        </div>
      </div>
    </DraggableNode>
  )
}

export default GitHub 
