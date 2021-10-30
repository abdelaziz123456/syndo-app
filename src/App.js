
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts'
import PostDetails from './components/PostDetails';

function App() {
  return (
    <BrowserRouter>
    
    <div className="app">
    <Route exact path='/syndo-app'>
      <Home/>
    </Route>


    <Route exact path='/'>
    <Home/>
    </Route>

    <Route exact path='/posts'>
      <Posts/>

    </Route>


    <Route exact path='/postdetails/:id' render={(props)=>{
      return <PostDetails {...props}/>
    }}/>
      




    
     
     
      
        
        
    </div>
    </BrowserRouter>
  );
}

export default App;
