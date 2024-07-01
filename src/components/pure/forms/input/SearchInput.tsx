import {memo} from "react";
import styled from "styled-components";
import {Icon} from "@iconify/react";
import {themeBreakpoints} from "@/utils/theme.ts";

interface ISearchInput {
    placeholder?: string;
    backgroundColor?: string;
    onChange?: (value: string) => void;
    border?: {
        width: number;
        color: string;
    }
}

interface InputProps {
    $border?: {
        $borderColor?: string;
        $borderWidth?: number;
    }
    $backgroundColor?: string;
}

const InputStyledDom = styled.input<InputProps>`
    background-color: ${props => props.$backgroundColor || "#FFFFFF"};
    border: ${props => props.$border};
    padding-left: 10px;
    border-radius: 5px;
    height: 40px;
    width: 290px;
    transition: width 1s;
    
    @media(min-width: ${themeBreakpoints.breakpoints.tablet}) {
        width: calc(622px - 10rem);
    }
    @media(min-width: ${themeBreakpoints.breakpoints.desktop}) {
        width: 622px;
    }
`;

const DivStyledDom = styled.div`
    position: relative;
    display: inline-block;
`;

function SearchInput(props: ISearchInput) {
    return <DivStyledDom>
        <InputStyledDom
            onChange={(input) => props.onChange?.(input.target.value.trim())}
            $border={{
                $borderColor: props.border?.color || '',
                $borderWidth: props.border?.width || 0
            }}
            $backgroundColor={props.backgroundColor}
            placeholder={props.placeholder}
        />
        <Icon icon={'ic:baseline-search'} style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
        }}/>
    </DivStyledDom>
}

export default memo(SearchInput);