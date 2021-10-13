import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Formularios } from '../typescript/Formularios';
import { Funciones } from '../typescript/Funciones';
import { Memo } from '../typescript/Memo';
import { ObjetosLiterales } from '../typescript/ObjetosLiterales';
import { Reducer } from '../typescript/Reducer';
import { Redux } from '../typescript/Redux';
import { RutaProtegida } from '../typescript/RutaProtegida';
import { RutaUrl } from '../typescript/RutaUrl';
import { TiposBasicos } from '../typescript/TiposBasicos';
import { Urls } from '../typescript/Urls';
import { UseStates } from '../typescript/UseStates';
import { Usuarios } from '../typescript/Usuarios';
import { PrivateRoute } from './PrivateRoute';

export const RouterLinks = () => {


  // @ts-ignore
  const { ucode } = useSelector(state => state.auth)

  return (
    <Router>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <Link to="/urls">Urls</Link>
            </li>
            <li>
              <Link to="/tiposbasicos">Tipos Basicos</Link>
            </li>
            <li>
              <Link to="/objetosLiterales">Objetos Literales</Link>
            </li>
            <li>
              <Link to="/funciones">Funciones</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <Link to="/usestate">UseState / LocalStorage</Link>
            </li>
            <li>
              <Link to="/reducer">Reducer</Link>
            </li>
            <li>
              <Link to="/usuarios">Peticiones Http</Link>
            </li>
            <li>
              <Link to="/formularios">Formularios</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>
              <Link to="/memo">Memorize</Link>
            </li>
            <li>
              <Link to={"/rutaurl/ValorParam"}>Parametro por URL</Link>
            </li>
            <li>
              <Link to={"/reduxLogin"}>Redux - Login</Link>
            </li>
          </ul>
        </div>
      </div>



      <div>
        <Switch>
          <Route exact path="/urls" component={Urls} />
          <Route exact path="/tiposbasicos" component={TiposBasicos} />
          <Route exact path="/objetosLiterales" component={ObjetosLiterales} />
          <Route exact path="/funciones" component={Funciones} />
          <Route exact path="/usestate" component={UseStates} />
          <Route exact path="/reducer" component={Reducer} />
          <Route exact path="/usuarios" component={Usuarios} />
          <Route exact path="/formularios" component={Formularios} />
          <Route exact path="/memo" component={Memo} />
          <Route exact path="/rutaurl/:id" component={RutaUrl} />
          <Route exact path="/reduxLogin" component={Redux} />
          <PrivateRoute path="/rutaProtegida"
            component={RutaProtegida}
            isAutenticated={ucode}
          />
        </Switch>
      </div>
    </Router>
  );
}