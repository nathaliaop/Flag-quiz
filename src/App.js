import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Flags from './pages/Flags';
import Score from './pages/Score';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home/>}/>
        <Route exact path="/flags/score" children={<Score/>}/>
        <Route path="/flags/:id" children={<Flags/>}/>
      </Switch>
    </BrowserRouter>
  );
}
