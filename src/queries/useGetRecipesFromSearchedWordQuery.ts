import { useSuspenseQuery } from '@tanstack/react-query';
import {
  getRecipesFromSearchedWord,
  RecipeResponse,
} from '@/services/concrete/recipe.service.ts';

export function useGetRecipesFromSearchedWordQuery(query: string) {
  return useSuspenseQuery<RecipeResponse>({
    queryKey: ['recipe', query],
    queryFn: () => getRecipesFromSearchedWord(query),
  });
}
