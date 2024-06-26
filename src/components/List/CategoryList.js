import { useState } from "react";
import category from "../../util/Category";

import styles from "./CategoryList.module.css";

const CategoryList = (props) => {
  const [isActive, setIsActive] = useState("");

  const onCategoryHandler = (data) => {
    setIsActive(() => {
      return data.code;
    });

    props.onCategory(data);

    if (data.code === isActive) {
      setIsActive("");
      props.onCategory(null);
      props.resetMarker("");
      props.resetList("");
    }
  };

  const list = category.map((data, index) => (
    <li
      onClick={onCategoryHandler.bind(null, data)}
      className={`${styles.category_list} ${
        data.code === isActive ? styles.active : ""
      }`}
      key={index}
      code={data.code}
      src={data.src}
    >
      <p>{data.summary}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.category}>{list}</ul>
    </>
  );
};

export default CategoryList;
