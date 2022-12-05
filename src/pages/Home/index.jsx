import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { api } from "../../services/api"
import { HomeStyle } from "./style"

export const Home = ({ setIsLogged }) => {

    const [userInfo, setUserInfo] = useState("")

    useEffect(() => {

        const token = localStorage.getItem("@token")

        const getInfoUser = async () => {
            const response = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUserInfo({
                name: response.data.name,
                course_module: response.data.course_module
            })
        }

        getInfoUser()
    }, [])

    return (
        <div>
            <Header setIsLogged={setIsLogged} />
            <HomeStyle>
                <div>
                    <div className="container">
                        <h2>Olá, {userInfo.name}</h2>
                        <span>{userInfo.course_module}</span>
                    </div>
                </div>
                <div className="container">
                    <h2>Que pena! Estamos em desenvolvimento :(</h2>
                    <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                </div>
            </HomeStyle>
        </div>
    )
}