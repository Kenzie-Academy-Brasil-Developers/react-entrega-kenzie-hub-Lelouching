import { useNavigate } from "react-router-dom"
import { ButtonStyle } from "../Button/style"
import { HeaderStyle } from "./style"

export const Header = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <HeaderStyle>
            <nav className="container">
                <h1>Kenzie Hub</h1>
                <ButtonStyle onClick={logout} width="fit" styledBtn="grey" type="button" fontSize="5" fontWeight="2">Sair</ButtonStyle>
            </nav>
        </HeaderStyle>
    )
}