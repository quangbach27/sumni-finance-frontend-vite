import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Sumni Finance</h1>
      <p className="text-muted-foreground mt-2">Welcome to the dashboard.</p>
    </div>
  );
}
