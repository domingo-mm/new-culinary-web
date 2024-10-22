import SearchInput from "@/components/pure/forms/input/SearchInput";
import LikeButton from "@/components/pure/buttons/LikeButton/LikeButton";
import styled from "styled-components";
import MainLogo from "/main-logo.svg";
import {Suspense, useEffect, useState} from "react";
import {themeBreakpoints} from "@/utils/theme";
import CreativeCommon from "@/components/pure/common/CreativeCommon";
import DetailsDescriptionModal from "@/components/pure/cards/modals/DetailsDescriptionModal";
import CardsSkeleton from "@/components/pure/skeletonsUI/CardsSkeleton.tsx";
import {useDebounce} from "@uidotdev/usehooks";
import RecipeList from "@/components/business/RecipeList.tsx";
import {Recipe} from "@/services/concrete/recipe.service.ts";

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
    overflow: hidden;
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
`;

export default function App() {
    const [showHeaderComponent, setShowHeaderComponent] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<{openModal: boolean, recipe?: Recipe}>({
        openModal: false,
    });
    
    useEffect(() => {
        setTimeout(() => {
            setShowHeaderComponent(true);
        }, 1200);
    }, []);
    
    const [searchRecipe, setSearchRecipe] = useState<string>('');
    const debouncedSearchRecipe = useDebounce(searchRecipe, 500);
   
  return (
      <>
          <MainComponent>
              <MainLogoComponent src={MainLogo} alt={"Main Logo"} />
              <HeaderComponent $showComponent={showHeaderComponent}>
                  <SearchInput
                      placeholder={'Search for the recipe ...'}
                      onChange={(input) => {
                          input.length > 3 && setSearchRecipe(input)
                      }}
                  />
                  <LikeButton heartHeight={40} height={40} width={{max: 40, min: 40}} onClick={(clicked) => console.log(clicked)}/>
              </HeaderComponent>
                  <Suspense fallback={
                      <CardsDiv>
                        <CardsSkeleton count={20}/>
                      </CardsDiv>
                  }>
                    <RecipeList debouncedSearchRecipe={debouncedSearchRecipe} setShowModal={setShowModal} />
                  </Suspense>
              <CreativeCommon description={
                  `Domingo Mesa Maliniak © ${new Date().getFullYear()}`
              }/>
          </MainComponent>
          <DetailsDescriptionModal recipe={showModal.recipe} showModal={showModal.openModal} setShowModal={setShowModal} howLong={4} howMany={10}/>
      </>
  )
}



