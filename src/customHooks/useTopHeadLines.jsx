import { useEffect, useState } from "react";
import useCorousal from "./useCorousal";
import { useDispatch, useSelector } from "react-redux";
import { addTopHeadLines } from "../redux/newsHeadLines";

const useTopHeadLines=()=>{
    const { settings } = useCorousal();
    const [loader, setloader] = useState(true);
    const dispatch = useDispatch();
    const headLines =
      useSelector((store) => store?.newsheadlines?.topHeadlines) || [];
    const filteredHeadLinesData = headLines.filter((news) => {
      return news.title && news.url && news.urlToImage && news.urlToImage;
    });
  
    const fetchHeadlines = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=15fe2f63697645e5ae1378960e0f4776`;
        const response = await fetch(url);
        const data = await response.json();
        dispatch(addTopHeadLines(data.articles));
      } catch (error) {
        console.error("Error fetching the headlines:", error);
      } finally {
        setloader(false);
      }
    };
    useEffect(() => {
      fetchHeadlines();
    }, []);

    return {
        settings,loader,filteredHeadLinesData
    }
}
export default useTopHeadLines;