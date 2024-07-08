import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AddContext = createContext();

export const AddProvider = ({ children }) => {

    const [myFavs, setMyFavs] = useState([]);

    return (
        <AddContext.Provider value={{ myFavs, setMyFavs }}>
            {children}
        </AddContext.Provider>
    );
};

AddProvider.propTypes = {
    children: PropTypes.node.isRequired
};
