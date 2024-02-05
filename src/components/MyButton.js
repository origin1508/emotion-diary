const MyButton = ({ type = "default", children, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <>
      <button
        className={["MyButton", `MyButton_${btnType}`].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default MyButton;
