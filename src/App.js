import React, { Fragment } from 'react';
import {BrowserRouter,Route,Switch,useLocation} from 'react-router-dom'
import {Provider} from 'react-redux'
import BackSeats from './Components/BackSeats';
import FrontLeft from './Components/FrontLeft';
import FrontRight from './Components/FrontRight';
import MiddleLeft from './Components/MiddleLeft';
import MiddleRight from './Components/MiddleRight';
import Options from './Components/Options';
import { Store } from './Redux/Store';
import Welcome from './Components/UIComponent/Welcome';
import Results from './Components/UIComponent/Results';
import { AnimatePresence } from 'framer-motion';


let thechosen = new Set();



function App() {

  
  
  return(
    <Fragment>
      <Provider store={Store} >
        <BrowserRouter>
          <AnimatePresence exitBeforeEnter>
              <Switch >
                <Route exact path='/'> <Welcome thechosen={thechosen}/> </Route>
                <Route path='/book'>
                  <div className='app'>
                    <BackSeats thechosen={thechosen} />
                    <div className="middle">
                      <MiddleLeft thechosen={thechosen}/>
                      <MiddleRight thechosen={thechosen}/>
                    </div>
                    <div className="front">
                      <FrontLeft thechosen={thechosen}/>
                      <FrontRight thechosen={thechosen}/>
                    </div>
                  </div>
                <Options thechosen={thechosen}/>
                </Route>
                <Route path='/result'> <Results thechosen={thechosen}  /> </Route>
              </Switch>
          </AnimatePresence>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
  ;
    
  
}

export default App;
