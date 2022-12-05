import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { Register } from "../pages/Register";

export const MainRoute = () => {

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        localStorage.getItem("@token") && setIsLogged(true)
    })

    return (
        <Routes>
            <Route path="/" element={<Login setIsLogged={setIsLogged}/>} />
            <Route path="/register" element={<Register/>} />
            {
                isLogged ?
                <Route path="/dashboard" element={<Home setIsLogged={setIsLogged} />} /> :
                <Route path="/dashboard" element={<Login setIsLogged={setIsLogged} />} />
            }
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}