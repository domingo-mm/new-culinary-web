import './LikeButton.css'
import styled, {css} from "styled-components";  

interface ILikeButton {
    height: number;
    width: number;
    
}

export default function LikeButton(props: ILikeButton) {
    const LikeButton = styled.button<{$primary: boolean}>`
        height: ${props.height};
        width: ${props.height};

        ${props => props.primary && css`
            background-color: white;
        `}
    `
    
    return <LikeButton >
        
    </LikeButton>
}