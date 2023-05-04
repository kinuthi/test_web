import { Routes, Route } from 'react-router-dom';
import Index from '../components/Layout/Index';
import Login from '../pages/login/Login';
import RegisterForm from '../pages/register/Register';
import ForgotPassword from '../pages/login/Forgot_password';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/dashboard/Dashboard';

function Routers() {
	return (
		<Routes>
        
			<Route path='/' element={<Index />}>
				<Route path='login' element={<Login />} />
				<Route path='register' element={<RegisterForm />} />
				<Route path='reset' element={<ForgotPassword />} />
        
				<Route path='/' element={<Home />}>
          <Route index element={<Dashboard/>}/>
        </Route>
			</Route>
      
		</Routes>
	);
}

export default Routers;
