import { Link } from "react-router-dom"
import { ButtonStyle } from "../../components/Button/style"
import { NotFoundStyle } from "./style"

export const NotFound = () => {
    return (
        <NotFoundStyle>
            <h1>404 NOT FOUND</h1>
            <Link to="/">
                <ButtonStyle fontSize="5" fontWeight="2" type="button" styledBtn="brand" width="fit">Voltar para a página inicial</ButtonStyle>
            </Link>
        </NotFoundStyle>
    )
}