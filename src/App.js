
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MovieDescription from "./components/MovieDescription/MovieDescription";
import Footer from "./components/Footer/Footer";
import Movies from "./components/MovieApp/Movies";
import Error from "./components/Error/Error";
import'./index.css'


function App () {

return (
    <div>
<Navbar className='navabar'/>
<Switch>
      <Route exact path='/' component={Movies}  />
       <Route path ='/movieDescription' component={MovieDescription}/>
       <Route path='/*' component={Error}/>
 </Switch>
     <Footer/>
 </div>
)}
export default App