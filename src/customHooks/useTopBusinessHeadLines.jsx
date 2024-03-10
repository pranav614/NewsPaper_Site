import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../redux/country";
import { addHeadlines } from "../redux/newsHeadLines";

const useTopBusinessHeadlines = () => {
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  const handleCountry = (e) => {
    dispatch(setCountry(e.value));
  };
  const headLines =
    useSelector((store) => store?.newsheadlines?.headLinesArray) || [];
  const countryName = useSelector((store) => store?.country?.changedCountry);
  let filteredHeadLinesData = headLines.filter((news) => {
    return news.title && news.url && news.urlToImage && news.urlToImage;
  });

  const fetchHeadlines = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=d0f53ea581ee4684896fc7c3df52992d`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch(addHeadlines(data.articles));
    } catch (error) {
      console.error("Error fetching the headlines:", error);
    } finally {
      setloader(false);
    }
  };
  useEffect(() => {
    fetchHeadlines();
  }, [countryName]);
  return {loader,handleCountry,filteredHeadLinesData,countryName,headLines}
};
export default useTopBusinessHeadlines;