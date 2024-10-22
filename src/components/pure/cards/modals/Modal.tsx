import React from "react";
import styled from "styled-components";


const BGModal = styled.div<{
    $showModal: boolean;
}>`
    display: ${props => props.$showModal ? "block" : "none"};
    overflow: hidden;
    width: 100%;
    height: 100%;
    justify-content: center;
   

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.25);
`;

interface IModalProps {
    children?: React.ReactNode;
    showModal: boolean;
}

export default ({showModal, children}: IModalProps): React.ReactElement => <BGModal $showModal={showModal}>
    {children}
</BGModal>