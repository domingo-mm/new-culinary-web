import styled from "styled-components";
import {Icon} from '@iconify/react';
import {memo, useCallback, useState} from "react";
interface ILikeButton {
    height: number;
    heartHeight: number;
    width: {
        max: number;
        min: number;
    }
    backgroundColor?: string;
    border?: {
        width?: number;
        color?: string;
    }
    onClick?: (clickedLike: boolean) => void;
    clickedLike?: boolean;
    strokeColor?: string;
    position?: {
        type?: 'absolute' | 'none';
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }
}

interface LikeButtonDomProps {
    $height: number;
    $minWidth: number;
    $maxWidth: number;
    $backgroundColor?: string;
    $border?: {
        $borderWidth?: number;
        $borderColor?: string;
    }
    $position: {
        $type?: 'absolute' | 'none';
        $top?: number;
        $left?: number;
        $right?: number;
        $bottom?: number;
    }
}

const LikeButtonDom = styled.button<LikeButtonDomProps>`
    height: ${props => props.$height + "px" || "20px"};
    width: clamp(${props => (props.$minWidth + "px" || "20px")}, 10%, ${props => (props.$maxWidth + "px" || "20px")});
    background-color: ${props => props.$backgroundColor || "#FFFFFF"};
    display: flex;
    position: ${props => props?.$position?.$type || "relative"};
    top: ${props => props?.$position?.$top + "px" || "0px"};
    left: ${props => props?.$position?.$left + "px" || "0px"};
    right: ${props => props?.$position?.$right + "px" || "0px"};
    bottom: ${props => props?.$position?.$bottom + "px" || "0px"};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-width: ${props => props.$border 
            ?  props.$border.$borderWidth + 'px'
            : 'none'};
    border-color: ${props => props.$border
            ?  props.$border.$borderColor
            : 'none'};
    border-style: solid;
    cursor: pointer;
    outline: none;
`

interface IHeartIcon {
    clickedLike: boolean;
    height: number;
    strokeColor?: string;
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
            color={props.strokeColor}
        />;
}

function LikeButton(props: ILikeButton) {
    const [clickedLike, setClickedLike] = useState<boolean>(false);
    const onClickLike = useCallback(() => {
        setClickedLike(prev => !prev);
        props.onClick?.(!clickedLike);
    }, [clickedLike]);
    
    return <LikeButtonDom 
            onClick={(event) => {
                event.stopPropagation();
                onClickLike();
            }}
            $backgroundColor={props.backgroundColor}
            $height={props.height} 
            $border={{
                $borderColor: props.border?.color,
                $borderWidth: props.border?.width
            }}
            $position={{
                $type: props.position?.type,
                $bottom: props.position?.bottom,
                $left: props.position?.left,
                $right: props.position?.right,
                $top: props.position?.top,
            }}
            $maxWidth={props.width.max}
            $minWidth={props.width.min}>
        <HeartIcon  
            clickedLike={clickedLike} 
            height={props.heartHeight}
            strokeColor={props?.strokeColor}
        />
    </LikeButtonDom>
}

export default memo(LikeButton);