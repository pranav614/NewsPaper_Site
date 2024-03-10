import React from 'react'
import { Link } from 'react-router-dom'


const TopHeadLinesCard = ({news}) => {
  const titleLength=(title,max)=>{
    if (title.length>max){
        return title.substring(0,max)+"..."
    }
}
const newsDescription=(des,max)=>{
    if (des.length>max){
        return des.substring(0,max)+"..."
    }
}
  return (
    <div className=' w-fit shadow-md shadow-[#a3a0a0] '>
    <div className="card " style={ {width: '18rem',minHeight:'20rem'}}>
<img src={news.urlToImage} className="card-img-top h-[200px] img-fluid" alt="..."/>
<div className="card-body bg-[#fbf1df]">
<h5 className="card-title">{news.title===null?newsDescription(news.description,70): titleLength(news.title,70)}</h5>
  <Link to={news.url}><div  className="btn btn-primary bg-black border-black">Click Here</div></Link>
</div>
</div>
</div>
  )
}

export default TopHeadLinesCard