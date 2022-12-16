import React from 'react';
import logo from './logo.svg';
import EntryPage from './EntryPage'
import './App.css';

function App() {
  return (
    <div>
      <header className="d-flex justify-content-center py-3 mb-4 border-bottom shadow-sm">
        <h2>Welcome to synonym dictionary</h2>
      </header>
      <EntryPage />
    </div>
  );
}

export default App;
