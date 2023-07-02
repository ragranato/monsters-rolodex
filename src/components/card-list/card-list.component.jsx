
import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <div key={id}>
            <Card
              name={name}
              email={email}              
              srcImage={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
          </div>
        );
      })}
    </div>
  )
  
}




export default CardList;
