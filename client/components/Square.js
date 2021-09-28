import React, { createContext, useState } from 'react'
import { Xwrapper } from 'react-xarrows'
import DockerHub from './DockerHub.jsx'
import Control from './Control.jsx'
import Webserver from './Webserver.jsx'
import GitHub from './GitHub.jsx'

const canvasStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignContent: 'space-around',
  flexWrap: 'wrap',
}

export const SelectedContext = createContext(null)

const Square = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={canvasStyle} id="canvas" >
      <Xwrapper>
	  <SelectedContext.Provider value={[selected, setSelected]} >
	    <div style={
	      {
	        width: '100%', 
		height: '100%',
	        display: 'flex', 
	        flexDirection: 'column', 
	        justifyContent: 'space-around', 
	      }
	    } >
	      <div style={
		{
		  width: '100%', 
		  display: 'flex', 
		  flexDirection: 'row', 
		  justifyContent: 'space-between', 
		}
	      } >
		<div>
		  <GitHub    />
		</div>
		<div>
		  <DockerHub />
		</div>
	      </div>
	      <div className={"layer"} >
		<Control   />
	      </div>
	      <div className={"layer"} >
		<Webserver />
	      </div>
	    </div>
	  </SelectedContext.Provider>
      </Xwrapper>
    </div>
  )
}

export default Square
