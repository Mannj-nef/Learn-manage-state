import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incrment,
  incrmentByVlaue,
} from "../redux-toolkit/counter/counterSlide";
import { useStore, useHackNew } from "../zustand/counter";
// import { DecreaseNumber, increaseNumber } from "../redux/counter/action";

const Counter = () => {
  const count = 0;
  // Redux {
  // const { count, title } = useSelector((state) => state.counterSlide);
  // const { count } = useSelector((state) => state.counterReducer);
  // const dispatch = useDispatch();

  // }

  //-----------------------------------------------------------------------------------------

  // zustand
  // const { counter: count, increment } = store((state) => state);
  // console.log(count);
  const { fetch, hits, isLoading, reset } = useHackNew();

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search");
  }, []);

  // console.log({ hits, isLoading });

  return (
    <div className="w-[400px] mx-auto p-3 rounded-lg border-blue-400 border">
      <h2 className="text-center mb-5">Number is {count}</h2>
      <div className="flex gap-5">
        {/* redux toolkit */}
        <Button onClick={() => dispatch(incrment())}>INCREASE</Button>
        <Button onClick={() => dispatch(decrement())}>DECREASE</Button>
        <Button onClick={() => dispatch(incrmentByVlaue(10))}>
          INCREASEBYVALUE: 10
        </Button>
        {/* <Button onClick={increment}>INCREASEBYVALUE ZUSTAN</Button>
        <Button onClick={increment}>DECREASE ZUSTAN</Button> */}
        <Button onClick={reset}>reset</Button>
        {/* redux core */}
        {/* <Button onClick={() => dispatch(increaseNumber())}>INCREASE</Button>
        <Button onClick={() => dispatch(DecreaseNumber())}>DECREASE</Button> */}
      </div>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  return (
    <button
      className="flex-1 bg-blue-600 text-white rounded-lg p-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Counter;
