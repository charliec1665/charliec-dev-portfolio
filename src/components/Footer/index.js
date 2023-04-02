import React from 'react'
import githubLogo from '../../assets/logos/GitHub-Mark/PNG/GitHub-Mark-32px.png'
import linkedInLogo from '../../assets/logos/LinkedIn-Logos/LI-In-Bug.png'
import stackOverflowLogo from '../../assets/logos/logo-stackoverflow.png'

function Footer() {

    return (
        <footer className='d-flex py-2 fixed-bottom justify-content-around'>
            <div className='mx-5 d-flex justify-content-center align-items-center'>
                <a href='https://github.com/charliec1665'>
                    <img src={githubLogo} alt='GitHub' className='my-2 mx-1' style={{width: '30px'}}></img>
                </a>
                <a href='https://www.linkedin.com/in/charlie-carter-938085244/'>
                    <img src={linkedInLogo} alt='LinkedIn' className='my-2 mx-1' style={{ width: '34px' }}></img>
                </a>
                <a href='https://stackoverflow.com/users/19468716/charlie-carter'>
                    <img src={stackOverflowLogo} alt='Stack Overflow' className='my-2 mx-1' style={{ width: '28px' }}></img>
                </a>
            </div>
            <div className='pt-3 mx-5 d-flex justify-content-end align-items-center' id='footer-sig'>
                <p>Made with 💛 by Charlie</p>
            </div>
        </footer>
    )
}

export default Footer;