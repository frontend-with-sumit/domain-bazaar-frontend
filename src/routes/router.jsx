import Home from '@/pages/Home';
import Marketplace from '@/pages/Marketplace';
import Profile from '@/pages/Profile';
import SellDomain from '@/pages/SellDomain';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/dashboard',
		element: <Home />,
	},
	{ path: '/marketplace', element: <Marketplace /> },
	{ path: '/sell-domain', element: <SellDomain /> },
	{ path: '/sell-domain/:id/edit', element: <SellDomain /> },
	{ path: '/profile', element: <Profile /> },

	// Redirect root path to /dashboard
	{ path: '/', element: <Navigate to="/dashboard" /> },
]);

export default router;
