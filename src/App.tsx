import React, {lazy, Suspense, useState} from 'react';
import NavigationSidebar from "./components/NavigationSidebar";
import { Route, Routes } from "react-router";

function App() {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const RetrievePage = lazy(() => import('./RetrievePage'));
    const EntryPage = lazy(() => import('./EntryPage'));
  return (
    <div>
        <NavigationSidebar
            visible={menuVisible}
            setMenuVisible={setMenuVisible}
        />
        <header className="d-flex align-items-center py-3 mb-4 border-bottom shadow-sm sticky-top bg-white">
            <div
                className="border-end d-flex justify-content-center px-24 menu--icon"
                onClick={() => setMenuVisible(true)}
            >
                <i className="material-icons pointer-cursor">menu</i>
            </div>
            <h2 className="ms-16">Synonym dictionary</h2>
        </header>
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
