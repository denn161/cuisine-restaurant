
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from './container'
import {Navbar} from './components'

function App() {
  return (
    <div className="App">
    <div className='header__inner gradient-bg'>
      <Navbar/>
      <Header/>
      </div>  
      <AboutUs />
       <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
   <Footer />  
    </div>
  );
}

export default App;
