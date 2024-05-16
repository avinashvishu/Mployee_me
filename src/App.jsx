import './App.css'
import HeroContainer from './component/HeroContainer'
import Nav from './component/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './component/SideNav';

function App() {


  return (
    <>
     {/* nav */}
      <Nav/>

      {/* body */}
      <div className='flex'>
      {/* side nav */}
      <SideNav/> 
      {/* main */}
      <div className='px-3 pt-3 bg-slate-50 w-[85vw] h-[93vh] '>
         <HeroContainer/> 
      </div>
      </div>
     
    
    </>
  )
}

export default App
