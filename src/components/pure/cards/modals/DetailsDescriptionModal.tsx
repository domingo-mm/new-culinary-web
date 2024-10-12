import React, {useCallback} from "react";
import BGModal from "@/components/pure/cards/modals/Modal";
import styled from "styled-components";
import {themeBreakpoints} from "@/utils/theme.ts";
import {Icon} from "@iconify/react";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton.tsx";
import CommentCard from "@/components/pure/cards/comments/CommentCard.tsx";
import { v4 as uuidv4 } from 'uuid';

const Modal = styled.main`
    height: 90%;
    width: 90%;
    background-color: white;
    transition: width 1s;
    border-radius: 5px;
    overflow: hidden;

    @media(min-width: ${themeBreakpoints.breakpoints.desktop}) {
        width: 35%;
    }

    @media (min-width: ${themeBreakpoints.breakpoints['4k']}) {
        width: 40%;
    }
`;

const ModalClose = styled.div`
    padding: 10px;
    display: flex;
    justify-content: flex-end;

    @media (min-width: ${themeBreakpoints.breakpoints['4k']}) {
        padding: 20px;
    }
`;

const ModalHeader = styled.header<{
    $image?: string
}>`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    background: ${props =>
            props.$image
                    ? `url(${props.$image})`
                    : 'gray'} center;
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

const Title = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 2em;
    color: white;

    @media (min-width: ${themeBreakpoints.breakpoints['4k']}) {
        font-size: 3em;
    }
`;

const InformationHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`;
const InformationIcons = styled.div`
    display: flex;
    gap: 5px;
    font-size: 1em;
    color: white;
    font-weight: bold;
    align-items: center;
`;

const ModalBody = styled.div`
    height: 100%;
    background-color: #112232;
    padding: 20px;
    
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Ingredients = styled.div``;
const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

interface IDetailsDescriptionModalProps{
    howMany: number;
    howLong: number;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    image?: string;
}

export default function DetailsDescriptionModal(props: IDetailsDescriptionModalProps): React.ReactElement {
    
    const howMany = props.howMany ?? 0;
    const howLong = props.howLong ?? 0;
    const title = props.title ?? 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs';
    const comments: {
        id: string;
        comment: string;
        date: string;
    }[] = [
        {
            id: uuidv4(),
            comment: 'hello worldaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            date: ''
        },
        {
            id: uuidv4(),
            comment: 'Hello Matrix',
            date: ''
        }
    ];
    
    const ShowComments = useCallback(() => {
        return comments.map((comment) => {
            return <CommentCard key={comment.id} comment={comment.comment} date={comment.date} onDelete={() => {}}/>;
        })
    },[]);
    
    
    return <BGModal showModal={props.showModal}>
        <Modal>
            <ModalClose>
                <Icon
                    onClick={() => props.setShowModal(prev => !prev)}
                    cursor={'pointer'}
                    icon="zondicons:close-outline"
                    height={30 + "px"}
                    color={'112232'}
                />
            </ModalClose>
            <ModalHeader>
                <Title>
                    {title}
                </Title>
                <InformationHeader>
                    <InformationIcons>
                        <Icon
                            icon="fluent-emoji-high-contrast:fork-and-knife-with-plate"
                            height={30 + "px"}
                            color={'white'}
                        />
                        {howMany}
                    </InformationIcons>
                    <InformationIcons>
                        <Icon
                            icon="ant-design:clock-circle-outlined"
                            height={30 + "px"}
                            color={'white'}
                        />
                        {howLong}
                    </InformationIcons>
                    <LikeButton 
                        heartHeight={25} 
                        height={40} 
                        border={{width: 3, color: '#112232'}}
                        width={{max: 40, min: 40}} 
                        onClick={(clicked) => console.log(clicked)}/>
                </InformationHeader>
            </ModalHeader>
            <ModalBody>
                <Ingredients>
                    <h3 style={{margin: 0, color: 'white'}}>Ingredients:</h3>
                </Ingredients>
                <Comments>
                    <h3 style={{margin: 0, color: 'white'}}>Comments:</h3>
                    <ShowComments />
                </Comments>
            </ModalBody>
        </Modal>
    </BGModal>
}