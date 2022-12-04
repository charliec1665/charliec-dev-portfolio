import React from 'react'

function Nav(props) {
    // initialize states as an array
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <>
        <header className='d-flex px-4 py-2 justify-content-between'>
            <h1 className='my-2 mx-2'>
                <a data-testid='link' href='/'>
                    Charlie Carter
                </a>
            </h1>
            <nav>
                <ul className='d-flex justify-content-end'>
                    <li className='mx-2 my-3'>
                        <a
                            data-testid='about'
                            href='#about'
                            onClick={() => setContactSelected(false) && setResumeSelected(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li className='mx-2 my-3'>
                        <a
                            data-testid='work'
                            href='#work'
                            onClick={() => setContactSelected(false) && setResumeSelected(false)}
                        >
                            Work
                        </a>
                    </li>
                    <li className={`mx-2 my-3 ${contactSelected && 'navActive'}`}>
                        <a
                            href='#contact'
                            onClick={() => setContactSelected(true) && setResumeSelected(false)}
                        >
                            Contact Me
                        </a>
                    </li>
                    <li className={`mx-2 my-3 ${resumeSelected && 'navActive'}`}>
                        <a
                            data-testid='resume'
                            href='#resume'
                            onClick={() => setContactSelected(false) && setResumeSelected(true)}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <section className='hero'>
            <h2>Portfolio</h2>
        </section>
        </>
    )
}

export default Nav;