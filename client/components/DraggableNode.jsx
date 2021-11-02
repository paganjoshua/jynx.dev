import React, { useEffect } from 'react'
import { useXarrow } from 'react-xarrows'
import Draggable from 'react-draggable'
import Node from './Node.jsx'

function DraggableNode(props) {
  useEffect(() => {
    function resizeHandleClosure() {
      const el = document.querySelector(`#${props.node.id}`);
      const draggable = el.closest(".draggable");

      // We set closed state on closest draggable because it is responsible for element shape.

      // As you cannot dynamically set min-height to min-width without messing with padding,
      // closed state is based on element proportions.
      // Min-width is set to min-content, so we let height continue to decrement with window resizing, and
      // we 'close' the element when height is no longer proportionally correct to width.

      // The 'width' marker adds greater UI consistency, i.e. 
      // prevents element from reopening as window gets smaller and proportions readjust.

      // sets initial closed state and 'width' marker
      let width = el.offsetWidth;
      draggable.classList.toggle("close", (el.offsetHeight / width) < 1.15);
      return () => {
        if (el.offsetHeight / el.offsetWidth < 1.15) {
          // Close Element and reset width marker
          draggable.classList.add("close");
          updateXarrow();
          width = el.offsetWidth;
        } else if (el.offsetWidth > width) {
          // Open Element if current width is greater than when it was closed
          draggable.classList.remove("close");
          updateXarrow();
        }
      }
    }

    // Create handler to remove eventlistener for debugging
    const resizeHandler = resizeHandleClosure();

    window.addEventListener("resize", resizeHandler)
  }, []);
  const updateXarrow = useXarrow();
  const onDrag = (e => {
    updateXarrow();
    e.stopPropagation();
    e.preventDefault();
    console.log('ondrag', props.node.id)
  })
  const onStart = (e => {
    updateXarrow();
    e.stopPropagation();
    e.preventDefault();
    console.log('onstart')
  })

  const onStop = (e => {
    updateXarrow();
    e.preventDefault();
    e.stopPropagation();

  })
  return (
    <Draggable onDrag={ onDrag} onStart={onStart}  onStop={onStop} >
      <div className={"draggable"} style={{left: props.node.x, top: props.node.y}} >
        <div className={"clipping"} >
          <Node {...props} content={props.node} />
        </div>
      </div>
    </Draggable>
  )
}

export default DraggableNode
