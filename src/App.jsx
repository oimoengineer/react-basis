import { useEffect, useState } from "react";
import { ColorfuleMessage } from "./components/ColorfulMessage";

export const App = () => {
  // reactのフックは一番上の階層でしか呼べない
  const [num, setNum] = useState(0);
  const [isShowLeaf, setIsShowLeaf] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowLeaf(!isShowLeaf);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowLeaf || setIsShowLeaf(true);
      } else {
        isShowLeaf && setIsShowLeaf(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfuleMessage color="blue">What's UP?</ColorfuleMessage>
      <ColorfuleMessage color="green">So Good</ColorfuleMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowLeaf && <p>www</p>}
    </>
  );
};
