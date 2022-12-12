import { useContext } from "react"
import { ToastContainer } from "react-toastify"
import { ButtonStyle } from "../../components/Button/style"
import { Header } from "../../components/Header"
import { AddModal } from "../../components/AddModal"
import { TechContext } from "../../context/TechContext"
import { UserContext } from "../../context/UserContext"
import { HomeStyle } from "./style"
import trash from "../../assets/img/trash.svg"

export const Home = () => {

    const { userInfo } = useContext(UserContext)

    const { modal, setModal, deleteTech, loadingDeleteTech } = useContext(TechContext)

    console.log(userInfo)

    return (
        <div>
            {
                modal && <AddModal/>
            }
            <ToastContainer/>
            <Header/>
            <HomeStyle>
                <div>
                    <div className="container">
                        <h2>Olá, {userInfo.name}</h2>
                        <span>{userInfo.course_module}</span>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <h2>Tecnologias</h2>
                        <ButtonStyle onClick={() => setModal(true)} fontSize="4" fontWeight="1" width="fit" styledBtn="grey">+</ButtonStyle>
                    </div>
                    <ul>
                        {
                            loadingDeleteTech && <h4>Deletando...</h4>
                        }
                        {
                            userInfo.techs.length == 0 && <span>Sem tecnologias</span>
                        }
                        {
                            userInfo && userInfo.techs.map((tech, index) => (
                                <li key={index}>
                                    <h2>{tech.title}</h2>
                                    <div>
                                        <span>{tech.status}</span>
                                        <img onClick={() => deleteTech(tech.id)} src={trash} alt="Excluir tecnologia" />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </HomeStyle>
        </div>
    )
}