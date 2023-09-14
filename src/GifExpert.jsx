import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpert = () => {
    // para almacenar informacion y esa info tiene que cambiar el HTML
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
    const onAddCategories = () => {
        // setCategories([...categories, "elemto3"]);
        setCategories((cat) => [...cat, "elemento"]);
    };
    return (
        <>
            {/* TITULO */}
            <h1>GifExpert</h1>
            {/* INPUT */}
            <AddCategory />
            {/* LISTADO */}
            <button onClick={onAddCategories}>Agregar</button>
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
