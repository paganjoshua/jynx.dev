import React from 'react'
import Nginx from '../wrappers/Nginx.jsx'

const ReverseProxy = (props) => {
  const id = "control-nginx"
  const node = {
    arrows: [
      {color: 'var(--nginx)', light: 'var(--nginx-light)', start: id, end: 'webhooks', startAnchor: 'bottom', endAnchor: 'top', headSize: 2}
    ],
    id: id, 
    className: 'nginx',
    lighten: 'lightgrey',
    style: {...props.style},
  }
  return (
    <Nginx {...props} content={node} >
      <div className={"content-padding"} >
	ReverseProxy
      </div>
    </Nginx>
  )
}

export default ReverseProxy
