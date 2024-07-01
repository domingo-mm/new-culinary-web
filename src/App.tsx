import SearchInput from "@/components/pure/forms/input/SearchInput.tsx";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton.tsx";
import styled from "styled-components";
import MainLogo from "./assets/main-logo.svg";
import {useEffect, useState} from "react";

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
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
`

const MainLogoComponent = styled.img`
    
    height: 120px;
    transition: height 0.5s;
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
            <SearchInput placeholder={'Hello World!'} onChange={(input) => console.log(input)} />
            <LikeButton height={30} width={{max: 30, min: 30}} />
        </HeaderComponent>
    </MainComponent>
  )
}

export default App
