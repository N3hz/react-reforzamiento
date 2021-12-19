import React, { useState, useEffect } from "react";
import { useForms } from "../hooks/useForms";

export const FetchImage = () => {

  const { busqueda, changeImput } = useForms({
    busqueda: "",
  });

  const [historialBusqueda, setHistorialBusqueda] = useState<String[]>([]);


  useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
  }, [historialBusqueda])


  const llamarBusqueda = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    if(busqueda!==""){
        const lista : number = historialBusqueda.length > 5 ? 1 : 0; 
        const nuevoArray = historialBusqueda.slice(lista,historialBusqueda.length);
        nuevoArray.push(busqueda);
        changeImput("", "busqueda");
        setHistorialBusqueda(nuevoArray);
    }
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
        </div>
      </div>
    </>
  );
};
