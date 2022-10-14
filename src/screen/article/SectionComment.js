import { confirmDelete } from "components/notif";
import { deleteComment, getComments } from "models/articles";
import { useEffect, useState } from "react";
import { FormComment } from "./FormComment";
import { ListComment } from "./ListComment";

export function SectionComment({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    setComments(await getComments(articleId));
    setLoading(false);
  };
  
  const handleDelete = async (id) => {
    const confirm = await confirmDelete();
    await deleteComment(articleId, id);
    if (confirm) {
      loadData();
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="p-4 space-y-8">
      <div className="space-y-4">
        <h2 className="font-bold text-lg">Comments</h2>

        <ListComment comments={comments} loading={loading} onDelete={handleDelete} />

        <FormComment articleId={articleId} loadData={loadData} />
      </div>
    </section>
  );
}
