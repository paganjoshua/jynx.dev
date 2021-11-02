
export function rename(selected, node, setNode, s, setS) {
  if (selected === null) {
	if (setS !== undefined) {
		setS({...node.styleRef})
	}
	if (s !== undefined) {
		setNode({...node, arrows: node.arrowsRef, style: s})
	} else {
    	setNode({...node, arrows: node.arrowsRef, style: node.styleRef});
	}
  } else if (selected.id === node.id) {
	if (setS !== undefined) {
		setS({...node.styleRef, zIndex: 1})
	}
	if (s !== undefined) {
		setNode({...node, arrows: node.arrowsRef, style: s})
	} 
	setNode({...node, arrows: node.arrowsRef, style: {...node.styleRef, zIndex: 1}});
  } else if (node.id !== selected.id) {
    let lightarrows = node.arrowsRef.map(arrow => (
      {...arrow, color: arrow.light}
    ))
    for (let i = 0; i < selected.arrows.length; i++) {
      if (selected.arrows[i].end === node.id) {
		if (setS !== undefined) {
			setS({...node.styleRef})
		}
		if (s !== undefined && selected.arrows[i].end !== node.id) {
			setNode({...node, arrows: lightarrows, style: s})
		} else {
			setNode({...node, arrows: lightarrows, style: node.styleRef});
		}
		return
      }
    }
	if (setS !== undefined) {
		setS({...node.styleRef, color: node.lighten, borderColor:node.lighten})
	}
	if (s !== undefined) {
		setNode({...node, arrows: lightarrows, style: s})
	} else {
    	setNode({...node, arrows: lightarrows, style: {...node.styleRef, color: node.lighten, borderColor: node.lighten}})
	}
  }
}

