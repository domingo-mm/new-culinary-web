import SearchInput from "@/components/pure/forms/input/SearchInput";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton";
import styled from "styled-components";
import MainLogo from "/main-logo.svg";
import {Suspense, useEffect, useState} from "react";
import {themeBreakpoints} from "@/utils/theme";
import CreativeCommon from "@/components/pure/common/CreativeCommon";
import DetailsDescriptionModal from "@/components/pure/cards/modals/DetailsDescriptionModal";
import {QueryClient} from "@tanstack/react-query";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import CardsSkeleton from "@/components/pure/skeletonsUI/CardsSkeleton.tsx";
// import {getRecipesFromSearchedWordQuery} from "@/queries/getRecipesFromSearchedWordQuery.ts";

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
    width: 100rem;
    justify-content: center;
    gap: 10px;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default function App() {
    const queryClient = new QueryClient();
    const persister = createSyncStoragePersister({
        storage: window.localStorage,
    });
    
    const [showHeaderComponent, setShowHeaderComponent] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    
    useEffect(() => {
        setTimeout(() => {
            setShowHeaderComponent(true);
        }, 1200);
    }, []);
    
    const [searchRecipe, setSearchRecipe] = useState<string>();
    
    // TODO: Add debounced functionality for the searched word, and a functionality to not ask all the time the API
    // const {} = getRecipesFromSearchedWordQuery(searchRecipe.length >= 3 :)

  return (
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
          <MainComponent>
              <MainLogoComponent src={MainLogo} alt={"Main Logo"} />
              <HeaderComponent $showComponent={showHeaderComponent}>
                  <SearchInput 
                      placeholder={'Search for the recipe ...'} 
                      onChange={setSearchRecipe} 
                  />
                  <LikeButton heartHeight={40} height={40} width={{max: 40, min: 40}} onClick={(clicked) => console.log(clicked)}/>
              </HeaderComponent>
              <CardsDiv>
                      <Suspense fallback={<CardsSkeleton count={20}/>}>
                          {searchRecipe && searchRecipe.length >= 3 && <></>}
                      </Suspense>
              </CardsDiv>
              <CreativeCommon description={
                  `Domingo Mesa Maliniak © ${new Date().getFullYear()}`
              }/>
          </MainComponent>
          <DetailsDescriptionModal showModal={showModal} setShowModal={setShowModal} howLong={4} howMany={10} image={''}/>
      </PersistQueryClientProvider>
  )
}



