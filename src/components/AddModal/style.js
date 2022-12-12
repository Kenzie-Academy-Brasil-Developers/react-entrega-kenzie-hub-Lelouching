import styled from "styled-components"

export const ModalStyle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(18, 18, 20, 0.5);
    height: 100vh;
    width: 100%;
    padding: 0 0.5rem;

    & > div {
        width: 23.0625rem;
        max-width: 100%;
    }

    & > div > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: var(--color-grey-2);
        border-radius: var(--radius-2) var(--radius-2) 0rem 0rem;
    }

    & > div > div > h2{
        font-size: var(--font-size-5);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
    }

    & > div > div > span{
        font-size: var(--font-size-5);
        font-weight: var(--weight-2);
        color: var(--color-grey-1);
        cursor: pointer;
    }

    & > div > form{
        display: flex;
        flex-direction: column;
        padding: 1.25rem 1rem 2rem 1rem;
        gap: 1.25rem;
        background-color: var(--color-grey-3);
        border-radius: 0rem 0rem var(--radius-2) var(--radius-2);
    }

    & > div > form div{
        display: flex;
        flex-direction: column;
    }

    & > div > form div span{
        font-size: var(--font-size-6);
        font-weight: var(--weight-3);
        color: var(--color-negative);
    }

    & > div > form div:nth-child(2) fieldset{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    & > div > form div:nth-child(2) fieldset > label{
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
    }

    & > div > form div:nth-child(2) fieldset > select{
        font-size: var(--font-size-5);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
        padding: 0.75rem 1rem;
        border-radius: var(--radius-2);
        border: none;
        max-width: 100%;
        border: 0.0625rem solid transparent;

        &:focus{
            border: 0.0625rem solid var(--color-grey-0);
        }

        &:focus::placeholder{
            color: var(--color-grey-0);
        }
    }
    
`