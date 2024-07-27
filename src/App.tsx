import SearchInput from "@/components/pure/forms/input/SearchInput.tsx";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton.tsx";
import styled from "styled-components";
import MainLogo from "./assets/main-logo.svg";
import {useEffect, useState} from "react";
import {themeBreakpoints} from "@/utils/theme.ts";
import CreativeCommon from "@/components/pure/common/CreativeCommon.tsx";
import CardTile from "@/components/pure/cards/Tile/CardTile.tsx";

const HeaderComponent = styled.div<{$showComponent: boolean}>`
    @keyframes fadeIn {
        from {
            opacity: 0;
            max-height: 0;
        }
        to {
            opacity: 1;
            max-height: 500px; 
        }
    }
    
    display: ${(props) => props.$showComponent ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    gap: 1rem;
    animation: fadeIn 0.3s ease-in-out forwards;
    opacity: ${(props) => props.$showComponent ? 1 : 0};
    transition: opacity 2s;
`;

const MainComponent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`

const MainLogoComponent = styled.img`
    height: 75px;
    transition: height 0.5s;
    margin-top: 30px;

    @media(min-width: ${themeBreakpoints.breakpoints.tablet}) {
        height: 90px;
    }
    
    @media(min-width: ${themeBreakpoints.breakpoints.desktop}) {
        height: 130px;
    }
`

const CardsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`

function App() {
    const [showHeaderComponent, setShowHeaderComponent] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(() => {
            setShowHeaderComponent(true);
        }, 1200);
    }, []);
  
  return (
    <MainComponent>
        <MainLogoComponent src={MainLogo} alt={"Main Logo"} />
        <HeaderComponent $showComponent={showHeaderComponent}>
            <SearchInput placeholder={'Search for the recipe ...'} onChange={(input) => console.log(input)} />
            <LikeButton heartHeight={40} height={40} width={{max: 40, min: 40}} onClick={(clicked) => console.log(clicked)}/>
        </HeaderComponent>
        <CardsDiv>
            <CardTile title={""} commentsCounter={0} />
        </CardsDiv>
        <CreativeCommon description={
            `Domingo Mesa Maliniak © ${new Date().getFullYear()}`
        }/>
    </MainComponent>
  )
}

export default App
