import styled, { css } from "styled-components"

const ButtonVariantWidth = {
    fit: css`
        width: fit-content;
    `,
    full: css`
        width: 100%;
    `
}

const ButtonVariantStyle = {
    brand: css`
        background-color: var(--color-primary-1);
        &:hover{
            background-color: var(--color-primary-2);
        }
    `,
    brandDisabled: css`
        background-color: var(--color-primary-3);
    `,
    grey: css`
        background-color: var(--color-grey-3);
        &:hover{
            background-color: var(--color-grey-2);
        }
    `,
    greyDisabled: css`
        background-color: var(--color-grey-1);
        &:hover{
            background-color: var(--color-grey-2);
        }
    `
}

export const ButtonStyle = styled.button`

    font-size: var(--font-size-${({fontSize}) => fontSize});
    font-weight: var(--weight-${({fontWeight}) => fontWeight});
    color: var(--color-grey-0);
    border-radius: var(--radius-2);
    border: none;
    padding: 0.875rem 1.375rem;
    cursor: pointer;
    transition: 0.4s ease;

    ${({width}) => ButtonVariantWidth[width]}

    ${({styledBtn}) => ButtonVariantStyle[styledBtn]}

`