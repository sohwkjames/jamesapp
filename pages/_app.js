import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import {
  QueryClientProvider,
  Queryclient,
  useQueryClient,
  QueryClient,
} from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />{" "}
    </QueryClientProvider>
  );
}

export default MyApp;
