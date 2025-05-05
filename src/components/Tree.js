import "./Tree.css";
import data from "../data";
import DeleteButton from "./DeleteButton";
import DeleteAllButton from "./DeleteAllButton";
import ReloadButton from "./ReloadButton";
import { useState } from "react";

const Tree = () => {
  const [treeList, setTreeList] = useState(data);

  const deleteOneTree = (idecko) => {
    const filteredTrees = treeList.filter((oneTree) => {
      return oneTree.id !== idecko;
    });
    setTreeList(filteredTrees);
  };

  const deleteAllTrees = () => {
    setTreeList([]);
  };

  const reloadAll = () => {
    setTreeList(data);
  };

  return (
    <section>
      <div className="all-trees">
        {treeList.map((oneTree) => {
          const { id, image, title, flowering, place, text } = oneTree;

          return (
            <div className="one-tree" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{flowering}</p>
              <p>{place}</p>
              <p>{text}</p>
              <DeleteButton deleteTree={() => deleteOneTree(id)} />
            </div>
          );
        })}
      </div>
      <div className="btn">
        <DeleteAllButton deleteAll={deleteAllTrees} />
        <ReloadButton reload={reloadAll} />
      </div>
    </section>
  );
};

export default Tree;
