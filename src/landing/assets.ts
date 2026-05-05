/** Raster URLs from Builder.io Figma export (TEMP assets may expire). */
export const img = {
  heroBg:
    'https://api.builder.io/api/v1/image/assets/TEMP/9d7465de77d5fbf82491b33b4cc138331cdb6397?width=1920',
  logoFooter:
    'https://api.builder.io/api/v1/image/assets/TEMP/2cf72a87721fd548d4acb2da16ac93da82020a5b?width=360',
  whyChoose:
    'https://api.builder.io/api/v1/image/assets/TEMP/9d04574f99f0e58b3270fb635e139daeaaee27c0?width=1920',
  reviewCharacter:
    'https://api.builder.io/api/v1/image/assets/TEMP/775d710aea090057430218b45e828138ec70ae96?width=900',
  avatar:
    'https://api.builder.io/api/v1/image/assets/TEMP/67d9d13be819d264bc68ea42cf0a0ffd900964aa?width=128',
  stepsBg:
    'https://api.builder.io/api/v1/image/assets/TEMP/849c676dc0dee7860eb52b156cb4ffd9330c47cc?width=1920',
  highlightMain:
    'https://api.builder.io/api/v1/image/assets/TEMP/268044cc016af1972c1f8315c77cb9de43e0d7a4?width=800',
  highlightLeft:
    'https://api.builder.io/api/v1/image/assets/TEMP/2d1a0f98c24b6f53905ee984b54d8af11dea0277?width=288',
  highlightRight:
    'https://api.builder.io/api/v1/image/assets/TEMP/614c6319ecb6ad9f046a1e503bdaad8420eb50c8?width=286',
  faq:
    'https://api.builder.io/api/v1/image/assets/TEMP/9ee5c2c411d67ce1dab1282c194833a86c7473fe?width=1920',
  blog:
    'https://api.builder.io/api/v1/image/assets/TEMP/95ca56a9f60157ac2056b3b15c775a58bf9746f9?width=1920',
} as const

export type GameTile = {
  backing: string
  logo: string
  alt: string
}

export const gameTiles: GameTile[] = [
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/cfce7c3abf46356eb13b4a8cee9cc23a5d1e0a1d?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/f3e80b2c81a460447f1660044f1cda261422042a?width=240',
    alt: 'Apex Legends',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/fc5470371b96959a0b4cb495efa4b836a1d9fb9a?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/f911e1497677ddcf0ca093e8dd7b7225f1af2499?width=346',
    alt: 'Call of Duty: Black Ops Cold War',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/05b7afc932f792a0c77fa26b364cdbd89a88447a?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/f5f1f68f0d836a3f7d06d192b1419ef49c0ff2c5?width=346',
    alt: 'Call of Duty: Modern Warfare',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/30b0a8b7b4d89793b4686bc7fad7ea65b5cf2030?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/e897e99c0b8944987f89b8f0e63e236a154fa9a0?width=384',
    alt: 'Destiny 2',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/2f3b4785515d2811fad61183147c81984a0115af?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/dc6df5426cd8447ccb41dbcd108c0914114867b2?width=460',
    alt: 'Dota 2',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/946a918d59e37b2ac056b7a8c933d9122403b63d?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/f07f061da7f62434d1742df859c003ea67b49313?width=384',
    alt: 'Escape from Tarkov',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/6aec5a5455f6e5ac1869f0c9d2a4ee8f727ad2d3?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/fd40e4ef137a32b975c488e43de5027c4e83b5c6?width=384',
    alt: 'EverQuest',
  },
  {
    backing:
      'https://api.builder.io/api/v1/image/assets/TEMP/53c0163dc5eed4c24d8b43a161e6617985cc53fb?width=604',
    logo: 'https://api.builder.io/api/v1/image/assets/TEMP/607cac4506dc7c0b66d3429772e1b65ac17f149d?width=460',
    alt: 'FIFA',
  },
]
