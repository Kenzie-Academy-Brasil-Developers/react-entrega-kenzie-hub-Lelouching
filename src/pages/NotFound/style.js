import styled from "styled-components"

export const NotFoundStyle = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100vh;

    h1{
        font-size: var(--font-size-1);
        font-weight: var(--weight-2);
        color: var(--color-grey-0);
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`