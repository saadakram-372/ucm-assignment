import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { APIResponseType } from "../../service/types";
import { getList } from "../../service/fetchers";
import { Config } from "../../app-config/config";

type SearchFetchParamsType = {
  title: string;
};

export const useSearch = ({
  title,
}: SearchFetchParamsType): UseQueryResult<APIResponseType<any>> => {
  return useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const data = await getList(
        `search/movie?api_key=${Config.API_KEY}&query=${encodeURIComponent(
          title
        )}`
      );

      return data.json();
    },
  });
};
