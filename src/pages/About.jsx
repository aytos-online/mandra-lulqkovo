import { content } from '../config/content';
import PageHeader from '../components/layout/PageHeader';
import Differentiators from '../components/sections/Differentiators';
import CtaBand from '../components/sections/CtaBand';
import Reveal from '../components/ui/Reveal';
import { FolkBand, FolkStar } from '../components/ui/FolkPattern';

const introCards = [
  { title: 'Началото', body: content.about.intro[0], badge: 'bg-sky' },
  { title: '30+ години занаят', body: content.about.intro[1], badge: 'bg-sun' },
  { title: 'Нашата философия', body: content.about.intro[2], badge: 'bg-meadow' },
  { title: 'Гордостта ни', body: content.about.intro[3], badge: 'bg-coral' },
];

const timelineSteps = [
  { title: 'Първите стъпки', body: content.about.story[0] },
  { title: 'Всичко на ръка', body: content.about.story[1] },
  { title: 'Стъпка по стъпка', body: content.about.story[2] },
  { title: 'Днес', body: content.about.story[3] },
];

function Quote({ children }) {
  return (
    <figure className="max-w-2xl mx-auto mt-16 text-center">
      <FolkStar className="w-6 h-6 mx-auto mb-5" />
      <blockquote className="font-serif italic text-xl md:text-2xl text-ink leading-snug">
        „{children}“
      </blockquote>
    </figure>
  );
}

export default function About() {
  const [photo1, photo2] = content.about.photos;

  return (
    <>
      <PageHeader
        eyebrow="За нас"
        title={
          <>
            Тридесет години едно <span className="underline-squiggle">семейно</span> начинание
          </>
        }
        lead="Мандрата отваря през 1994 г. в село Люляково и оттогава е в едни и същи ръце. Ето как започна и докъде стигна."
      />

      <section className="section-container !pt-14">
        <dl className="flex flex-wrap gap-4 mb-14">
          {content.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-paper border-2 border-ink/10 rounded-2xl px-6 py-4 shadow-[0_4px_0_0_rgba(43,26,18,0.08)]"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-serif font-bold text-maroon-dark">{stat.value}</dd>
              <dd className="text-xs text-ink-muted uppercase tracking-wide mt-1">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {introCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 90} className="h-full">
                <div className="h-full bg-paper border-2 border-ink/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-[0_16px_32px_-16px_rgba(43,26,18,0.4)]">
                  <span className={`block h-2 ${card.badge}`} aria-hidden="true" />
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-ink text-base mb-2">{card.title}</h3>
                    <p className="text-ink-muted text-sm leading-relaxed">{card.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="photo-frame aspect-[4/5] rotate-1.5">
            <img src={photo1.src} alt={photo1.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        <Quote>{content.about.intro[4]}</Quote>
      </section>

      <section className="relative texture-linen">
        <FolkBand height={16} className="absolute top-0 left-0 w-full" />
        <FolkBand height={16} className="absolute bottom-0 left-0 w-full" />

        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="photo-frame aspect-[4/5] -rotate-1.5 md:order-2">
              <img src={photo2.src} alt={photo2.alt} className="w-full h-full object-cover" />
            </div>

            <div className="md:order-1">
              <p className="eyebrow mb-6">Как стигнахме дотук</p>
              <ol className="flex flex-col">
                {timelineSteps.map((step, i) => {
                  const isLast = i === timelineSteps.length - 1;
                  return (
                    <li key={step.title} className="flex gap-5">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <span className="flex items-center justify-center w-11 h-11 rounded-full bg-maroon text-cream font-serif font-bold shadow-[0_4px_0_0_#7A1613]">
                          {i + 1}
                        </span>
                        {!isLast && (
                          <span className="w-0.5 flex-1 bg-maroon/25 my-2" aria-hidden="true" />
                        )}
                      </div>
                      <div className={isLast ? 'pb-1' : 'pb-8'}>
                        <h3 className="font-serif font-bold text-ink text-lg mb-1.5">{step.title}</h3>
                        <p className="text-ink-muted leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <Quote>{content.about.story[4]}</Quote>
        </div>
      </section>

      <Differentiators />
      <CtaBand />
    </>
  );
}
