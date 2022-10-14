import { Brand } from './Brand';
import { Nav } from './Nav';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 w-screen bg-white shadow">
      <div className="flex items-center px-6 py-5 max-w-7xl w-full mx-auto">
        <Brand />
        <Nav />
      </div>
    </header>
  );
}
