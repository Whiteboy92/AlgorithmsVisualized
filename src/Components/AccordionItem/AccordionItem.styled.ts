import styled from 'styled-components';

export const AccordionItemTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: #1939b7;
    border-bottom: 1px solid #000000;
    padding: 5px;

    &:hover {
        background-color: #3366ff;
    }

    a {
        color: inherit;
        text-decoration: none;
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between; /* Align items to start and end */
    };
`;

export const AccordionItemContent = styled.div`
    background-color: #102693;
    border-bottom: 1px solid #000000;
`;

export const ExpandMoreIcon = styled.i.attrs({
    className: 'material-icons',
})`
    font-size: 18px;
    cursor: pointer;
`;
