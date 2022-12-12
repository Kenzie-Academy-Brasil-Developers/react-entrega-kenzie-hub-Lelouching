import { useContext } from "react"
import { TechContext } from "../../context/TechContext"
import { Input } from "../Input"
import { ModalStyle } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ButtonStyle } from "../Button/style"

export const AddModal = () => {

    const { setModal, loadingRegisterTech, registerTech } = useContext(TechContext)

    const formSchema = yup.object().shape({
        title: yup.string().required("Você precisa colocar um título"),
        status: yup.string().required("Você precisa selecionar uma tecnologia"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })
    
    return (
        <ModalStyle>
            <div>
                <div>
                    <h2>Cadastrar Tecnologia</h2>
                    <span onClick={() => setModal(false)}>X</span>
                </div> 
                <form onSubmit={handleSubmit(registerTech)}>
                    <div>
                        <Input register={register("title")} id="title" type="text" label="Nome" placeholder="Insira a tecnologia" />
                        {errors.title && <span>{errors.title.message}</span>}
                    </div>
                    <div>
                        <fieldset>
                            <label htmlFor="status">Selecionar status</label>
                            <select {...register("status")} id="status">
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </fieldset>
                        {errors.status && <span>{errors.status.message}</span>}
                    </div>
                    <ButtonStyle disabled={loadingRegisterTech} type="submit" width="full" styledBtn="brand" fontSize="5" fontWeigt="3">
                        {loadingRegisterTech ? "Cadastrando..." : "Cadastrar tecnologia"}
                    </ButtonStyle>
                </form>
            </div>
        </ModalStyle>
    )
}