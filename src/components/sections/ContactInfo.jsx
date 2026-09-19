import { siteConfig } from '../../config/site.config';

const items = [
  {
    label: 'Адрес',
    value: siteConfig.business.address,
    href: siteConfig.business.mapUrl,
    external: true,
    bar: 'bg-brand',
  },
  {
    label: 'Телефон',
    value: siteConfig.business.phone,
    href: `tel:${siteConfig.business.phone}`,
    bar: 'bg-azure',
  },
  {
    label: 'Имейл',
    value: siteConfig.business.email,
    href: `mailto:${siteConfig.business.email}`,
    bar: 'bg-mint',
  },
];

export default function ContactInfo() {
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="card card-lift overflow-hidden"
        >
          <span className={`block h-1 ${item.bar}`} aria-hidden="true" />
          <div className="p-6">
            <p className="eyebrow mb-2">{item.label}</p>
            <a
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="text-ink font-semibold hover:text-brand no-underline break-words"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
