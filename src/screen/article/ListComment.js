export function ListComment({ comments, loading, onDelete }) {
  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        <div key={comment.id} className="px-4 py-2 shadow rounded">
          <div className="flex gap-2 items-center gap-3 text-sm text-gray-600">
            <p className="font-semibold">{comment.user || "Anonymous"}</p>
            <p>{new Date(comment.createdAt).toLocaleString('id')}</p>
            <button onClick={() => onDelete(comment.id)} className="ml-auto">x</button>
          </div>
          <p className="mt-2">{comment.comment || "-"}</p>
        </div>
      ))}

      <p>{loading ? "Loading..." : !comments?.length ? "No comments" : ""}</p>
    </div>
  );
}
