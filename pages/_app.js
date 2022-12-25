import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import {
  QueryClientProvider,
  Queryclient,
  useQueryClient,
  QueryClient,
} from "react-query";
import { AuthProvider } from "../context/AuthContext";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
