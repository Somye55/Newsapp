import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  let apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0)
  
    return (
      <div> 
         <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general"  category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business"  category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment"  category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general"  category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health"  category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science"  category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports"  category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology"  category="technology"/></Route> 
        </Switch>
        </Router>
       {/* <Router>  
       <NavBar />
          <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}       
      /> 
        <Routes>    
       
          <Route exact path="/general" key="general" element={<News setProgress={setProgress} apiKey={apiKey} category="general"/>}/> 
          <Route exact path="/business" key="business" element={<News setProgress={setProgress} apiKey={apiKey}   category="business"/>}/>
          <Route exact path="/entertainment" key="entertainment" element={<News setProgress={setProgress} apiKey={apiKey}   category="entertainment"/>}/>
          <Route exact path="/sports"  key="sports" element={<News setProgress={setProgress} apiKey={apiKey} category="sports"/>}/>
          <Route exact path="/technology" key="technology" element={<News setProgress={setProgress} apiKey={apiKey}   category="technology"/>}/>
          <Route exact path="/science" key="science" element={<News setProgress={setProgress} apiKey={apiKey}  category="science"/>}/>
        </Routes>          
        </Router> */}
        </div>
    );
      }
    export default App
