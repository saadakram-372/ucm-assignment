import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { APIResponseType } from "../../service/types";
import { getList } from "../../service/fetchers";
import { MoviesSerializedType } from "./types";

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
