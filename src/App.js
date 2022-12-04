import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './components/About'
import Work from './components/Work'
import ContactForm from './components/Contact'
import Resume from './components/Resume'

function App() {
  // Hook to conditionally render selected page
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    // JSX
    <div>
      <Nav contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {/* if no contactSelected then render the About section and Work Sample components */}
        {!contactSelected ? (
          <>
            <About></About>
            <Work></Work>
            <Resume></Resume>
          </>
        ) : (
          // else render contact form
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
