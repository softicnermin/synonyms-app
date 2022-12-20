import React, { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router";

import Header from "./components/Header";

function App() {
    const RetrievePage = lazy(() => import('./pages/RetrievePage'));
    const EntryPage = lazy(() => import('./pages/EntryPage'));
  return (
    <>
        <Suspense>
            <Header />
            <Routes>
                <Route path="/" element={<RetrievePage />} />
                <Route path="/new" element={<EntryPage />} />
            </Routes>
        </Suspense>
    </>
  );
}

export default App;
