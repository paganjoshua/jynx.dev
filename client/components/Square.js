import React, { createContext, useState } from 'react'
import { Xwrapper } from 'react-xarrows'
import DockerHub from './DockerHub.jsx'
import Control from './Control.jsx'
import Webserver from './Webserver.jsx'
import GitHub from './GitHub.jsx'

const canvasStyle = {
  width: '100vmin',
  height: '100vmin',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  flexWrap: 'wrap',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export const SelectedContext = createContext(null)

const Square = () => {
  const [arrows, setArrows] = useState({});
  const [selected, setSelected] = useState(null);

  return (
    <div style={canvasStyle} id="canvas" >
	  <SelectedContext.Provider value={[selected, setSelected]} >
	    {/* <div style={
	      {
	        width: '100%', 
			height: '100%',
	        display: 'flex', 
	        flexDirection: 'column', 
	        justifyContent: 'space-around', 
	      }
	    } > */}
	      {/* <div style={
			{
		  		width: '100%', 
				display: 'flex', 
				flexDirection: 'row', 
				justifyContent: 'center',
				marginRight: '22%', 
			}
	      } > */}
			<div className="layer github-wrapper">
				<GitHub    />
			</div>
			<div className="layer dockerhub-wrapper">
				<DockerHub />
			</div>
	      {/* </div> */}
	    <div className={"layer control-wrapper"} >
		  <Control   />
	    </div>
		  <Webserver />
		{/* </div> */}
	  </SelectedContext.Provider>
    </div>
  )
}

export default Square
