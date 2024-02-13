import { useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    setCurDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth() + 1, prev.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      (prev) =>
        new Date(prev.getFullYear(), prev.getMonth() - 1, prev.getDate())
    );
  };

  console.log(curDate);

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      ></MyHeader>
    </div>
  );
};

export default Home;
