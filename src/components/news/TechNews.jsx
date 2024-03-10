import React from 'react'
import { ScaleLoader } from 'react-spinners';
import TechNewsCard from '../cards/TechNewsCard';
import useTechNews from '../../customHooks/useTechNews';
import usePageination from '../../customHooks/usePageination';

const TechNews = () => {
  const {loader,techNews,techFilter}=useTechNews()
  const {pageNumbers,updatedArray,handlePagination,nextPage,pages,currentPage,prePage}=usePageination(techFilter);
  if (loader) {
    return (
      <div className=" flex justify-center items-center w-full h-[20vh]">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }
  if (techNews.length === 0) {
    return (
      <div >
        Sorry 😓,There is no news available.
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-[prata] text-[40px] text-center mainHeading mt-3 mb-10">TECH HEADLINES</h1>

        <div className="flex flex-col items-center justify-center w-full h-full">
    <div className=" grid grid-cols-4 gap-5 ">
   {updatedArray.map((article,index) => (
    <div key={index}>
      <TechNewsCard  news={article} />

    </div>
    ))}
  </div>
  <div className="flex gap-3 p-4">
          {
            currentPage>1?<button className="prevBtn p-1" onClick={()=>{prePage(currentPage)}} >Previous</button>:""
          }
          
          {pageNumbers.map((element, index) => (
            <button
              key={index}
              className={` cursor-pointer pageBtn px-[12px] rounded-[50%] ${element === currentPage ? 'changeButtonTheme' : ''}`}
              id="page"
              onClick={handlePagination}
              
            >
              {element}
            </button>
          ))}
          {
           currentPage<pages? <button className="nxtBtn p-1" onClick={()=>{
            console.log("clicked")
            nextPage(currentPage,pages)}}>Next</button>:""}
        </div>
  </div>
    </div>
    
  )
}

export default TechNews