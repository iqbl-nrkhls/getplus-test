import { Button } from "components/button";
import { Input, Textarea } from "components/input";
import { notifSuccess } from "components/notif";
import { sendComment } from "models/articles";
import { useRef, useState } from "react";

export function FormComment({ articleId, loadData }) {
  const [loading, setLoading] = useState(false);
  const userRef = useRef();
  const commentRef = useRef();

  const handleSendComment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await sendComment(articleId, {
      user: userRef.current.value,
      comment: commentRef.current.value,
    });
    if (response.id) {
      notifSuccess();
      userRef.current.value = "";
      commentRef.current.value = "";
      loadData();
    }
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSendComment}
      className="px-4 py-2 shadow rounded space-y-2"
    >
      <h3 className="font-bold">Add comment</h3>

      <label htmlFor="user" className="block">
        <span>Name</span>
        <Input
          ref={userRef}
          name="name"
          id="user"
          className="w-full"
          placeholder="Anonymous"
          />
      </label>

      <label htmlFor="comment" className="block">
        <span>Comment</span>
        <Textarea
          ref={commentRef}
          name="comment"
          id="comment"
          className="w-full"
          placeholder="Place your comment here"
        />
      </label>

      <Button type="submit" className="ml-auto block" isLoading={loading}>
        Send
      </Button>
    </form>
  );
}
