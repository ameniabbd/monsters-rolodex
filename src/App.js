
import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{

  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField }= this.state;
    const filtredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Rolodex Monsters</h1>
   <SearchBox 
       placeholder='Search monsters'
      handleChange={e=>
        this.setState({searchField:e.target.value})}/>
        <CardList monsters={filtredMonsters}>   
        </CardList>
       
      </div>
    );
    console.log(this.state);
  }
  
}

export default App;
