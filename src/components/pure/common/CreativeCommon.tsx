import {memo} from "react";
import styled from "styled-components";
import {themeBreakpoints} from "@/utils/theme.ts";
interface ICreativeCommon {
    description: string;
}

const CreativeCommonDom = styled.span`
    display: flex;
    justify-content: center;
    color: white;
    font-family: Inter, serif;
    font-size: .8rem;
    margin-bottom: 20px;

    @media(min-width: ${themeBreakpoints.breakpoints.tablet}) {
        font-size: .8rem;
    }

    @media(min-width: ${themeBreakpoints.breakpoints.desktop}) {
        font-size: 0.9rem;
    }
`;

function CreativeCommon(props: ICreativeCommon) {
    return <CreativeCommonDom>
        {props.description}
    </CreativeCommonDom>
}

export default memo(CreativeCommon);