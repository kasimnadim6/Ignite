import Home from './pages/Home';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/', '/games/:id']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
