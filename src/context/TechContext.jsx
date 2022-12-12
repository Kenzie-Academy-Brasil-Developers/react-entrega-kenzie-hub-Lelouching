import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../services/api"
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [modal, setModal] = useState(false)

    const [loadingDeleteTech, setLoadingDeleteTech] = useState(false)

    const [loadingRegisterTech, setLoadingRegisterTech] = useState(false)

    const { userInfo, setUserInfo } = useContext(UserContext)

    const registerTech = async (data) => {
        setLoadingRegisterTech(true)
        try {
            const token = localStorage.getItem("@token")
            
            const registeringTech = await api.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const updateTechs = await api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUserInfo({...userInfo, techs: updateTechs.data.techs})

            toast.success("Tecnologia cadastrada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } catch (err) {
            console.log(err)
            toast.error("Ops, você já cadastrou essa tecnologia!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } finally {
            setLoadingRegisterTech(false)
        }
    }

    const deleteTech = async (id) => {
        setLoadingDeleteTech(true)
        try {
            const token = localStorage.getItem("@token")

            const deleting = await api.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const filter = userInfo.techs.filter(tech => tech.id !== id)

            setUserInfo({...userInfo, techs: filter})

            toast.success("Tecnologia deletada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } catch (err) {
            console.log(err)
            toast.error("Não foi possível deletar a tecnologia, tente novamente", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } finally {
            setLoadingDeleteTech(false)
        }
    }

    return (
        <TechContext.Provider value={{ setModal, modal, registerTech, deleteTech, loadingDeleteTech, loadingRegisterTech }}>
            {children}
        </TechContext.Provider>
    )
}