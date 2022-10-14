import { Link } from "react-router-dom";

export function Card({ image, title, href, previewContent, createdBy }) {
  return (
    <Link
      to={href}
      className="block shadow rounded-md overflow-hidden transition hover:scale-105"
    >
      <div className="relative">
        <img
          src={`${image}`}
          alt="cover"
          className="w-full h-28 object-cover"
        />
      </div>
      <div className="p-2 space-y-1">
        <h3 className="w-full font-bold text-xl">{title}</h3>
        <p className="text-sm">{previewContent}</p>
        <p className="text-xs text-gray-500">{createdBy}</p>
      </div>
    </Link>
  );
}
