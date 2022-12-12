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
        margin-top: 1rem;
    }

    & > div:nth-child(2) > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > div:nth-child(2) > div > h2{
        font-size: var(--font-size-5);
        font-weight: var(--weight-2);
        color: var(--color-grey-0);
    }

    & > div:nth-child(2) > ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background-color: var(--color-grey-3);
        border-radius: var(--radius-2);
    }

    & > div:nth-child(2) > ul > h4{
        font-size: var(--font-size-5);
        font-weight: var(--weight-3);
        color: var(--color-grey-0);
        text-align: center;
    }

    & > div:nth-child(2) > ul > span{
        font-size: var(--font-size-4);
        font-weight: var(--weight-3);
        color: var(--color-grey-0);
        text-align: center;
    }

    & > div:nth-child(2) > ul li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-grey-4);
        padding: 1rem;
        border-radius: var(--radius-2);
        transition: 0.6s ease;
    }

    & > div:nth-child(2) > ul li:hover{
        background-color: var(--color-grey-2);
    }

    & > div:nth-child(2) > ul li > h2{
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-0);
        word-break: break-all;
    }

    & > div:nth-child(2) > ul li > div{
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    & > div:nth-child(2) > ul li > div > span{
        font-size: var(--font-size-6);
        font-weight: var(--weight-4);
        color: var(--color-grey-1);
    }

    & > div:nth-child(2) > ul li > div > img{
        width: 0.875rem;
        height: 0.875rem;
        cursor: pointer;
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