import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContect } from "../App";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotionId: 1,
    emotionImg: "/assets/emotion1.png",
    emotionDescript: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionImg: "/assets/emotion2.png",
    emotionDescript: "좋음",
  },
  {
    emotionId: 3,
    emotionImg: "/assets/emotion3.png",
    emotionDescript: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionImg: "/assets/emotion4.png",
    emotionDescript: "나쁨",
  },
  {
    emotionId: 5,
    emotionImg: "/assets/emotion5.png",
    emotionDescript: "끔찍함",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContect);

  const handleEmoteClick = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    onCreate(date, content, emotion);
    navigate("/", { replace: true });
  };

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText="새 일기쓰기"
        leftChild={<MyButton text="< 뒤로가기" onClick={() => navigate(-1)} />}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.id}
                {...it}
                onClick={handleEmoteClick}
                isSelected={it.emotionId === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="오늘은 어땠나요?"
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text="취소하기" onClick={() => navigate(-1)} />
            <MyButton text="작성완료" type="positive" onClick={handleSubmit} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
