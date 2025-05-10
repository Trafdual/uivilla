import './TienIch.scss';

const TienIchItem = ({ image, title, description }) => {
  return (
    <div className="facility-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default TienIchItem;