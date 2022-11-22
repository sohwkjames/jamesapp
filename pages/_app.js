import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
