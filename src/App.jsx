import { useReducer, useState } from 'react';
import './App.scss'
import Header from './Header';
import MainContent from './MainContent';
import CurrencyContext from './CurrencyContext';
import context from './Context';
import reducer from './reducer';
import { BrowserRouter } from 'react-router-dom';


export default function App() {

  const [currentPage, setCurrentPage] = useState('');
  const [currency, setCurrency] = useState('EUR');


  const [contextValue, setContextValue] = useReducer(reducer, {
    user: null,
    theme: 'light',
    language: 'en',
    currency: 'USD',
    authHash: null,
    shoppingCart: []
  })

  return (
    <BrowserRouter>
      <context.Provider value={ { state: contextValue, dispatch: setContextValue } }>
        <CurrencyContext.Provider value={
          {
            currency,
            setCurrency
          }
        }>

          <div className="app">

              <Header
                currentPage={ currentPage }
                setCurrentPage={ setCurrentPage }
              />

              <MainContent
                currentPage={ currentPage }
              />
          </div>

        </CurrencyContext.Provider>
      </context.Provider>
    </BrowserRouter>
  )
}

