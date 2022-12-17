import React from 'react';
import './App.css';
import EntryPage from './EntryPage'
import RetrievePage from "./RetrievePage";

function App() {
  return (
    <div>
      <header className="d-flex justify-content-center py-3 mb-4 border-bottom shadow-sm sticky-top bg-white">
          <h2>Welcome to synonym dictionary</h2>
      </header>
      <EntryPage />
      <div className="my-5 border-bottom shadow-sm"></div>
      <RetrievePage />
    </div>
  );
}

export default App;
