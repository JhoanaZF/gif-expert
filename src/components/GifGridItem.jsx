export const GifGridItem = ({ id, title, url, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
