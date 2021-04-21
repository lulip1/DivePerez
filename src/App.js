
import './App.css';
import Menu from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Certificate from './Views/Certificate/Certificate';
import Explora from './Views/Explora/Explora';
import Contacto from './Views/Contacto/Contacto';
import Conservacion from './Views/Conservacion/Conservacion';
import Inicio from './Views/Inicio/Inicio';
import openwater from './Views/Certificate/openwater/openwater';
import rescue from './Views/Certificate/rescue/rescue';
import advanced from './Views/Certificate/advanced/advanced';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
    return (
    <Router>
     <div className="App"> 
      <Menu />
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
      <Footer />
     </div>
     </Router>
    );
}

export default App;