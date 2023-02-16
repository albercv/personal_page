import React from 'react'
import { workList } from '../data/workLIst'
import { Link } from 'react-router-dom'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='pageTitle'>
        Portafolio
      </h1>
      <section className='workContainer'>
        {workList.map((work) => (
          <article key={work.id} className="workItem">
            <div className='mask'>
              <img src={'/images/' + work.image} />
            </div>
            <div className='workCategories'>
              {work.categories.map((category, index) => (
                <span key={index}>{category}</span>
              ))}
            </div>
            <div>
              <h2>
                <Link to={"/project/" + work.id}>{work.name}</Link>
              </h2>
              <ul>
                {work.technologies.map((technology, index) => (
                  <li key={index}>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
