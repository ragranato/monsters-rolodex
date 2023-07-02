
import './card.styles.css'

const Card = (props) => {
  const { name, email, id, srcImage } = props;
  return (
    <div className="card-container" key={id}>
      <img alt={name} src={srcImage} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}



export default Card;