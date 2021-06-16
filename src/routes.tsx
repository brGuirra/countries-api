import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import { DetailedCountrie } from './pages/DetailedCountrie';
import { NotFound } from './components/NotFound';

export function Routes() {
  return (
    <Switch>
      <Redirect exact from='/' to='/all' />
      <Route path='/all' component={Home}></Route>
      <Route path='/africa' component={Home} />
      <Route path='/americas' component={Home} />
      <Route path='/asia' component={Home} />
      <Route path='/europe' component={Home} />
      <Route path='/oceania' component={Home} />
      <Route path='/countrie/:alpha' component={DetailedCountrie} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}
