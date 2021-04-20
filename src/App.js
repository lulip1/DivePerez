
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Navbar/Navbar';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Footer from './Components/Footer/Footer';
import Certificate from './Views/Certificate/Certificate';
import Inicio from './Views/Inicio/Inicio';
import Explora from './Views/Explora/Explora';
import Contacto from './Views/Contacto/Contacto';
import Conservacion from './Views/Conservacion/Conservacion';
import openwater from './Views/Certificate/openwater/openwater';
import rescue from './Views/Certificate/rescue/rescue';
import advanced from './Views/Certificate/advanced/advanced';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App () {
    return (
    <Router>
     <div className="App"> 
      <Menu />
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Certificate" component={Certificate} />
        <Route path="/Certificate/openwater" component={openwater} />
        <Route path="/Certificate/advanced" component={advanced} />
        <Route path="/Certificate/rescue" component={rescue} />
        <Route path="/Conservacion" component={Conservacion} />
        <Route path="/Contacto" component={Contacto} />
        <Route path="/Explora" component={Explora} />
      </Switch>
      <ItemDetail />
      <Footer />
     </div>
     </Router>
    );
}

export default App;