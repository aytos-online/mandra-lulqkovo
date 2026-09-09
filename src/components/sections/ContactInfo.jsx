import { siteConfig } from '../../config/site.config';
import { FolkBand } from '../ui/FolkPattern';

const items = [
  {
    label: 'Адрес',
    value: siteConfig.business.address,
    href: siteConfig.business.mapUrl,
    external: true,
    band: { a: '#2E8FC0', b: '#1E6B93', c: '#EFA92B' },
  },
  {
    label: 'Телефон',
    value: siteConfig.business.phone,
    href: `tel:${siteConfig.business.phone}`,
    band: { a: '#5CA45E', b: '#3E7A46', c: '#EFA92B' },
  },
  {
    label: 'Имейл',
    value: siteConfig.business.email,
    href: `mailto:${siteConfig.business.email}`,
    band: { a: '#F5C22B', b: '#D9A20D', c: '#C22E2A' },
  },
];

export default function ContactInfo() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-paper border-2 border-ink/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-[0_18px_36px_-16px_rgba(43,26,18,0.45)]"
        >
          <FolkBand height={12} threads={item.band} />
          <div className="p-6">
            <p className="eyebrow mb-2">{item.label}</p>
            <a
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="text-ink font-bold hover:text-maroon no-underline break-words"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
