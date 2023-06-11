// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import TopRatedMovie from "./pages/movie/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constant/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/movie/Detail";


function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  <Layout>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/create" element={<CreateMovie />}></Route>
      <Route path="/movie/popular" element={<PopularMovie />}></Route>
      <Route path="/movie/now-playing" element={<NowPlayingMovie />}></Route>
      <Route path="/movie/top-rated" element={<TopRatedMovie />}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>

    </Routes>
  </Layout>
  </ThemeProvider>
  </>
  );
}

export default App;
