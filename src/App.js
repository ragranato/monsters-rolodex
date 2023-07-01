import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()                 
    this.setState(() => {
      return { searchField }
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())    
      .then((users) => this.setState(() => {
        return { monsters: users }
      }
      ))
  }

  render(){
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });    

    return (
      <div className="App">
        <h1 className='app-title'>Monster's Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className='monsters-search-box' />        
        <CardList monsters={filterMonster} />
      </div>
    );
  }  
}

export default App;
