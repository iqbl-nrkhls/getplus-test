import Layout from "layout";
import { getArticle } from "models/articles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SectionArticle } from "./SectionArticle";
// import { SectionComment } from "./SectionComment";

export default function ArticleScreen() {
  const { id } = useParams();
  const [article, setArticle] = useState();

  const loadData = async () => {
    setArticle(await getArticle(id))
  }

  useEffect(() => {
    loadData();
  },[])

  return (
    <Layout>
      {article ? (
        <>
          <SectionArticle article={article} />
          {/* <SectionComment articleId={article.id} /> */}
        </>
      ): (
        <div className="mx-4 text-center my-20">
          <p>Loading...</p>
        </div>
      )}
    </Layout>
  );
}
