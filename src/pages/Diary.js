import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Diary.js</h1>
      <p>This is Diary Page</p>
    </div>
  );
};

export default Diary;
