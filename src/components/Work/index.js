import React from 'react'
import WorkList from '../WorkList'

function Work() {
    return (
        <section className='mx-5' id='work'>
            <h3 id='work'>
                Work
            </h3>
            <div className='px-3 pt-3'>
                <WorkList></WorkList>
            </div>
        </section>
    )
}

export default Work;