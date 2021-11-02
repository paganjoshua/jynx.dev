import React, { useState, useContext, useEffect, useRef } from 'react'
import { SelectedContext } from './Square.js'
import { ArrowsContext } from './Arrows.jsx'
import { rename } from '../utils/rename'

function Node({children, content, s, setS, parent=null}) {


  const [selected, setSelected] = useContext(SelectedContext); 
  const [arrows, setArrows] = useContext(ArrowsContext)
  useEffect(() => {
    if (content.arrows.length) {
      const ato = {};
      content.arrows.forEach((arrow, i) => {
        ato[i + arrow.start + arrow.end] = arrow;
      })
      setArrows(prevArrows => ({...prevArrows, ...ato}));
    }
  }, [])
  
  const arrowsRef = useRef(content.arrows)
  const [node, setNode] = useState({
    arrows: content.arrows,
    arrowsRef: arrowsRef.current,
    className: content.className + (parent === null ? " node" : " node child"),
    id: content.id, 
    lighten: content.lighten,
    style: s,
    styleRef: null,
  });
  const styleRef = useRef(node.style)
  useEffect(() => {
    setNode({...node, styleRef: styleRef})
  }, [])

  useEffect(() => {
    rename(selected, node, setNode, s, setS)
  }, [selected, s])
  
  useEffect(() => {
    if (content.arrows.length) {
      const ato = {};
      node.arrows.forEach((arrow, i) => {
        ato[i + arrow.start + arrow.end] = arrow;
      });
      setArrows(prevArrows => ({...prevArrows, ...ato}));
    }
  }, [node]);

  return (
    <div
      id={node.id}
      className={node.className}
      style={{...node.style}} 
      onMouseLeave={() => {
	      setSelected(parent)
      }}  
      onMouseEnter={() => {
        setSelected(node)
      }} 
    >
      {children}
    </div>
  )
}

export default Node
