import styled from "styled-components"

export const HeaderStyle = styled.header`
    width: 100%;
    border-bottom: 0.0625rem solid var(--color-grey-2);

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4.5rem;
    }

    nav > h1{
        font-size: var(--font-size-1);
        font-weight: var(--weight-1);
        color: var(--color-primary-1);
    }
`