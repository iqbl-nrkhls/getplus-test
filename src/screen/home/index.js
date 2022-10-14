import Layout from "layout";
import { SectionArticles } from "./SectionArticles";
import { SectionBanner } from "./SectionBanner";

export default function HomeScreen() {
  return (
    <Layout>
      <SectionBanner />

      <SectionArticles />
    </Layout>
  );
}
