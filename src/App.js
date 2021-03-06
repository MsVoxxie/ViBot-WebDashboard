import { Switch, Route } from 'react-router-dom';
import { Landing, Menu, Dashboard } from './pages';

function App() {
	return (
		<Switch>
			<Route path='/' exact={true} component={Landing} />
			<Route path='/menu' exact={true} component={Menu} />
			<Route path='/dashboard/:id' exact={true} component={Dashboard} />
		</Switch>
	);
}

export default App;
