import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        
        --color-primary-1: #FF577F;
        --color-primary-2: #FF427F;
        --color-primary-3: #59323F;
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;
        --color-success: #3FE864;
        --color-negative: #E83F5B;

        --font-size-1: 1.5rem;
        --font-size-2: 1.375rem; 
        --font-size-3: 1.25rem;
        --font-size-4: 1.125rem;
        --font-size-5: 1rem;
        --font-size-6: 0.75rem;

        --weight-1: 700;
        --weight-2: 600;
        --weight-3: 500;
        --weight-4: 400;

        --radius-1: 0.5rem;
        --radius-2: 0.25rem;
    }

    #root{
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--color-grey-4);
        font-family: 'Inter', sans-serif;
    }

    .container{
        width: 95%;
        margin: 0 auto;
    }

    @media (min-width: 701px) {
        .container{
            width: 1200px;
            max-width: 100%;
            padding: 0 1rem;
        }
    }
`