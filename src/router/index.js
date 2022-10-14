import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "screen/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="article">
          <Route path=":id" element={<AnimeDetailView />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}