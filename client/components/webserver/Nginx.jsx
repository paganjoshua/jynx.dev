import React from 'react'
import Nginx from '../wrappers/Nginx.jsx'

const ReverseProxy = (props) => {
  const id = "webserver-nginx"
  const node = {
    arrows: [
      {color: 'var(--nginx)', light: 'var(--nginx-light)', start: id, end: 'website', startAnchor: 'top', endAnchor: 'bottom', headSize: 2}
    ],
    id: id, 
    className: 'ansible',
    lighten: 'lightgrey',
    style: {},
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
