import React, { useState } from 'react'
import WorkSample2 from '../../assets/images/official-work-sample1.png'
import WorkSample3 from '../../assets/images/official-work-sample2.png'
import WorkSample4 from '../../assets/images/work-sample4.jpg'
import WorkSample5 from '../../assets/images/work-sample5.jpg'
import GithubIcon from '../../assets/logos/GitHub-Mark/PNG/GitHub-Mark-32px.png'

const WorkList = () => {
    // array of information for each portfolio item
    const [works] = useState([
        {
            title: 'Run Buddy',
            link: 'https://charliec1665.github.io/run-buddy/',
            screenshot: WorkSample2,
            alt: 'Work Sample 2',
            id: 'sample-tag2',
            description: 'HTML / CSS',
            github: 'https://github.com/charliec1665/run-buddy'
        },
        {
            title: 'iNeedADrink',
            link: 'https://charliec1665.github.io/wind-hawks/',
            screenshot: WorkSample3,
            alt: 'Work Sample 3',
            id: 'sample-tag3',
            description: 'HTML / CSS / Materialize / Javascript / jQuery & jQuery UI / Server-side APIs',
            github: 'https://github.com/charliec1665/wind-hawks'
        },
        {
            title: 'Inkling',
            link: 'https://salty-wave-70415.herokuapp.com/',
            screenshot: WorkSample4,
            alt: 'Work Sample 4',
            id: 'sample-tag4',
            description: 'HTML / CSS / Bootstrap / React.js / NoSQL / Express.js / MongoDB',
            github: 'https://github.com/ejackson1228/space-whY'
        },
        {
            title: 'Sample 5',
            link: '#',
            screenshot: WorkSample5,
            alt: 'Work Sample 5',
            id: 'sample-tag5',
            description: 'Languages Used',
            github: 'https://github.com/charliec1665/[insert-title-here]'
        }
    ])

    return (
        <div>
            <div className="mx-3 work-sample d-flex flex-row flex-wrap">
                {/* mapping works array to render each work and its respective tag */}
                {works.map((work) => (
                    <div>
                        <a href={work.link}>
                            <img 
                                src={work.screenshot} 
                                alt={work.alt}
                                width='400px'
                                height='350px'
                                id='worklist-img'
                                key={work.title}>
                            </img>
                        </a>
                        <div className="sample-tag" id={work.id}>
                            <div className='d-flex justify-content-between'>
                                <h4>{work.title}</h4>
                                <a href={work.github}>
                                    <img id='github-ico' src={GithubIcon} style={{ width: '30px' }}></img>
                                </a>
                            </div>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkList;