import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { CountriesProvider } from './context/CountriesContext';
import { ScoreProvider } from './context/ScoreContext';
import Home from './pages/Home';
import Flags from './pages/Flags';
import Score from './pages/Score';

import { GlobalStyle } from "./GlobalStyle"

export default function App() {
  return (
    <div>
      <ScoreProvider>
        <CountriesProvider>
          <GlobalStyle />
            <BrowserRouter>
              <Switch>
                <Route exact path='/' children={<Home/>}/>
                <Route exact path='/flags' children={<Flags/>}/>
                <Route path='/score' children={<Score/>}/>
              </Switch>
            </BrowserRouter>
          </CountriesProvider>
        </ScoreProvider>
    </div>
  );
}
