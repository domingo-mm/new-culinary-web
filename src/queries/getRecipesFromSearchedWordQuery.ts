import {useQuery} from "@tanstack/react-query";
import {getRecipesFromSearchedWord, RecipeResponse} from "@/services/concrete/recipe.service.ts";

export function getRecipesFromSearchedWordQuery(query: string) {
    return useQuery<RecipeResponse>({
        queryKey: ['recipe', query],
        queryFn: () => getRecipesFromSearchedWord(query),
    })
}