import { LoginStyle } from "./style"
import { FormStyle } from "../../components/Form/style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../../components/Input"
import { ButtonStyle } from "../../components/Button/style"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from "react"
import { api } from "../../services/api"
import { UserContext } from "../../context/UserContext"

export const Login = () => {

    const { loginUser, loadingLogin } = useContext(UserContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("Você precisa colocar um email").email("Seu email está incompleto"),
        password: yup.string().required("Você precisa colocar uma senha")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

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
                <ButtonStyle width="full" styledBtn="brand" fontSize="5" fontWeight="3" type="submit" disabled={loadingLogin}>
                    {loadingLogin ? "Entrando..." : "Entrar"}
                </ButtonStyle>
                <span>Ainda não possui conta?</span>
                <Link to="/register">
                    <ButtonStyle width="full" styledBtn="greyDisabled" fontSize="5" fontWeight="3" type="button">Cadastrar</ButtonStyle>
                </Link>
            </FormStyle>
        </LoginStyle>
    )
}