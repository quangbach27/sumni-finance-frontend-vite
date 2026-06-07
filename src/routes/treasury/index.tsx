import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/treasury/')({
  component: TreasuryPage,
});

const MOCK_ENTRIES = [
  { id: '1', description: 'Operating fund transfer', amount: 50000 },
  { id: '2', description: 'Reserve allocation', amount: 120000 },
];

function TreasuryPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Treasury</h1>
      <ul className="space-y-2">
        {MOCK_ENTRIES.map((entry) => (
          <li key={entry.id}>
            <Link
              to="/treasury/$entryId"
              params={{ entryId: entry.id }}
              className="hover:bg-muted flex justify-between rounded border px-4 py-2"
            >
              <span>{entry.description}</span>
              <span className="font-mono">
                ${entry.amount.toLocaleString()}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
