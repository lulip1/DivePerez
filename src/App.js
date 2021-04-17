import React from 'react'; 
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Navbar/Navbar'
import ItemDetail from './Components/ItemDetail/ItemDetail'

//Componentes

class App extends React.Component {
 
  render () {
    return <div> 
      <Menu />
      <Header />
      <ItemDetail />
      
    
     </div>;
  }
}

export default App;