import React from 'react'

function Resume() {
    return(
        <div className='mx-4 mb-5 px-2' id='resume'>
            <div className='mx-5 pb-2 px-2' id='summary'>
                <h3>Professional Summary</h3>
                <ul className='mx-5 my-3 px-5'>
                    <li>
                        Proficient in translating designs and wireframes into quality code, designing and implementing <span>responsive user
                        interface</span> components.
                    </li>
                    <li>
                        Adept at <span>updating and modularising</span> older codebases to modern development standards.
                    </li>
                    <li>
                        Experience determining the structure and <span>design of web pages</span> based on user requirements and balancing
                        the functional with the <span>aesthetic.</span>
                    </li>
                    <li>
                        Crafts features to enhance the <span>user experience</span> while ensuring that the web design is 
                        <span>optimized for smartphones</span> and other screen sizes.
                    </li>
                    <li>
                        Experience working in a <span>team</span> setting while coordinating team roles and responsibilities.
                    </li>
                    <li>
                        Knowledge in developing single-page applications <span>(SPAs).</span>
                    </li>
                    <li>
                        Proficient in customizing web applications with <span>CSS frameworks</span> like <span>Bootstrap</span> and 
                        <span>Materialize.</span>
                    </li>
                    <li>
                        Experience in analyzing the <span>Document Object Model (DOM) Layout, DOM Functions, and JavaScript Functions</span>
                        using <span>Chrome Dev Tools.</span>
                    </li>
                    <li>
                        Integrating <span>front-end development</span> with <span>back-end systems.</span>
                    </li>
                    <li>
                        Experience in <span>MERN</span> stack development: <span>MongoDB, Express, React, and Node.</span>
                    </li>
                </ul>
                <p>View Charlie's complete resume 
                    <span>
                        <a href='https://docs.google.com/document/d/1gFBY4nNaQaxqd5D1qC-17XH8VcFskEVl/edit?usp=sharing&ouid=111402451328955360605&rtpof=true&sd=true' 
                        id='resume-link'>here.</a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Resume;