import styled from 'styled-components';

export const SidebarContainer = styled.div`
    height: 100%;
    background-color: #102693;
`;

export const AccordionItemText = styled.div<{ isActive: boolean }>`
    margin: 5px;
    background-color: ${(props) => (props.isActive ? '#254edb' : 'unset')};
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid #1F1F1F; /* Correct border declaration */

    &:hover {
        background: ${(props) => (props.isActive ? '#6690FF' : '#254edb')};
    }

    a {
        display: block;
        width: 96%;
        height: 100%;
        padding: 5px;
        color: inherit;
        text-decoration: none;
        border: none;
        border-radius: inherit;
    }
`;
