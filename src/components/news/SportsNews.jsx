import React from "react";
import { ScaleLoader } from "react-spinners";
import Select from "react-select";
import { options2 } from "../../utils/constants";
import SportsCard from "../cards/SportsCard";
import Accodian from "../Accodian";
import useSportNews from "../../customHooks/useSportNews";
import usePageination from "../../customHooks/usePageination";

const SportsNews = () => {
  const {loader,handleCountry,filteredSportsNews,sportsNews}=useSportNews();
  const {pageNumbers,updatedArray,handlePagination,nextPage,pages,currentPage,prePage}=usePageination(filteredSportsNews);
  if (loader) {
    return (
      <div className=" flex justify-center items-center w-full h-[20vh]">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }
  if (filteredSportsNews.length === 0) {
    return (
      <div>
        <div className="custom-select-container w-full flex justify-end mt-2 ">
          <Select
            options={options2}
            defaultValue={options2[0]}
            className="w-[30%] mr-2"
            onChange={handleCountry}
            placeholder="Select a country..."
          />
        </div>
        <h1 className="cryptoHeading text-[48px] text-center mt-2">
          Sports News
        </h1>
        <div className=" flex justify-center items-center w-full">
          <div className="w-[70%] flex flex-col gap-4 ">
            {sportsNews.map((news) => (
              <Accodian nonFiltered={news} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (sportsNews.length === 0) {
    return (
      <div>
        <div className="custom-select-container w-full flex justify-end mt-2 ">
          <Select
            options={options2}
            defaultValue={options2[0]}
            className="w-[30%] mr-2"
            onChange={handleCountry}
            placeholder="Select a country..."
          />
        </div>
        <div>
          There is no news available for the selected country. Please try again
          with another country.
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="custom-select-container w-full flex justify-end mt-2 ">
        <Select
          options={options2}
          defaultValue={options2[0]}
          className="w-[30%] mr-2"
          onChange={handleCountry}
          placeholder="Select a country..."
        />
      </div>
      <h1 className="cryptoHeading text-[48px] text-center mt-2">
        Sports News
      </h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className=" grid grid-cols-4 gap-5 justify-center items-center ">
          {updatedArray.map((news,index) => (
            <div key={index} >
            <SportsCard  sports={news} />
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

export default SportsNews;
