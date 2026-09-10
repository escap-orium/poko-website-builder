const CONTENT_DIR = process.env.CONTENT_DIR || "_content";
const ELEVENTY_ROOT = process.env.ELEVENTY_ROOT;

const {
  spreadPageSetup,
  //   reviews,
  creativeWorks,
  imageFields,
  // pages,
  // events,
  // articles,
  // commonCollectionFields,
  // statusField,
  // bodyMarkdownField,
  // generatePageField,
} = await import(
  `${ELEVENTY_ROOT}/src/config-11ty/plugins/cms-config/config.js`
);

// Insert before the "body" (content) field
const pos = creativeWorks.fields.findIndex((f) => f.name === "body");

const addedPortfolioFields = [
  {
    name: "client",
    label: "Client / Commissioner",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "projectDate",
    label: "Project Date",
    widget: "string",
    required: false,
    i18n: true,
  },
  {
    name: "location",
    label: "Location",
    widget: "string",
    required: false,
    i18n: true,
  },
  {
    name: "experienceType",
    label: "Experience Type",
    widget: "string",
    required: false,
    i18n: true,
  },
  {
    name: "playerCount",
    label: "Player Count",
    widget: "string",
    required: false,
    i18n: true,
  },
  {
    name: "ageRecommendationMin",
    label: "Minimum Age Recommendation",
    widget: "number",
    value_type: "int",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "duration",
    label: "Duration (minutes)",
    widget: "number",
    value_type: "int",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "teamCount",
    label: "Number of Teams",
    widget: "number",
    value_type: "int",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "availability",
    label: "Availability",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "pitch",
    label: "Pitch",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "mechanics",
    label: "Mechanics / How It Works",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "credits",
    label: "Credits",
    widget: "list",
    required: false,
    collapsed: true,
    i18n: true,
    allow_reorder: true,
    field: {
      name: "credit",
      label: "Credit",
      widget: "richtext",
      required: false,
      i18n: true,
    },
  },
  {
    name: "more",
    label: "More",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "makingOf",
    label: "Making Of",
    widget: "richtext",
    required: false,
    i18n: true,
  },
  {
    name: "gallery",
    label: "Gallery",
    widget: "list",
    required: false,
    collapsed: true,
    i18n: true,
    allow_reorder: true,
    fields: imageFields,
  },
];

const portfolioFields = [
  ...creativeWorks.fields.slice(0, pos),
  ...addedPortfolioFields,
  ...creativeWorks.fields.slice(pos),
];

export const collections = [
  {
    ...creativeWorks,
    ...spreadPageSetup("portfolio"),
    label: "Portfolio",
    label_singular: "Portfolio Item",
    // icon: "theater_comedy",
    // folder: `${CONTENT_DIR}`,
    // path: "pages/{{slug}}",
    // media_folder: `/${CONTENT_DIR}/_images`,
    media_folder: `/${CONTENT_DIR}/_images/portfolio/{{slug}}`,
    public_folder: "/_images/portfolio/{{slug}}",
    fields: portfolioFields,
  },
];

export const singletons = [];
