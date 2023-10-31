import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)
  
  return (
    <>
      <h3>{category}</h3>
      {isLoading &&(
       <h3>Cargando...</h3>
      )}
      <div>
        {images.map((img) => (
          <GifGridItem key={img.id} title={img.title} url={img.url} image={img.image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
