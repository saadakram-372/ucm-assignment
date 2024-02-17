import { MoviesSerializedType } from "./types";
import { getList } from "../../service/fetchers";
import { APIResponseType } from "../../service/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type MoviesListFetchParamsType = {
  page: number;
  language: string;
};

export const useMoviesList = ({
  page,
  language,
}: MoviesListFetchParamsType): UseQueryResult<
  APIResponseType<MoviesSerializedType>
> =>
  useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const data = await getList(
        `movie/popular?language=${language}&page=${page}`
      );
      return data.json();
    },
  });
