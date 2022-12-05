import { RegisterStyle } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ButtonStyle } from "../../components/Button/style"
import { FormStyle } from "../../components/Form/style"
import { Input } from "../../components/Input"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const Register = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const formSchema = yup.object().shape({
        name: yup.string().required("Você precisa colocar um nome"),
        email: yup.string().required("Você precisa colocar um email").email("Você precisa colocar um email válido"),
        password: yup.string().required("Você precisa colocar uma senha").min(8, "Senha precisa ter 8 caracteres").matches(/[a-z]/, "Precisa ter uma letra minúscula").matches(/[A-Z]/, "Precisa ter uma letra maiúscula").matches(/[0-9]/, "Precisa ter um número").matches(/[!, @, #, $, %, &, *, ?, -]/, "Precisa ter um símbolo/caracter especial"),
        confirmPassword: yup.string().required("Você precisa confirmar a senha").oneOf([yup.ref("password")], "As senhas devem ser iguais"),
        bio: yup.string().required("Você precisa inserir uma bio"),
        contact: yup.string().required("Você precisa colocar algum contato")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const registerUser = async (data) => {
        setLoading(true)
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
            setLoading(false)
        }
    }


    return (
        <RegisterStyle>
            <ToastContainer/>
            <div>
                <h1>Kenzie Hub</h1>
                <Link to="/">
                    <ButtonStyle width="fit" styledBtn="grey" type="button" fontSize="6" fontWeight="2">Voltar</ButtonStyle>
                </Link>
            </div>
            <FormStyle onSubmit={handleSubmit(registerUser)} noValidate>
                <div>
                    <h2>Crie sua conta</h2>
                    <h4>Rápido e grátis, vamos nessa</h4>
                </div>
                <div>
                    <Input id="name" type="text" label="Nome" placeholder="Digite aqui seu nome" register={register("name")}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <Input id="email" type="email" label="Email" placeholder="Digite aqui seu email" register={register("email")}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <Input id="password" type="password" label="Senha" placeholder="Digite aqui sua senha" register={register("password")}/>
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div>
                    <Input id="confirmPassword" type="password" label="Confirmar Senha" placeholder="Digite novamente sua senha" register={register("confirmPassword")}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>
                <div>
                    <Input id="bio" type="text" label="Bio" placeholder="Fale sobre você" register={register("bio")}/>
                    {errors.bio && <span>{errors.bio.message}</span>}
                </div>
                <div>
                    <Input id="contact" type="text" label="Contato" placeholder="Opção de contato" register={register("contact")}/>
                    {errors.contact && <span>{errors.contact.message}</span>}
                </div>
                <div>
                    <label htmlFor="course_module">Selecionar módulo</label>
                    <select id="course_module" {...register("course_module")}>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo Módulo">Segundo Módulo</option>
                        <option value="Terceiro Módulo">Terceiro Módulo</option>
                        <option value="Quarto Módulo">Quarto Módulo</option>
                        <option value="Quinto Módulo">Quinto Módulo</option>
                        <option value="Sexto Módulo">Sexto Módulo</option>
                    </select>
                </div>
                <ButtonStyle type="submit" width="full" styledBtn="brand" fontSize="5" fontWeight="3" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </ButtonStyle>
            </FormStyle>
        </RegisterStyle>
    )
}