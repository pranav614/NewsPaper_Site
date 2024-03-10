import React from 'react'
import { Link } from 'react-router-dom'

const CryptoCard = ({cryptoCard}) => {
    const newsDescription=(des,max)=>{
        if (des.length>max){
            return des.substring(0,max)+"..."
        }else{
            return des
        }
    }
  return (
    <div className=' w-fit shadow-md shadow-[#a3a0a0] '>
        <div className="card " style={ {width: '18rem',minHeight:'20rem'}}>
    <img src={cryptoCard.urlToImage} className="card-img-top h-[145px]" alt="..."/>
    <div className="card-body bg-[#fbf1df]">
      <h5 className="card-title">{ newsDescription(cryptoCard.title,70)}</h5>
      <Link to={cryptoCard.url}><div  className="btn btn-primary bg-black border-black">Click Here</div></Link>
    </div>
  </div>
  </div>
  )
}

export default CryptoCard