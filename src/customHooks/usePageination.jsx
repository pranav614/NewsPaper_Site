import { useState } from "react";

const usePageination=(array)=>{
    const pages = Math.ceil(array.length / 8);
    let pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
    const [currentPage, setPage] = useState(1);
    const itemsPerPage = 8;
    const startingPage = (currentPage - 1) * itemsPerPage;
    let endingPage = currentPage * itemsPerPage;
    const updatedArray = array.slice(startingPage, endingPage);
    const handlePagination = (e) => {
      setPage(parseInt(e.target.textContent));
    };
    const nextPage=(page,totolPages)=>{
        if(page<totolPages){
            page=page+1;
            setPage(page)
        }
    }
    const prePage=(page)=>{
        if(page){
            page=page-1;
            setPage(page)
        }
    }
    return {
        pageNumbers,updatedArray,handlePagination,pages,currentPage,nextPage,prePage
    }
}
export default usePageination;