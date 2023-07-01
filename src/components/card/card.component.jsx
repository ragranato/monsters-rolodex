import { Component } from "react";
import './card.styles.css'

class Card extends Component {

    render() {
        const { name, email, id, srcImage } = this.props
        return (
          <div className="card-container" key={id}>
            <img
              alt={name}
              src={srcImage}
            />
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        );
    }
}

export default Card;