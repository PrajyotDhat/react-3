import { useContext } from "react";
import BooksContext from "../components/context/Books";

function useBookContext(){
    return useContext(BooksContext);
  }

export default useBookContext;