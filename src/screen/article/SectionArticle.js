export function SectionArticle({ article }) {
  const { image, title, createBy, createdAt, content } = article;
  return (
    <section className="p-4 space-y-8">
      <div>
        <img src={image} className="w-full h-64 rounded-xl object-cover" />
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className="flex gap-3 text-xs text-gray-500">
          <p>Create by: {createBy}</p>
          <p>Published at: {new Date(createdAt).toLocaleString()}</p>
        </div>
        <p>{content}</p>
      </div>
    </section>
  );
}
