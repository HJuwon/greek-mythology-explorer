
export type Artwork = {
  id: string;
  title: string;
  artist: string;
  year?: string;
  image: string;
  museum?: string;
  description?: string;
  eventId?: string;
};

export type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
};

export type StoryEvent = {
  id: string;
  number: number;
  title: string;
  description: string;
  characters: string[];
};

export type Myth = {
  id: string;
  title: string;
  category: "GODS" | "HEROES" | "STORIES";
  description?: string;
  featuredArtwork?: Artwork;
  artworks?: Artwork[];
  characters?: Character[];
  events?: StoryEvent[];
};

export const myths: Myth[] = [
  {
    id: "cronus-zeus",
    title: "Cronus & Zeus",
    category: "GODS",
  },
  {
    id: "persephone",
    title: "The Abduction of Persephone",
    category: "GODS",
  },
  {
    id: "prometheus",
    title: "Prometheus & Humanity",
    category: "GODS",
  },
  {
    id: "apollo-daphne",
    title: "Apollo & Daphne",
    category: "GODS",
    description:
      "Apollo falls in love with Daphne, but she refuses his pursuit. In desperation, Daphne asks her father to transform her, becoming a laurel tree.",

    characters: [
      {
        id: "apollo",
        name: "Apollo",
        role: "God of the Sun, Music and Prophecy",
        description:
          "Apollo is one of the major Olympian gods. After being struck by Eros' arrow, he becomes consumed by his desire for Daphne.",
      },
      {
        id: "daphne",
        name: "Daphne",
        role: "Nymph",
        description:
          "Daphne is a nymph who rejects Apollo's advances and chooses to preserve her independence. She is eventually transformed into a laurel tree.",
      },
      {
        id: "eros",
        name: "Eros",
        role: "God of Love",
        description:
          "Eros causes Apollo to fall in love with Daphne after Apollo mocks his power as an archer.",
      },
      {
        id: "penaeus",
        name: "Peneus",
        role: "River God",
        description:
          "Peneus is Daphne's father. When Daphne desperately asks for help escaping Apollo, he transforms her into a laurel tree.",
      },
    ],

    events: [
      {
        id: "apollo-mocks-eros",
        number: 1,
        title: "Apollo Mocks Eros",
        description:
          "Apollo encounters Eros carrying his bow and mocks him for using a weapon meant for a great warrior.",
        characters: ["apollo", "eros"],
      },
      {
        id: "eros-shoots-apollo",
        number: 2,
        title: "The Arrow of Love",
        description:
          "In revenge, Eros shoots Apollo with a golden arrow that creates irresistible love. Daphne is struck by a leaden arrow that causes her to reject love.",
        characters: ["apollo", "daphne", "eros"],
      },
      {
        id: "apollo-pursues-daphne",
        number: 3,
        title: "Apollo Pursues Daphne",
        description:
          "Apollo pursues Daphne while she desperately tries to escape his advances.",
        characters: ["apollo", "daphne"],
      },
      {
        id: "daphne-transforms",
        number: 4,
        title: "Daphne Becomes a Laurel",
        description:
          "As Apollo catches up with her, Daphne asks her father Peneus to save her. She is transformed into a laurel tree.",
        characters: ["apollo", "daphne", "penaeus"],
      },
      {
        id: "apollo-honors-laurel",
        number: 5,
        title: "Apollo Honors Daphne",
        description:
          "Apollo declares the laurel sacred and promises that its leaves will forever be associated with him.",
        characters: ["apollo", "daphne"],
      },
    ],

    featuredArtwork: {
      id: "apollo-daphne-featured",
      title: "Apollo and Daphne",
      artist: "Andrea Brustolon",
      image:
        "https://images.metmuseum.org/CRDImages/es/original/DP-14954-001.jpg",
      museum: "The Metropolitan Museum of Art",
    },

    artworks: [
      {
        id: "apollo-daphne-1",
        title: "Apollo and Daphne",
        artist: "Gian Lorenzo Bernini",
        year: "1622–1625",
        image: "/images/artworks/apollo-daphne-bernini.jpg",
        description:
          "The moment of Daphne's transformation is captured as Apollo reaches for her.",
        eventId: "daphne-transforms",
      },
      {
        id: "apollo-daphne-2",
        title: "Apollo and Daphne",
        artist: "Antonio del Pollaiuolo",
        year: "15th century",
        image: "/images/artworks/apollo-daphne-pollaiuolo.jpg",
        description:
          "A different interpretation of the myth, emphasizing movement and narrative.",
        eventId: "apollo-pursues-daphne",
      },
      {
        id: "apollo-daphne-3",
        title: "Apollo and Daphne",
        artist: "Theodore Chassériau",
        year: "1845",
        image: "/images/artworks/apollo-daphne-chasseriau.jpg",
        description:
          "A Romantic interpretation of the transformation and the pursuit.",
        eventId: "daphne-transforms",
      },
    ],
  },

  {
    id: "orpheus-eurydice",
    title: "Orpheus & Eurydice",
    category: "HEROES",
  },
  {
    id: "perseus-medusa",
    title: "Perseus & Medusa",
    category: "HEROES",
  },
  {
    id: "theseus-minotaur",
    title: "Theseus & the Minotaur",
    category: "HEROES",
  },
  {
    id: "icarus",
    title: "Daedalus & Icarus",
    category: "HEROES",
  },
  {
    id: "odysseus-polyphemus",
    title: "Odysseus & Polyphemus",
    category: "HEROES",
  },
  {
    id: "narcissus",
    title: "Narcissus & Echo",
    category: "STORIES",
  },
  {
    id: "midas",
    title: "King Midas",
    category: "STORIES",
  },
  {
    id: "cupid-psyche",
    title: "Cupid & Psyche",
    category: "STORIES",
  },
];

export const featuredMyth = myths.find(
  (myth) => myth.id === "apollo-daphne"
)!;

export const comparisonMyth = myths.find(
  (myth) => myth.id === "apollo-daphne"
)!;
