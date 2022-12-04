import React from 'react'
import OperationPokedex from '../../assets/images/official-work-sample3.png'
import WorkList from '../WorkList'

function Work() {
    return (
        <section className='work mx-3'>
            <h3 id='work'>
                Work
            </h3>
            <div>
                <div className='work-sample1'>
                    <a href='https://github.com/zasen01/smooth-ops' className='d-flex justify-content-center'>
                        <img src={OperationPokedex} alt='Work sample 1, Operation Pokedex team builder'></img>
                    </a>
                    <div className='sample-tag'>
                        <h4>Operation Pokedex</h4>
                        <p>HTML / CSS / Bootstrap / Javascript / MySQL / Sequelize / Node.js / Express.js / Handlebars.js</p>
                    </div>
                </div>
                <WorkList></WorkList>
            </div>
        </section>
    )
}

export default Work;