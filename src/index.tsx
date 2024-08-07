import ReactDOM from 'react-dom/client';

import { Root } from '@/Root.tsx';

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import './constants/mockEnv.ts';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './styles/index.scss';
import './utils/i18n';


ReactDOM.createRoot(document.getElementById('root')!).render(<Root/>);
