import { content } from '../config/content';
import ContactInfo from '../components/sections/ContactInfo';

export default function Contact() {
  return (
    <section className="section-container">
      <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">Контакти</h1>
      <p className="text-ink-muted max-w-xl mb-10">{content.contact.intro}</p>
      <ContactInfo />
    </section>
  );
}
