import { API, graphqlOperation } from "aws-amplify";
import { useCallback, useEffect, useRef, useState } from "react";

export function useGetData<Type>(graphqlQuery: string, variables?: {} | undefined) {
  const fetchedAlready = useRef(false);

  const [state, setState] = useState<{ isLoading: boolean; data: Type | undefined; error: string | undefined }>({
    isLoading: true,
    data: undefined,
    error: undefined,
  });

  const fetchData = useCallback(() => {
    const fetch = async () => {
      const datas: GraphQLResult<any> = await API.graphql(graphqlOperation(graphqlQuery, variables));

      if (datas.errors) {
        setState({
          isLoading: false,
          data: undefined,
          error: "Failed to fetch data! Reason(s): \n" + datas.errors.join("\n"),
        });
      } else {
        setState({ isLoading: false, data: datas.data, error: undefined });
      }
    };
    fetch();
  }, [graphqlQuery, variables]);

  useEffect(() => {
    if (!fetchedAlready.current) {
      fetchData();
      fetchedAlready.current = true;
    }
  }, [fetchData]);

  return state;
}

export interface GraphQLResult<T = object> {
  data?: T;
  errors?: { message?: string }[];
  extensions?: {
    [key: string]: any;
  };
}
