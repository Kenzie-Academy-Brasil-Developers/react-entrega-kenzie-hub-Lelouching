import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { api } from "../services/api"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

    const [loadingRegister, setLoadingRegister] = useState(false)

    const [loadingLogin, setLoadingLogin] = useState(false)

    const [userInfo, setUserInfo] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("@token")
            if(token) {
                try {
                    const response = await api.get("/profile", {
                        headers: {
                            authorization: `Bearer ${token}`
                        }
                    })
                    setUserInfo(response.data)
    
                    navigate("/dashboard")
                } catch (error) {
                    localStorage.clear()
                    navigate("/")
                    toast.error("Ops, logue novamente!")
                }
            } else {
                navigate("/")
            }
        }

        verifyToken()
    }, [])

    const loginUser = async (data) => {
        setLoadingLogin(true)
        try{
            const logging = await api.post("/sessions", data)

            toast.success("Você logou com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light", 
            })

            localStorage.setItem("@token", logging.data.token)
            localStorage.setItem("@userId", logging.data.user.id)

            setUserInfo(logging.data.user)

            setTimeout(() => {
                navigate("/dashboard")
            }, 1500)
        } catch (err) {
            console.log(err)
            toast.error("Ops, senha ou email incorretos!", {
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
            setLoadingLogin(false)
        }
    }

    const registerUser = async (data) => {
        setLoadingRegister(true)
        try{
            const { email, password, name, bio, contact, course_module } = data

            const registering = await api.post("/users", {
                email: email,
                password: password,
                name: name,
                bio: bio,
                contact: contact,
                course_module: course_module
            })

            toast.success("Conta criada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light", 
            })

            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (err) {
            console.log(err)
            toast.error("Ops, ocorreu algum erro!", {
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
            setLoadingRegister(false)
        }
    }

    return (
        <UserContext.Provider value={{ loginUser, loadingLogin, userInfo, setUserInfo, registerUser, loadingRegister }}>
            {children}
        </UserContext.Provider>
    )
}