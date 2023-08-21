import "bootstrap/dist/css/bootstrap.css";
import { Courgette } from "next/font/google";
// import "./table/Table.module.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const courgette = Courgette({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <main className={courgette.className}>
      <Component {...pageProps} />;
      </main>
    </>
  );
}
