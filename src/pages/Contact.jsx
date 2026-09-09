import { content } from '../config/content';
import PageHeader from '../components/layout/PageHeader';
import ContactInfo from '../components/sections/ContactInfo';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';
import { FolkStar } from '../components/ui/FolkPattern';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Контакти" title="Свържете се с нас" lead={content.contact.intro} />

      <section className="section-container">
        <ContactInfo />

        <div className="mt-16 max-w-3xl">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-ink mb-8">Често ни питат</h2>
          <dl className="flex flex-col gap-5">
            {content.contact.faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 90}>
                <div className="bg-paper border-2 border-ink/10 rounded-2xl p-6">
                  <dt className="flex items-start gap-3 font-serif font-bold text-ink text-lg mb-2">
                    <FolkStar className="w-4 h-4 mt-1.5 flex-shrink-0" />
                    {item.q}
                  </dt>
                  <dd className="text-ink-muted leading-relaxed pl-7">{item.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
