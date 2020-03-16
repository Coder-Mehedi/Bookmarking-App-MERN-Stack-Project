import React, { useEffect } from 'react';
import './App.css';
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from './components/Navbar';
import CategoryList from './components/category/CategoryList'
import CategoryContextProvider from './contexts/category/CategoryState';
import AddCategory from './components/category/AddCategory'
import BookmarkContextProvider from './contexts/bookmark/BookmarkState';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);


  return (
    <div className="">
      <Navbar />
      <CategoryContextProvider>
        <BookmarkContextProvider>
          <AddCategory />
          <CategoryList />
        </BookmarkContextProvider>
      </CategoryContextProvider>
    </div>
  );
}

export default App;
