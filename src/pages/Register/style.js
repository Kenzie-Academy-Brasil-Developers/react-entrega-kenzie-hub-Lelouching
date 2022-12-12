import styled from "styled-components";

export const RegisterStyle = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem 0.5rem 0 0.5rem;

    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 23.125rem;
        max-width: 100%;
        
    }

    div > h1{
        font-size: var(--font-size-1);
        font-weight: var(--weight-1);
        color: var(--color-primary-1);
    }

    form > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    form > div:nth-child(1) > h2{
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
        text-align: center;
    }

    form > div:nth-child(1) > h4{
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-1);
        text-align: center;
    }

    form div span{
        font-size: var(--font-size-6);
        font-weight: var(--weight-3);
        color: var(--color-negative);
    }

    form > div:nth-child(2){
        display: flex;
        flex-direction: column;
    }

    form > div:nth-child(3){
        display: flex;
        flex-direction: column;
    }

    form > div:nth-child(4){
        display: flex;
        flex-direction: column;
    }

    form > div:nth-child(5){
        display: flex;
        flex-direction: column;
    }

    form > div:nth-child(6){
        display: flex;
        flex-direction: column;
    }

    form > div:nth-child(8){
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    form > div:nth-child(8) > label{
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
    }

    form > div:nth-child(8) > select{
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
    }
`