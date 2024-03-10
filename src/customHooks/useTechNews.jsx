import { useEffect, useState } from "react";
import { addTechNews } from "../redux/newsHeadLines";
import { useDispatch, useSelector } from "react-redux";

const useTechNews=()=>{
    const dispatch = useDispatch();
  const [loader, setloader] = useState(true);
  const techNews = useSelector((store) => store?.newsheadlines?.technologyNews );
  const techFilter=techNews.filter(news=> news.title&&news.description)
  const fetchTechNews = async () => {
    try {
      const fetchConfig = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=15fe2f63697645e5ae1378960e0f4776");
      const response = await fetchConfig.json();
      dispatch(addTechNews(response.articles));
    } catch (error) {
      console.log(error);
    } finally {
      setloader(false);
    }
  };

  useEffect(() => {
    fetchTechNews();
  }, []);
  return {loader,techNews,techFilter}
}
export default useTechNews;