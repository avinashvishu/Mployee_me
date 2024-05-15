import './App.css'
import HeroContainer from './component/HeroContainer'
import Nav from './component/Nav'

function App() {


  return (
    <>
     {/* nav */}
      <Nav/>
      {/* body */}
      <div className='flex'>
        {/* side nav */}
      <div className='w-[15vw] border-r  border-slate-200'></div>
      {/* main */}
      <div className='px-3 pt-3 bg-slate-50 w-[85vw] h-[93vh] '>
         <HeroContainer/> 
      </div>
      </div>
     
    
    </>
  )
}

export default App
