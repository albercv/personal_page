import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { workList } from '../data/workLIst';


export const Proyecto = () => {
    const params = useParams();

    useEffect = (() => {
        let workItem = workList.filter(work => work.id === params.id)
        console.log(workItem)
    }, []);

    return (
        <div className='page'>
            <h1>Proyecto</h1>
            <h2>params: {params.id}</h2>
        </div>
    )
}
