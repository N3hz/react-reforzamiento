import React,{useEffect} from 'react'
import { useUsuarios , IData} from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios ,cargarUsuarios, paginaref } = useUsuarios();

    useEffect(() => {
        cargarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const renderItem = ({ id, avatar, first_name, last_name, email }: IData) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        alt={first_name + "_" + last_name}
                        className="rounded" src={avatar}
                        style={{ width: 80, height: 80 }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }

    return (
        <div>
            <p>Peticiones Http</p>
            <b>Commando : </b> <p> npm install axios // yarn add axios</p>
            <a href="https://www.npmjs.com/package/axios">https://www.npmjs.com/package/axios</a>
            <br /><br />
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
                        //Lo mismo que
                        //usuarios.map( usuario => renderItem(usuario) )
                        usuarios.map(renderItem)
                    }
                    <tr>
                        <td colSpan={3} style={{ textAlign: 'center' }}>Página: {paginaref}</td>
                    </tr>
                </tbody>
            </table>
                
            <button className="btn btn-primary" onClick={cargarUsuarios}>
                Siguientes
            </button>

        </div>
    )
}
