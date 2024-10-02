import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

function App() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Footer />
      {/* Adicione um texto para testar HMR */}
      <h2>Este é um teste de HMR! Faça uma alteração para ver a mágica acontecer!</h2>
    </div>
  );
}

export default App;

