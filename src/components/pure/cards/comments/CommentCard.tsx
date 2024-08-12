import styled from 'styled-components';
import {Icon} from "@iconify/react";
import React from "react";

interface ICommentCard {
    comment: string;
    onDelete: () => void;
    date: string;
}

const CommentDiv = styled.div`
    background-color: #0B1219;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    overflow-wrap: break-word;
    padding: 10px;
`;
const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    font-size: .9em;
    gap: 10px;
    width: 86%;
    color: white;
    
    transition: width 1s;
`;

const Comment = styled.p`
    margin: 0;
`;

const CommentBodyFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: .8em;
`;

export default function CommentCard({comment, date, onDelete}: ICommentCard): React.ReactNode {
    const commentTile = comment ?? 'loading data...';
    const dateTile = date ?? new Date().toDateString().slice(0, 10);
    
    return <CommentDiv>
        <CommentBody>
            <Comment>
                {commentTile}
            </Comment>
            <CommentBodyFooter>
                <Icon
                    icon="mdi:message-bubble"
                    height={20 + "px"}
                    color={'white'}
                />
                {dateTile}
            </CommentBodyFooter>
        </CommentBody>
        <Icon
            icon="mdi:delete"
            onClick={onDelete}
            cursor={'pointer'}
            height={30 + "px"}
            color={'white'}
        />
    </CommentDiv>
}