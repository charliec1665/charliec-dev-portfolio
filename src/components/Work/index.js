import React from 'react'
import WorkList from '../WorkList'

// REACT BOOTSTRAP
import Container from 'react-bootstrap/Container';

function Work() {
    return (
        <section className='mx-4 justify-content-center' id='work'>
            <h3 id='work'>
                Work
            </h3>
            <Container fluid='sm' className='px-3 pt-3 justify-content-center'>
                <WorkList></WorkList>
            </Container>
        </section>
    )
}

export default Work;