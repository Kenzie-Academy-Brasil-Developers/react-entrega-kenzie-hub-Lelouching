import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";
import React from "react"

export const MainProvider = ({ children }) => {
    return (
      <UserProvider>
        <TechProvider>{children}</TechProvider>
      </UserProvider>
    );
};