import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpert = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategories = (newCategory) => {
    // setCategories([...categories, "elemento3"]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, newCategory]);
  };
  return (
    <>
      <h1>GifExpert</h1>
      <AddCategory onNewCategory={(value) => onAddCategories(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
