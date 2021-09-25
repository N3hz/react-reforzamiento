import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const UseStates = () => {

    const {  numero, sumando  } = useCounter(20);

    return (
        <div>
            <p>UseState</p>
            <table className="table table-dark" style={{ width: 300 }}>
                <thead>
                    <tr>
                        <th><b>Contador: </b></th>
                        <th>{numero}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => sumando(-1)}
                            >
                                -1
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => sumando(1)}
                            >
                                +1
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
