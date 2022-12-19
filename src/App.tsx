import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router";

import Header from "./components/Header";

function App() {
    const RetrievePage = lazy(() => import('./RetrievePage'));
    const EntryPage = lazy(() => import('./EntryPage'));
  return (
    <div>
        <Header />
        <Suspense>
            <Routes>
                <Route path="/" element={<RetrievePage />} />
                <Route path="/new" element={<EntryPage />} />
            </Routes>
        </Suspense>
    </div>
  );
}

export default App;
