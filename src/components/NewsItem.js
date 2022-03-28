import React from 'react'

const NewsItem = (props) => {
      const {title,description,readMore,img,date,author,source} = props    
    return (
      <div className='container my-2'>
            <div className="card my-2 rounded" style={{width: "18rem"}}>
    <img src= {img?img:'https://logopond.com/logos/8b34fdf9058d504809de36145d2fa657.png'} style={{objectFit:'cover',height:'15vw',width:'100%'}} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">{title.length<50?title:title.slice(0,50)+'...'}</h5>
    <span className="badge bg-danger">{source}</span>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">{author} {new Date(date).toGMTString()}</small></p>    
    <a href={readMore} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Open news</a>
    </div>
</div>
        
      </div>
    )
  }
  export default NewsItem
