import React from 'react'
import WorkList from '../WorkList'

function Work() {
    return (
        <section className='work mx-3'>
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