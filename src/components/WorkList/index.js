import React, { useState } from 'react'
import WorkSample1 from '../../assets/images/work-sample-pokedex.png'
import WorkSample2 from '../../assets/images/work-sample-runbuddy.png'
import WorkSample3 from '../../assets/images/work-sample-iNeedaDrink.png'
import WorkSample4 from '../../assets/images/official-work-sample4.jpeg'
// import WorkSample5 from '../../assets/images/work-sample5.jpg'
import GithubIcon from '../../assets/logos/GitHub-Mark/PNG/GitHub-Mark-32px.png'

// REACT BOOTSTRAP
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const WorkList = () => {
    // array of information for each portfolio item
    const [works] = useState([
        {
            title: 'Operation Pokèdex',
            link: 'https://operation-pokedex.herokuapp.com/',
            screenshot: WorkSample1,
            alt: 'Work Sample 1, Operation Pokèdex',
            id: 'sample-tag1',
            languages: 'HTML / CSS / Bootstrap / Javascript / MySQL / Sequelize / Node.js / Express.js / Handlebars.js',
            description: 'Blog-style Pokè Team Builder and social application.',
            github: 'https://github.com/zasen01/smooth-ops'
        },
        {
            title: 'Run Buddy',
            link: 'https://charliec1665.github.io/run-buddy/',
            screenshot: WorkSample2,
            alt: 'Work Sample 2, Run Buddy',
            id: 'sample-tag2',
            languages: 'HTML / CSS',
            description: 'An application to offer fitness training services.',
            github: 'https://github.com/charliec1665/run-buddy'
        },
        {
            title: 'Inkling',
            link: 'https://salty-wave-70415.herokuapp.com/',
            screenshot: WorkSample4,
            alt: 'Work Sample 3, Inkling',
            id: 'sample-tag4',
            languages: 'HTML / CSS / Bootstrap / React.js / NoSQL / Express.js / MongoDB',
            description: 'Twitter-style social media application.',
            github: 'https://github.com/ejackson1228/space-whY'
        },
        {
            title: 'iNeedADrink',
            link: 'https://charliec1665.github.io/i-need-a-drink/',
            screenshot: WorkSample3,
            alt: 'Work Sample 4, iNeedADrink',
            id: 'sample-tag3',
            languages: 'HTML / CSS / Materialize / Javascript / jQuery & jQuery UI / Server-side APIs',
            description: 'Cocktail recipe generator and shopping list handler',
            github: 'https://github.com/charliec1665/wind-hawks'
        }
    ])

    return (
        
            <Row className="work-sample d-flex flex-row flex-wrap justify-content-center">
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
                                    <img id='github-ico' src={GithubIcon} style={{ width: '35px' }}></img>
                                </a>
                            </div>
                            <p>{work.languages}</p>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </Row>
        
    )
}

export default WorkList;