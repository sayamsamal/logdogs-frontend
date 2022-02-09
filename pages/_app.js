import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
