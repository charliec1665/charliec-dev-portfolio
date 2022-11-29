import React from 'react'

function Nav(props) {
    // initialize states as an array
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className='flex-row px-1'>
            <h1>
                <a data-testid='link' href='/'>
                    Charlie Carter
                </a>
            </h1>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a
                            data-testid='about'
                            href='#about'
                            onClick={() => setContactSelected(false)}
                        >
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a
                            data-testid='work'
                            href='#work'
                            onClick={() => setContactSelected(false)}
                        >
                            Work
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span
                            onClick={() => setContactSelected(true)}
                        >
                            Contact Me
                        </span>
                    </li>
                    <li className='mx-2'>
                        <a
                            data-testid='resume'
                            href='#resume'
                            onClick={() => setContactSelected(false)}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;