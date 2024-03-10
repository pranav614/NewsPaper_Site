import React from "react";
import NewsCard from "./cards/NewsCarrd";
import { ScaleLoader } from "react-spinners";
import Select from "react-select";
import { options } from "../utils/constants";
import useTopBusinessHeadlines from "../customHooks/useTopBusinessHeadLines";
import usePageination from "../customHooks/usePageination";

const Body = () => {
  let { loader, handleCountry, filteredHeadLinesData, countryName } =
    useTopBusinessHeadlines();
   const {pageNumbers,updatedArray,handlePagination,nextPage,pages,currentPage,prePage}=usePageination(filteredHeadLinesData);
   
  if (loader) {
    return (
      <div className=" flex justify-center items-center w-full h-[20vh]">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }

  if (filteredHeadLinesData.length === 0 && countryName) {
    return (
      <div>
        <div className="custom-select-container w-full flex justify-end mt-2 ">
          <Select
            options={options}
            defaultValue={options[0]}
            className="w-[30%] mr-2"
            onChange={handleCountry}
            placeholder="Select a country..."
          />
        </div>
        <div className="flex justify-center items-center w-full h-[90vh] text-lg">
          There is no news available for the selected country. Please try again
          with another country.
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="custom-select-container w-full flex justify-end mt-2 mr-5">
        <Select
          options={options}
          defaultValue={options[0]}
          className="w-[30%] mr-2"
          onChange={handleCountry}
          placeholder="Select a country..."
        />
      </div>
      <h1 className="text-[prata] text-center mainHeading">
        BUSINESS HEADLINES
      </h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className=" grid grid-cols-4 gap-5 ">
          {updatedArray.map((article, index) => (
            <NewsCard key={index} news={article} />
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

export default Body;
