import React, { useState, useContext, useEffect, useRef } from 'react'
import { SelectedContext } from './Square.js'
import Xarrow from 'react-xarrows'
import { rename } from '../utils/rename'

function Node({children, content, s, setS, parent=null}) {
  const [selected, setSelected] = useContext(SelectedContext); 
  const [arrows, setArrows] = useState(content.arrows)
  const arrowsRef = useRef(arrows)
  const [node, setNode] = useState({
    arrows: arrows,
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
  const arws = []
  node.arrows.forEach((arrow, i) => {
    arws.push(<Xarrow key={i + node.id} {...arrow} /*start={node.id}*/ />)
  })
  useEffect(() => {
    rename(selected, node, setNode, s, setS)
  }, [selected, s])

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
      {arws}
    </div>
  )
}

export default Node
