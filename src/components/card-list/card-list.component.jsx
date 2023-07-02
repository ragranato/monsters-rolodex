
import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <Card name={name} email={email} id={id} srcImage={`https://robohash.org/${id}?set=set2&size=180x180`} />         
        );
      })}
    </div>
  )
  
}




export default CardList;
