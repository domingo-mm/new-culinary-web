import React, { useCallback } from "react";
import CardTile from "@/components/pure/cards/Tile/CardTile.tsx";
import styled from "styled-components";
import {getRecipesFromSearchedWordQuery} from "@/queries/getRecipesFromSearchedWordQuery.ts";
import {Recipe} from "@/services/concrete/recipe.service.ts";

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

interface IRecipeList {
    debouncedSearchRecipe: string,
    setShowModal: React.Dispatch<React.SetStateAction<{openModal: boolean, recipe?: Recipe }>>
}

const RecipeList:React.FC<IRecipeList> = ({setShowModal, debouncedSearchRecipe}) => {
    const {data: recipeData} = getRecipesFromSearchedWordQuery(debouncedSearchRecipe)
    
    const onLikeClick = useCallback((recipe: Recipe) => {
        // TODO: Add zustand - create, delete from localstorage
        console.log(recipe);
    }, []);
    
    return (
        <CardsDiv>
            {
                recipeData?.hits.map(
                    (recipe, index) =>
                        <CardTile 
                            key={index} 
                            onLikeClick={() => onLikeClick(recipe.recipe)} 
                            onClick={() => setShowModal({
                                openModal: true,
                                recipe: recipe.recipe,
                            })} 
                            backgroundImage={recipe.recipe.image} 
                            title={recipe.recipe.label} 
                            commentsCounter={0}
                        />
                )
            }
        </CardsDiv>
    )
}

export default RecipeList;