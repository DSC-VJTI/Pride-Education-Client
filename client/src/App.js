
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/landingpage/Landing';
import Navbar from './components/Navbar';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
   Aos.init({duration:2000});
  },[]);
  return (
    <>
    <Navbar/>
   <Switch>
   <Route  exact path="/" component={Landing} />
   </Switch>
   </>
  );
}

export default App;
