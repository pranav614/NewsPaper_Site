import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../redux/country";
import { addSportsNews } from "../redux/newsHeadLines";

const useSportNews=()=>{
    const dispatch = useDispatch();
    const countryName = useSelector((store) => store?.country?.changedCountry);
    const [loader, setloader] = useState(true);
  
    const handleCountry = (e) => {
      dispatch(setCountry(e.value));
    };
    const sportsNews =
      useSelector((store) => store?.newsheadlines?.sportsNews) || [];
  
    const filteredSportsNews = sportsNews.filter((news) => news.urlToImage);
    const fetchSportsNews = async () => {
      try {
        const fetchConfig = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${countryName}&category=sports&apiKey=4984bb58eeda4b88a0dc77177f18f538`
        );
        const response = await fetchConfig.json();
        dispatch(addSportsNews(response.articles));
      } catch (error) {
        console.log(error);
      } finally {
        setloader(false);
      }
    };
  
    useEffect(() => {
      fetchSportsNews();
    }, [countryName]);
    return {loader,handleCountry,filteredSportsNews,sportsNews}
}
export default useSportNews;