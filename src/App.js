import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Flags from './pages/Flags';
import Score from './pages/Score';

import { GlobalStyle } from "./GlobalStyle"

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' children={<Home/>}/>
          <Route path='/score' children={<Score/>}/>
          <Route path='/flags' children={<Flags/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
