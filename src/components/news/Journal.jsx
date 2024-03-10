import React from "react";
import { ScaleLoader } from "react-spinners";
import useJournal from "../../customHooks/useJournal";
import CryptoCard from "../cards/CryptoCard";
import usePageination from "../../customHooks/usePageination";

const Journal = () => {
  const { loader, filteredJournalNews } = useJournal();
  const {pageNumbers,updatedArray,handlePagination,nextPage,pages,currentPage,prePage}=usePageination(filteredJournalNews);
  if (loader) {
    return (
      <div className=" flex justify-center items-center w-full h-[20vh]">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }
  if (updatedArray.length===0 || !updatedArray) {
    return <div className=" flex justify-center items-center w-full h-[100vh] text-lg">There is no news available.</div>;
  }
  return (
    <div>
      <h1 className="cryptoHeading text-[48px] text-center mt-2">
        Journals
      </h1>
      <div className="flex items-center flex-col justify-center w-full h-full">
        <div className=" grid grid-cols-4 gap-5 ">
          {updatedArray.map((news, index) => (
            <div key={index}>
            <CryptoCard  cryptoCard={news} />

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
  );
};

export default Journal;
