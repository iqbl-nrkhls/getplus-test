import { menu } from "models/constant/menu";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="border-l">
      <ul className="flex gap-2">
        {menu.map((e, key) => (
          <li key={key}>
            <Link
              to={e.path}
              className="text-gray-800 px-6 py-2 mx-2 rounded hover:bg-gray-100 focus:bg-gray-100 transition"
            >
              {e.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
