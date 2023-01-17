
import './App.css'
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = ()=> {

  const pageSize = 15;
 const apiKey = process.env.REACT_APP_NEWS_API_KEY;


  const [progress, setProgress] = useState(0)


  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height = {3}
            progress={progress}
          />
          <Switch>
            <Route exact path='/' key="general">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="general" />
            </Route>
            <Route exact path='/business' key="business">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="business" />
            </Route>
            <Route exact path='/entertainment' key="entertainment">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />
            </Route>
            <Route exact path='/health' key="health">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="health" />
            </Route>
            <Route exact path='/science' key="science">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="science" />
            </Route>
            <Route exact path='/sports' key="sports">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />
            </Route>
            <Route exact path='/technology' key="technology">
              <News setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }



export default App