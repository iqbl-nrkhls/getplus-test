import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "screen/home";
import ArticleScreen from "screen/article";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<p>Page not found!</p>} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="article">
          <Route path=":id" element={<ArticleScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}