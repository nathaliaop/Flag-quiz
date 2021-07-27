import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Flags from './pages/Flags';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<Home/>}/>
        <Route path="/flags/:id" children={<Flags/>}/>
      </Switch>
    </BrowserRouter>
  );
}
