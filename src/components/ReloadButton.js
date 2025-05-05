import "./ReloadButton.css";

const ReloadButton = (props) => {
  return (
    <button className="main-reload-btn" onClick={props.reload}>
      Načíst vše
    </button>
  );
};

export default ReloadButton;
