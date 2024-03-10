import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJournals } from "../redux/newsHeadLines";

const useJournal=()=>{
    const dispatch = useDispatch();
    const [loader, setloader] = useState(true);
    const JournalNews = useSelector((store) => store?.newsheadlines?.journal );
    const fetchCryptoNews = async () => {
      try {
        const url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4984bb58eeda4b88a0dc77177f18f538"
        const fetchConfig = await fetch(url);
        const response = await fetchConfig.json();
        console.log(response)
        dispatch(addJournals(response.articles));
      } catch (error) {
        console.log(error);
      } finally {
        setloader(false);
      }
    };
    const filteredJournalNews=JournalNews.filter(news=> news.urlToImage);
    console.log(filteredJournalNews)
    useEffect(() => {
      fetchCryptoNews();
    }, []);
    return {loader,filteredJournalNews}
}
export default useJournal;