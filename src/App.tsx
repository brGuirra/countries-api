import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { GlobalContextProvider } from './contexts/GlobalContext';
import { CountriesProvider } from './contexts/CountriesContext';
import { Routes } from './routes';

import { Header } from './components/Header';

import { Layout } from './styles/Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Layout>
          <Header />
          <CountriesProvider>
            <Routes />
          </CountriesProvider>
          <ToastContainer autoClose={3000} position='bottom-right' />
        </Layout>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
