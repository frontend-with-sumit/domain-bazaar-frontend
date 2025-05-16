import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from './components/ui/provider';
import './index.css';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider>
			{/* TODO: replace it with the routers route */}
			<Home />
		</Provider>
	</StrictMode>
);
