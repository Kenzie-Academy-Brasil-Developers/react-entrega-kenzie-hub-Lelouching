import styled from "styled-components";

export const HomeStyle = styled.main`

    width: 100%;

    & > div:nth-child(1){
        display: flex;
        align-items: center;
        width: 100%;
        min-height: 7.375rem;
        height: fit-content;
        border-bottom: 0.0625rem solid var(--color-grey-2); 
    }

    & > div:nth-child(1) div{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    & > div:nth-child(1) div > h2{
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
    }

    & > div:nth-child(1) div > span{
        font-size: var(--font-size-5);
        font-weight: var(--weight-3);
        color: var(--color-grey-1);
    }

    & > div:nth-child(2){
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 7.375rem;
        margin-top: 2rem;
    }

    & > div:nth-child(2) > h2{
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
    }

    & > div:nth-child(2) > span{
        font-size: var(--font-size-5);
        font-weight: var(--weight-4);
        color: var(--color-grey-0);
    }

    @media (min-width: 701px) {
        & > div:nth-child(1) div{
            align-items: center;
            flex-direction: unset;
            justify-content: space-between;
            gap: 0;
        }
    }
`