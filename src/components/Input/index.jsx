import { FieldSetStyle } from "./style"

export const Input = ({ id, type, placeholder, label, register }) => {
    return (
        <FieldSetStyle>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} {...register} />
        </FieldSetStyle>
    )
}