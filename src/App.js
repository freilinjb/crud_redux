import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>{/*EL provider debe rodear todo para que todas las funciones que se agregen para que esten disponible*/}
      <Header/>
    {/* Todo lo que esta fuera de el Switch se utilizara en toda la pagina */}
      <div className="container mt-5">
        {/* Todo lo que esta en  */}
        <Switch>
          {/* Todo lo que este en siwth dentro de route es lo que va a cargar en cada pagina */}
          <Route exact path='/' component={Productos}/>
          <Route exact path='/producto/nuevo' component={NuevoProducto}/>
          {/* :id Comodin */}
          <Route exact path='/producto/editar/:id' component={EditarProducto}/>
        </Switch>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;