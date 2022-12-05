import styled from "styled-components"

export const FieldSetStyle = styled.fieldset`

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    label{
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
    }

    input{
        font-size: var(--font-size-5);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        padding: 0.75rem 1rem;
        border-radius: var(--radius-2);
        border: none;
        max-width: 100%;
        border: 0.0625rem solid transparent;

        &::placeholder{
            color: var(--color-grey-1);
        }

        &:focus{
            border: 0.0625rem solid var(--color-grey-0);
        }

        &:focus::placeholder{
            color: var(--color-grey-0);
        }
    }

`