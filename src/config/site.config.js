const address = "с. Люляково, ул. Стара планина 6";

export const siteConfig = {
  business: {
    name: "Мандра Люляково",
    legalName: "Ади Милк ЕООД",
    tagline: "От 1994 г.",
    village: "с. Люляково",
    region: "Стара планина",
    phone: "+359 00 000 000",
    email: "adi_milk@abv.bg",
    address,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  },
  nav: [
    { label: "Начало", to: "/" },
    { label: "Продукти", to: "/products" },
    { label: "За нас", to: "/about" },
    { label: "Магазини", to: "/stores" },
    { label: "Контакти", to: "/contact" },
  ],
};
