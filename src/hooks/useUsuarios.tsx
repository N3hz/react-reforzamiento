import {useState,useRef } from 'react'
import { reqResApi } from '../api/reqRes';

export interface IReqRes {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IData[];
    support: ISupport;
}

export interface IData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface ISupport {
    url: string;
    text: string;
}


export const useUsuarios = () => {

    const [usuarios, setusuarios] = useState<IData[]>([]);
    const paginaref = useRef(1);

    const cargarUsuarios = () => {
        reqResApi.get<IReqRes>('/users', { params: {
            page: paginaref.current
        } })
        .then(resp => {
            const valorResp : IData[] = resp.data.data;
            if(valorResp.length>0){
                setusuarios(resp.data.data);
                paginaref.current++;
            }else{
                paginaref.current = 1;
                cargarUsuarios();
            }
        })
        .catch(console.log);
    }

    /* Otra forma
    const cargarUsuarios2 = async() => {
        const resp = await reqResApi.get<IReqRes>('/users')
        setusuarios(resp.data.data);
    }
    */

    return {
        usuarios,
        cargarUsuarios,
        paginaref : paginaref.current
    };
}
