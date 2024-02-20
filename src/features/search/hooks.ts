import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { APIResponseType } from "../../service/types";
import { getList } from "../../service/fetchers";
import { Config } from "../../app-config/config";
import { SearchSerializedType } from "./types";

type SearchFetchParamsType = {
  title: string;
};

export const useSearch = ({
  title,
}: SearchFetchParamsType): UseQueryResult<
  APIResponseType<SearchSerializedType>
> => {
  return useQuery({
    queryKey: ["search", title],
    queryFn: async () => {
      const data = await getList(
        `search/movie?api_key=${Config.API_KEY}&query=${title}`
      );

      return data.json();
    },
  });
};
