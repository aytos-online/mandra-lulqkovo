// Freely-licensed Unsplash photos standing in until real product/store photography
// is supplied. Each entry keeps the photographer credit so the UI can show the
// same "Photo by X on Unsplash" chip the mockup uses to flag it as a placeholder.
const unsplash = (id, width = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=75&auto=format&fit=crop`;

export const placeholderImages = {
  hero: { url: unsplash('1775211818315-d59f6dbc3979', 1400), credit: 'Annie Spratt' },
  cheeseBoard1: { url: unsplash('1677332698305-4275bc361bec'), credit: 'Markus Spiske' },
  cheeseBoard2: { url: unsplash('1695606452973-cb5d2dc42129'), credit: 'Daniel' },
  cheeseFruitBoard: { url: unsplash('1768140210087-4059e0b9efc7'), credit: 'GK3000' },
  yogurt: { url: unsplash('1571212515416-fef01fc43637'), credit: 'Micheile Henderson' },
  creamyBowl: { url: unsplash('1633893215271-f7e1fca081ad'), credit: 'Jana Ohajdova' },
  freshMilk: { url: unsplash('1639151082235-406d8eb262b9'), credit: 'Mary Skrynnikova' },
  butter: { url: unsplash('1719148162837-63d2f256231f'), credit: 'Marine Le Gac' },
  marketStall: { url: unsplash('1782312386589-3a68b20a9ea2', 1000), credit: 'Anna Krylova' },
  cheeseMarket: { url: unsplash('1752401984776-edc407a13e1e'), credit: 'Luba Glazunova' },
};
