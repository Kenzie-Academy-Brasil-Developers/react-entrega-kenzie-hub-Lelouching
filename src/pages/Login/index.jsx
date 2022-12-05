import { LoginStyle } from "./style"
import { FormStyle } from "../../components/Form/style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../../components/Input"
import { ButtonStyle } from "../../components/Button/style"
import { Link, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react"
import { api } from "../../services/api"

export const Login = ({ setIsLogged }) => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        email: yup.string().required("Você precisa colocar um email").email("Seu email está incompleto"),
        password: yup.string().required("Você precisa colocar uma senha")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const loginUser = async (data) => {
        setLoading(true)
        try{
            console.log(data)
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

            setIsLogged(true)

            setTimeout(() => {
                navigate("/dashboard")
            }, 1500)
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
            setLoading(false)
        }
    }

    return (
        <LoginStyle>
            <ToastContainer/>
            <h1>Kenzie Hub</h1>
            <FormStyle onSubmit={handleSubmit(loginUser)} noValidate>
                <h2>Login</h2>
                <div>
                    <Input id="email" placeholder="Insira seu email" label="Email" type="email" register={register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <Input id="password" placeholder="Insira sua senha" label="Senha" type="password" register={register("password")} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <ButtonStyle width="full" styledBtn="brand" fontSize="5" fontWeight="3" type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </ButtonStyle>
                <span>Ainda não possui conta?</span>
                <Link to="/register">
                    <ButtonStyle width="full" styledBtn="greyDisabled" fontSize="5" fontWeight="3" type="button">Cadastrar</ButtonStyle>
                </Link>
            </FormStyle>
        </LoginStyle>
    )
}