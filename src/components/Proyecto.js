import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { workList } from '../data/workLIst';


export const Proyecto = () => {
    const params = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        console.log("id" + params.id)
        setProject(workList.find(work => {
            return work.id === params.id
        }));
        console.log(project.categories)
    }, []);

    return (
        (project.categories &&
        <div className='page project'>
            <div className='mask'>
                <img src={'/images/' + project.image} alt={project.name} />
            </div>
            <h1 className='header'>
                {project.name}
            </h1>
            <div className='projectProps'>
                <h1>Categorias:</h1>
                {project.categories.map((category, index) => (
                    <span key={index}>{category}</span>
                ))}
                <p>{project.technologies.map((technology, index) => (
                    <span key={index}>
                        {technology}
                    </span>
                ))}</p>
                <p>{project.description}</p>
                <a className='projectPropsLink' href={project.url}>{project.name}</a>
            </div>
        </div>
    ))
}
