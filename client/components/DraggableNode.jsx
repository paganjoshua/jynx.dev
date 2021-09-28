import React from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import Draggable from 'react-draggable'
import Node from './Node.jsx'

function DraggableNode(props) {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow} >
      <div className={"draggable"} style={{left: props.node.x, top: props.node.y}} >
	<Node {...props} content={props.node}  
	/>
      </div>
    </Draggable>
  )
}

export default DraggableNode
