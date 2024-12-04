import { ThemeAppProvider } from 'components/ThemeAppProvider.tsx';
import App from './App.tsx';

export const Main = () => {
  return (
    <ThemeAppProvider>
      <App />
    </ThemeAppProvider>
  );
};
