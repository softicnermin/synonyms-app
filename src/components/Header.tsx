import React, {useState} from "react";

import NavigationSidebar from "./NavigationSidebar";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    return (
        <>
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
        </>
    );
}

export default Header;