import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNews,
  setQuery,
} from "../redux/redux-toolkit/hackNews/hackNewsReducer";
import { useHackNew } from "../zustand/counter";

const HackerNews = () => {
  const { hits, isloading, queryNew } = useSelector(
    (state) => state.hackNewsReducre
  );
  const dispatch = useDispatch();

  const handleQueryParam = (e) => {
    console.log(e.target.value);
    if (e.key === "enter") {
      dispatch(getNews());
    }
    dispatch(setQuery(e.target.value));
  };
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className="w-2/4 p-5 mx-auto mt-5 mb-5 bg-white rounded-lg shadow-md">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="block w-full p-5 transition-all border border-gray-200 rounded-md focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={queryNew}
          onChange={handleQueryParam}
        />
        <button
          onClick={() => dispatch(getNews())}
          className="flex-shrink-0 p-5 font-semibold text-white bg-blue-500 rounded-md"
        >
          Fetching
        </button>
      </div>
      {isloading && (
        <div className="w-8 h-8 mx-auto my-10 border-4 border-r-4 border-blue-500 rounded-full loading border-r-transparent animate-spin"></div>
      )}
      {/* {!isloading && errorMessage && (
        <p className="my-5 text-red-400">{errorMessage}</p>
      )} */}
      <div className="flex flex-wrap gap-5">
        {!isloading &&
          hits?.length > 0 &&
          hits?.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.title} className="p-3 bg-gray-100 rounded-md">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
