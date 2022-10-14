import { Button } from "components/button";
import { Card } from "components/card";
import { getArticles } from "models/articles";
import { useEffect, useState } from "react";

export function SectionArticles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const nextPage = articles.length / 10 + 1;

  const loadData = async () => {
    setLoading(true);
    setArticles(await getArticles());
    setLoading(false);
  };

  const handleShowMore = async () => {
    setLoading(true);
    const newArticles = await getArticles(nextPage, search);
    if (newArticles.length < 10) {
      setHasMore(false);
    }
    setArticles([...articles, ...newArticles]);
    setLoading(false);
  };

  const handleSearch = async (e) => {
    if (e.key == "Enter") {
      const value = e.target.value;
      setSearch(value);
      const newArticles = await getArticles(1, value);
      setArticles(newArticles);
      setHasMore((newArticles?.length) ? true : false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="p-4 space-y-8">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">Articles</h1>
        <input
          className="border rounded text-base px-3 py-1 outline-none focus:ring transition w-full max-w-[200px]"
          placeholder="Search"
          onKeyUp={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Card
            key={article.id}
            href={`article/${article.id}`}
            title={article.title}
            image={article.image}
            previewContent={article.previewContent}
            createdBy={article.createdBy}
          />
        ))}
        {(!articles?.length && !loading) && (
          <p className="col-span-4 text-center">Data yang anda cari tidak ditemukan</p>
        )}
      </div>

      <div className="text-center">
        {hasMore && (
          <Button onClick={handleShowMore} isLoading={loading}>
            Show More
          </Button>
        )}
      </div>
    </section>
  );
}
