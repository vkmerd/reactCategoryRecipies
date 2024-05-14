import {useState } from 'react';
import './assets/css/style.css'
import Main from './components/main'
import Header from './components/header'

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  return (
    <div className="app">
      <Header setSelectedCuisine={setSelectedCuisine} />
      <Main selectedCuisine={selectedCuisine} />
    </div>
  );
}

export default App
