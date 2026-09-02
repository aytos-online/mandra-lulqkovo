import Card from '../ui/Card';

export default function StoreCard({ store }) {
  return (
    <Card className="p-6">
      <h3 className="font-serif font-bold text-ink text-lg mb-2">{store.name}</h3>
      <p className="text-ink-muted text-sm">{store.city}</p>
      <p className="text-ink-muted text-sm">{store.schedule}</p>
    </Card>
  );
}
