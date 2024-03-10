import React from "react";
import TopHeadLinesCard from "../cards/TopHeadLinesCard";
import Slider from "react-slick";
import { ScaleLoader } from "react-spinners";
import useTopHeadLines from "../../customHooks/useTopHeadLines";

const TopHeadLines = () => {
    const {settings,loader,filteredHeadLinesData}=useTopHeadLines();
  if (loader) {
    return (
      <div className=" flex justify-center items-center w-full h-[20vh]">
        <ScaleLoader color="#36d7b7" />
      </div>
    );
  }

  if (filteredHeadLinesData.length === 0) {
    return (
      <div>
        <div className="flex justify-center items-center w-full h-[90vh] text-lg">
          There is no news available for the selected country. Please try again
          with another country.
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-[prata] text-center mainHeading">TOP HEADLINES</h1>
      <div className="margin ">
        <Slider {...settings}>
          {filteredHeadLinesData.map((news, index) => (
            <div key={index}>
              <TopHeadLinesCard  news={news} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopHeadLines;
