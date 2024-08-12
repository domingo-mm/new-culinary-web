import styled from "styled-components";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton.tsx";
import {Icon} from "@iconify/react";

interface ICardTile {
    backgroundImage?: string;
    title: string;
    commentsCounter: number;
    onClick?: () => void;
}

const MainCardDiv = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background: white;
    height: 220px;
    width: 302px;
    border-radius: 5px;
    overflow: hidden;
    transition: order 0.3s ease;
    
    &:hover {
        cursor: pointer;
    }
`

const HeaderCardDiv = styled.div<{
    $image?: string
}>`
    width: 100%;
    height: 65%;
    background: ${props => 
            props.$image 
            ? `url(${props.$image})` 
            : 'linear-gradient(90deg, #f0f0f0 30%, #B3B3B3 60%, #f0f0f0 75%)'} center;
    background-size: ${props => props.$image ? 'cover' : '200% 50%'};
    animation: ${props => props.$image ? 'none' : 'shimmer 1.5s infinite'};

    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
`;

const BodyCardDiv = styled.div`
    padding: 15px;
    color: #173C5E;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function CardTile(props: ICardTile) {
    
    const title = (props.title) ? props.title : 'loading recipe ...';
    const comments = (props.commentsCounter > 0) ? props.commentsCounter : 0;
    
    return <MainCardDiv onClick={props.onClick}>
        <HeaderCardDiv $image={props?.backgroundImage}>
            <LikeButton 
                onClick={() => {
                    console.log('hello World')
                }}
                heartHeight={20}
                height={40} 
                width={{
                    max: 40,
                    min: 40
                }} 
                backgroundColor={'#173C5E'}
                strokeColor={'white'}
                border={{color: 'white', width:2}}
                position={{
                    type: 'absolute',
                    bottom: 60,
                    right: 10,
                }}
            />
        </HeaderCardDiv>
        <BodyCardDiv>
            <header style={{
                inlineSize: 210,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontWeight: 'bold'
            }}>
                {title}
            </header>
            <footer style={{
                position: 'relative',
                bottom: 0,
                display: 'flex',
                alignSelf: 'end',
                gap: 5,
                fontWeight: 'bold'
            }}>
                <Icon
                    icon="mdi:message-reply-text-outline"
                    color={'173C5E'}
                    height={20 + "px"}
                />
                {comments}
            </footer>
        </BodyCardDiv>
    </MainCardDiv>
}