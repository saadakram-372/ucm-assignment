import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.JSX.Element;
};

export const DataProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
