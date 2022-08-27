import { Provider } from "react-redux";
import { store } from "../app/store";
import "../../styles/globals.css";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  
  //Fix issue with hidration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
