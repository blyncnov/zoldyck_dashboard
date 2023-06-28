import { type ReactElement, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

// React Toast library
import { ToastContainer } from "react-toastify";

// CSS STYLES
import "@/styles/globals.css";
import "@/styles/base.scss";
import "@/styles/layout.scss";

// TOASTS Alerts
import "react-toastify/dist/ReactToastify.css";

// Redux
import { Provider } from "react-redux";
import store from "../redux/store";

// Dashboard Layout Component
import DashboardLayout from "@/layouts/dashboard";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  if (Component.getLayout) {
    return (
      <>
        <Provider store={store}>
          <ToastContainer />
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
          <Analytics />
        </Provider>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}
