import React from 'react'
import WorkList from '../WorkList'

// REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';

function Work() {
    return (
        <section className='mx-5' id='work'>
            <h3 id='work'>
                Work
            </h3>
            <Container fluid='md' className='px-3 pt-3'>
                <WorkList></WorkList>
            </Container>
        </section>
    )
}

export default Work;