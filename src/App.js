import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {
  const [ monsters, setMonsters ] = useState([])
  const [ searchField, setSearchField ] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()                 
    setSearchField(searchFieldString);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(users => setMonsters(users))
  }, [])
   
  useEffect(() => {
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }); 
    setFilteredMonsters(filterMonster);
  }, [monsters, searchField])
 

  return (
    <div className="App">
      <h1 className="app-title">Monster's Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}



export default App;
