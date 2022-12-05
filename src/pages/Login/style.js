import styled from "styled-components";

export const LoginStyle = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 10rem;

    h1{
        font-size: var(--font-size-1);
        font-weight: var(--weight-1);
        color: var(--color-primary-1);
    }

    form > span{
        text-align: center;
        font-size: var(--font-size-6);
        font-weight: var(--weight-2);
        color: var(--color-grey-1);
    }

    form > h2{
        text-align: center;
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
    }

    form div span{
        font-size: var(--font-size-6);
        font-weight: var(--weight-3);
        color: var(--color-negative);
    }


`