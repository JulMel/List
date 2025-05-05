import "./DeleteButton.css";

const DeleteButton = (props) => {
  return (
    <button className="delete-btn" onClick={props.deleteTree}>
      Vymazat strom
    </button>
  );
};

export default DeleteButton;
