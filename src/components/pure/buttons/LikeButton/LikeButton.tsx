import styled from "styled-components";
import {Icon} from '@iconify/react';
import {memo, useCallback, useState} from "react";

interface ILikeButton {
    height: number;
    width: number;
    backgroundColor?: string;
    border?: {
        width?: number;
        color?: string;
    }
    onClick?: (clickedLike: boolean) => void;
    clickedLike?: boolean;
}

interface LikeButtonDomProps {
    $height: number;
    $width: number;
    $backgroundColor?: string;
    $border?: {
        $borderWidth?: number;
        $borderColor?: string;
    }
}

const LikeButtonDom = styled.button<LikeButtonDomProps>`
    height: ${props => props.$height + "px" || "20px"};
    width: ${props => props.$width + "px" || "20px"};
    background-color: ${props => props.$backgroundColor || "#FFFFFF"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-width: ${props => props.$border 
            ?  props.$border.$borderWidth + 'px'
            : 'none'};
    border-color: ${props => props.$border
            ?  props.$border.$borderColor
            : 'none'};
    cursor: pointer;
`

interface IHeartIcon {
    clickedLike: boolean;
    height: number;
}
function HeartIcon(props: IHeartIcon) {
    return props.clickedLike 
        ?  <Icon 
                icon="mdi:cards-heart" 
                color={'FC76AE'} 
                height={props.height + "px"} 
            /> 
        : <Icon 
            icon="mdi:cards-heart-outline" 
            height={props.height + "px"} 
        />;
}

function LikeButton(props: ILikeButton) {
    const [clickedLike, setClickedLike] = useState<boolean>(props.clickedLike || false);
    const onClickLike = useCallback(() => {
        setClickedLike(prev => !prev);
        props.onClick?.(clickedLike);
    }, []);
    
    
    return <LikeButtonDom 
            onClick={onClickLike}
            $backgroundColor={props.backgroundColor}
            $height={props.height} 
            $border={{
                $borderColor: props.border?.color,
                $borderWidth: props.border?.width
            }}
            $width={props.width}>
        <HeartIcon  
            clickedLike={clickedLike} 
            height={props.height}
        />
    </LikeButtonDom>
}

export default memo(LikeButton);