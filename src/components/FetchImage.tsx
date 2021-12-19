/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { reqResApi } from "../api/reqRes";
import { useForms } from "../hooks/useForms";
import { IData, IReqRes } from "../hooks/useUsuarios";

export const FetchImage = () => {

  const [busquedaHecha, setBusquedaHecha] = useState('');

  const [listaRealizada, setListaRealizada] = useState<IData[]>([]);

  const { busqueda, changeImput } = useForms({
    busqueda: "",
  });

  const [historialBusqueda, setHistorialBusqueda] = useState<String[]>([]);


  useEffect(() => {
        reqResApi.get<IReqRes>('/users')
        .then( resp => {
            const listaPersonas = resp.data.data;
            const listaFiltrada = listaPersonas.filter( x => 
               x.first_name.toUpperCase().includes(busquedaHecha.toUpperCase()) 
            || x.last_name.toUpperCase().includes(busquedaHecha.toUpperCase()) 
            || x.email.toUpperCase().includes(busquedaHecha.toUpperCase()) 
            );
            setListaRealizada(listaFiltrada);
            console.log(listaFiltrada)
        })
        .catch(console.log);
  }, [busquedaHecha])


  const llamarBusqueda = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setBusquedaHecha(busqueda);
    const lista : number = historialBusqueda.length > 5 ? 1 : 0; 
    const nuevoArray = historialBusqueda.slice(lista,historialBusqueda.length);
    busqueda!=="" ? nuevoArray.push(busqueda) : nuevoArray.push("TODOS");
    setHistorialBusqueda(nuevoArray);
    changeImput("", "busqueda");
  };

  return (
    <>
      <div className="row">
        <div className="col-3">
          <h2 className="col-12">Historial</h2>
          {
            historialBusqueda.map((valorHistorial, index) => {
                return (
                <div className="col" key={index}>
                   <span style={{ fontSize:10 }}>[{index}] - </span>  <span className="badge bg-primary">{ valorHistorial }</span>
                </div>
                );
            })
          }
        </div>
        <div className="col-3">
          <h2 className="col-12">Buscador</h2>
          <form onSubmit={llamarBusqueda}>
            <div className="col-12">
              <input
                style={{ maxWidth: 250 }}
                className="col-12 form-control"
                type="text"
                placeholder="Buscar"
                value={busqueda}
                onChange={({ target }) => changeImput(target.value, "busqueda")}
              ></input>
              <br />
            </div>

            <div className="col-12">
              <button
                style={{ maxWidth: 150 }}
                className="col-12 btn btn-primary btn-sm"
                type="submit"
              >
                buscar
              </button>
            </div>
          </form>
        </div>
        <div className="col-3">
            <h2 className="col-12">Resultados</h2>
            <table className="table table-dark" style={{ width: 600 }}>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaRealizada.map((Objeto, index) => {
                            return (
                                <tr key={index}>
                                    <th><img src={ Objeto.avatar } /></th>
                                    <th>{ Objeto.first_name } { Objeto.last_name }</th>
                                    <th>{ Objeto.email } </th>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    </>
  );
};
