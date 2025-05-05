import "./DeleteAllButton.css";

const DeleteAllButton = (props) => {
  return (
    <button className="main-delete-btn" onClick={props.deleteAll}>
      Smazat vše
    </button>
  );
};

export default DeleteAllButton;
