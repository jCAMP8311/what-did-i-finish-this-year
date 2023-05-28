import './App.css';
import { GameAccordian } from './Components/Accordian/GamesAccordian/index.tsx';
import { BookAccordian } from './Components/Accordian/BooksAccordion/index.tsx'
import React from 'react';


function App() {
  return (
    <div className="app">
      <GameAccordian />
      <BookAccordian />
    </div>
  );
}

export default App;
