import { useState } from 'react';
import './App.scss'
import Header from './Header';
import MainContent from './MainContent';


export default function App() {

  const [currentPage, setCurrentPage] = useState('');

  return (
    <div className="app">

        <Header
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
        />

        <MainContent
          currentPage={ currentPage }
        />
    </div>
  )
}

