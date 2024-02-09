const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata 
const namePrefix = "n00bs";
const description =
  "n00bs bring the iconic heroes and lore from ReBoot Worlds into diversely curated, pixelated PFPs.";

const baseUri = "onlyusethisforethereum";

const solanaMetadata = {
  symbol: "n00b",
  seller_fee_basis_points: 600, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://rebootworlds.com/",
  creators: [
    {
      address: "4wFD3TewF28RjZNpVk6T1pXWufLpTUMnAJN2ZXwKC8uf",
      share: 100,
    },
  ],
};

// layer order matters, first layer is in the back, last later is in the front (on "top")
const layerConfigurations = [
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Sky" },
      { name: "Background" },
      { name: "Species" },
      { name: "Expression" },
      { name: "Clothing" },
      { name: "Head" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1024,
  height: 1024,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
