import {api} from "@/services/axios-instance.ts";

type RecipeImage = {
    url: string;
    height: number;
    width: number;
}

type RecipeImages = {
    "THUMBNAIL": RecipeImage,
    "SMALL": RecipeImage,
    "REGULAR": RecipeImage,
    "LARGE": RecipeImage,
}

export type Recipe = {
    label: string;
    url: string;
    source: string;
    image: string;
    images: RecipeImages;
    ingredientLines: string[];
    calories: number;
}

export interface RecipeResponse {
    hits: {
        recipe: Recipe
    }[]
}

export async function getRecipesFromSearchedWord(searchedWord: string) {
    const response = await api.get<RecipeResponse>('/recipes/v2', {
        params: {
            q: searchedWord,
        }
    });
    
    return response.data;
}