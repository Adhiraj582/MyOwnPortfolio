import React from 'react'

function ProjectItem({image,name,title}) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
        <p>{title}</p>
    </div>
  )
}

export default ProjectItem