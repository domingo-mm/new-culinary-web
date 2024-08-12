import React from "react";
import styled from "styled-components";

const BGModal = styled.div<{
    $showModal: boolean;
}>`
    display: ${props => props.$showModal ? "flex" : "none"};
    height: 100%;
    width: 100%;
    
    overflow: hidden;
    justify-content: center;
    align-items: center;

    position: absolute;
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