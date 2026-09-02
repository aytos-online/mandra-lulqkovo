import { siteConfig } from '../../config/site.config';
import Card from '../ui/Card';

const items = [
  { label: 'Адрес', valueKey: 'address', href: null },
  { label: 'Телефон', valueKey: 'phone', hrefPrefix: 'tel:' },
  { label: 'Имейл', valueKey: 'email', hrefPrefix: 'mailto:' },
];

export default function ContactInfo() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((item) => {
        const value = siteConfig.business[item.valueKey];
        return (
          <Card key={item.label} className="p-6">
            <p className="eyebrow mb-2">{item.label}</p>
            {item.hrefPrefix ? (
              <a href={`${item.hrefPrefix}${value}`} className="text-ink font-semibold hover:text-maroon">
                {value}
              </a>
            ) : (
              <p className="text-ink font-semibold">{value}</p>
            )}
          </Card>
        );
      })}
    </div>
  );
}
