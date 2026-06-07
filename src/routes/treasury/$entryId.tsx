import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/treasury/$entryId')({
  component: TreasuryEntryPage,
});

function TreasuryEntryPage() {
  const { entryId } = Route.useParams();

  return (
    <div>
      <Link
        to="/treasury"
        className="text-muted-foreground text-sm hover:underline"
      >
        ← Back to Treasury
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Entry #{entryId}</h1>
      <p className="text-muted-foreground mt-2">
        Details for journal entry {entryId}.
      </p>
    </div>
  );
}
