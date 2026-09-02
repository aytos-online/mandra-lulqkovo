import { content } from '../config/content';
import Differentiators from '../components/sections/Differentiators';

export default function About() {
  const [photo1, photo2] = content.about.photos;

  return (
    <>
      <section className="section-container">
        <p className="eyebrow mb-3">За нас</p>
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-10 max-w-2xl">
          Тридесет години едно семейно начинание
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            {content.about.intro.map((p) => (
              <p key={p.slice(0, 24)} className="text-ink-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <img
            src={photo1.src}
            alt={photo1.alt}
            className="rounded-tr-[4rem] rounded-tl-2xl rounded-br-2xl rounded-bl-2xl w-full object-cover aspect-[4/5] shadow-lg"
          />
        </div>
      </section>

      <section className="bg-cream-deep/50">
        <div className="section-container grid md:grid-cols-2 gap-10 items-center">
          <img
            src={photo2.src}
            alt={photo2.alt}
            className="rounded-bl-[4rem] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl w-full object-cover aspect-[4/5] shadow-lg md:order-2"
          />
          <div className="flex flex-col gap-4 md:order-1">
            <p className="eyebrow mb-1">За мандрата</p>
            {content.about.story.map((p) => (
              <p key={p.slice(0, 24)} className="text-ink-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Differentiators />
    </>
  );
}
