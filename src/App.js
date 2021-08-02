import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Flags from './pages/Flags';
import Score from './pages/Score';

import { GlobalStyle } from "./GlobalStyle"

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' children={<Flags/>}/>
          <Route path='/score' children={<Score/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
