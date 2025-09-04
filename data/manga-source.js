const products = [
  {
    image: "../imgs/Yusuke-1.jpg",
    name: "Yusuke",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/Yusuke-3.jpg",
    name: "Yusuke-3",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/Yusuke.jpg",
    name: "Yusuke",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Emiya.jpg",
    name: "Emiya",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Genkai.jpg",
    name: "Genkai",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Gilgamesh.jpeg",
    name: "Gilgamesh",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Gohan.jpg",
    name: "Gohan",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/GonKillua-1.jpg",
    name: "GonKillua-1",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/GonKillua.jpg",
    name: "GonKillua",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Hiei.jpg",
    name: "Hiei",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Hiei-2.jpg",
    name: "Hiei-2",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Hiei-3.jpg",
    name: "Hiei-3",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Hiei-4.jpg",
    name: "Hiei",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Itsuki.jpg",
    name: "Itsuki",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Kakashi.jpg",
    name: "Kakashi",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Killua.jpg",
    name: "Killua",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Koenma.jpg",
    name: "Koenma",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Kuruma.jpg",
    name: "Kuruma",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/SaberEmiya.avif",
    name: "SaberEmiya",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Shigure.jpg",
    name: "Shigure",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },

  {
    image: "../imgs/Shinobu.jpg",
    name: "Shinobu",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/sss.jpg",
    name: "sss",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/Trunks.jpg",
    name: "Trunks",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
  {
    image: "../imgs/Yuji.jpg",
    name: "Yuji",
    rating: { stars: 4.5, count: 87 },
    priceCents: 1090,
  },
];

products.forEach((product) => {
  product.id = crypto.randomUUID();
});

console.log(products);
