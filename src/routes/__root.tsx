import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="bg-background min-h-screen">
      <nav className="flex gap-4 border-b px-6 py-3">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/treasury" className="[&.active]:font-bold">
          Treasury
        </Link>
      </nav>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
