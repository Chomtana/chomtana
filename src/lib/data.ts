export type Profile = {
  name: string;
  headlinePrefix: string;
  product: { name: string; url: string };
  email: string;
  avatar: string;
  tagline: string;
  github: string;
  linkedin: string;
  x: string;
};

export type ContributionInput = {
  title: string;
  url: string;
  date: string;
  state?: "merged" | "closed" | "open";
};

export type Contribution = ContributionInput & {
  kind: "pr" | "issue";
  repo: string;
  number: number;
};

function parseContribution(input: ContributionInput): Contribution {
  const m = input.url.match(
    /github\.com\/([^/]+\/[^/]+)\/(pull|issues)\/(\d+)/,
  );
  if (!m) throw new Error(`Invalid GitHub contribution URL: ${input.url}`);
  return {
    ...input,
    repo: m[1],
    kind: m[2] === "pull" ? "pr" : "issue",
    number: Number(m[3]),
  };
}

export type Entry = {
  title: string;
  description: string;
  link: string;
  tag?: string;
  date?: string;
  winner?: boolean;
};

export type Startup = Entry & {
  postmortem?: string;
  takeaways?: string;
  achievements?: string[];
};

export const profile: Profile = {
  name: "Chomtana",
  headlinePrefix: "Building",
  product: { name: "TopDev.to", url: "https://topdev.to" },
  email: "Chomtana001@gmail.com",
  avatar: "/myself-small.jpeg",
  tagline: "Find hidden founders, grads and elites on Github.",
  github: "https://github.com/Chomtana",
  linkedin: "https://www.linkedin.com/in/chomtana",
  x: "https://x.com/Chomtana",
};

export const seo = {
  title: `${profile.name} - Resume & Portfolio`,
  description: `${profile.headlinePrefix} ${profile.product.name} - ${profile.tagline}`,
  url: "https://chom.dev",
  favicon: "/myself-small-circle.png",
  image: profile.avatar,
  siteName: `${profile.name} - Resume & Portfolio`,
  twitterHandle: "@Chomtana",
  themeColor: "#0a0a0a",
  locale: "en_US",
} as const;

const contributionsRaw: ContributionInput[] = [
  {
    state: "closed",
    title: "No known Etherscan API URL for chain 143",
    url: "https://github.com/foundry-rs/foundry/issues/13028",
    date: "2026-01-09",
  },
  {
    state: "closed",
    title:
      "Test fail with Invalid data returned on OP mainnet fork, hardhat-ignition and hardhat-viem",
    url: "https://github.com/sc-forks/solidity-coverage/issues/891",
    date: "2024-08-23",
  },
  {
    state: "merged",
    title:
      "chore: upgrade ensUniversalResolver on mainnet, sepolia and holesky",
    url: "https://github.com/wevm/viem/pull/1905",
    date: "2024-03-05",
  },
  {
    state: "closed",
    title: "reth on base mainnet not working with op-node v1.5.0",
    url: "https://github.com/paradigmxyz/reth/issues/6388",
    date: "2024-02-04",
  },
  {
    state: "merged",
    title: "feat: base sepolia support",
    url: "https://github.com/paradigmxyz/reth/pull/5697",
    date: "2023-12-05",
  },
  {
    state: "merged",
    title: "restart: unless-stopped",
    url: "https://github.com/Layr-Labs/eigenda-operator-setup/pull/15",
    date: "2023-11-17",
  },
  {
    state: "closed",
    title:
      "Unexpected Server Error on offchain attestation publish in optimism-goerli-bedrock",
    url: "https://github.com/ethereum-attestation-service/eas-contracts/issues/112",
    date: "2023-11-12",
  },
  {
    state: "merged",
    title: "Add contract deployer addresses on Optimism",
    url: "https://github.com/duneanalytics/spellbook/pull/4557",
    date: "2023-10-07",
  },
  {
    state: "closed",
    title: "Unknown gnosis safe error in the recent deployment code",
    url: "https://github.com/ethereum-optimism/optimism/issues/7484",
    date: "2023-09-30",
  },
  {
    state: "merged",
    title: "fix: add protocol version to getting-started.json",
    url: "https://github.com/ethereum-optimism/optimism/pull/7449",
    date: "2023-09-28",
  },
  {
    state: "closed",
    title: "Rabby wallet support",
    url: "https://github.com/voteagora/agora/issues/7",
    date: "2023-09-28",
  },
  {
    state: "closed",
    title: 'Offchain attestation "Attestation failed resolver check"',
    url: "https://github.com/ethereum-attestation-service/eas-contracts/issues/76",
    date: "2023-08-21",
  },
  {
    state: "merged",
    title: 'Fix duplicated datadir in "Running an OP Mainnet or testnet node"',
    url: "https://github.com/ethereum-optimism/community-hub/pull/856",
    date: "2023-07-31",
  },
  {
    state: "merged",
    title: "Fix yubihsm udev rules GROUP",
    url: "https://github.com/iqlusioninc/tmkms/pull/728",
    date: "2023-05-10",
  },
  {
    state: "closed",
    title:
      'yarn: #5829 causes "global dir" and "global: GTAGS not found." error',
    url: "https://github.com/ansible-collections/community.general/issues/6132",
    date: "2023-03-03",
  },
  {
    state: "merged",
    title: "Optimize gas for _getFraction in AmountDeriver",
    url: "https://github.com/ProjectOpenSea/seaport/pull/384",
    date: "2022-06-07",
  },
];

export const contributions: Contribution[] =
  contributionsRaw.map(parseContribution);

export const hackathons: Entry[] = [
  // {
  //   title: "Chainlink Fall Hackathon 2021",
  //   description:
  //     "Built SLP Manager, a smart contract-based DApp that automates real-time SLP claims for Axie Infinity scholars, eliminating manual distribution delays and management overhead.",
  //   link: "https://devpost.com/software/naga-product-tbd",
  //   tag: "On the Rise Winners",
  //   date: "2021-11",
  //   winner: true,
  // },
  {
    title: "LINE Hack 2025 - Examer",
    description:
      "AI-Powered TCAS Past Exam Practice App. Powered by LINE Mini-App.",
    link: "https://web.facebook.com/share/p/18meUN1fcP/",
    tag: "2nd Place",
    date: "2025-12",
    winner: true,
  },
  {
    title: "ETHGlobal Bangkok 2024 - Proto Message Kit",
    description:
      "Mina Protokit + XMTP MessageKit: A framework for building smart agent on Mina.",
    link: "https://ethglobal.com/showcase/proto-message-kit-74ms8",
    tag: "4th Place - Mina Protokit",
    date: "2024-11",
    winner: false,
  },
  {
    title: "Based SEA - Coinbase Smart Passport",
    description:
      "Connect Trusted Identities to Coinbase Smart Wallet and pay with Smart Wallet or Credit Card via Stripe.",
    link: "https://devfolio.co/projects/coinbase-smart-passport-a2db",
    tag: "Winner",
    date: "2024-10",
    winner: true,
  },
  {
    title: "ETHOnline 2024 - 2048 ZKNoid",
    description:
      "A ZK-powered 2048 game written in Protokit with the ZKNoid SDK for Mina.",
    link: "https://ethglobal.com/showcase/2048-zknoid-f6sir",
    tag: "2nd Place - Mina zkGaming",
    date: "2024-08",
    winner: true,
  },
  {
    title: "Aptos Event & ENS Gateway",
    description:
      "Gateway for onboarding people to crypto and connecting ENS domains to Aptos.",
    link: "https://app.akindo.io/communities/27DaQ3DEpUMXG011W/products/peAr4oG4DS0jx7pm",
    tag: "2nd Place",
    date: "2024-06",
    winner: true,
  },
  {
    title: "Move Hackathon by WebX - Sui Axelar USDC Bridge",
    description: "An application for bridging USDC to SUI through Axelar.",
    link: "https://app.akindo.io/communities/63Lx7jnO1uNngpzR/products/Drg7LozggTg6AGmp",
    tag: "2nd Place",
    date: "2023-07",
    winner: true,
  },
  {
    title: "ENS Small Grants - Ecosystem Round 9",
    description: "Add custom UniversalResolver support to Wagmi.",
    link: "https://ensgrants.xyz/rounds/29/proposals/708",
    tag: "4th Place",
    date: "2023-06",
    winner: false,
  },
  {
    title: "Chainlink Fall Hackathon 2021",
    description:
      "Built SLP Manager, a smart contract-based DApp that automates real-time SLP claims for Axie Infinity scholars, eliminating manual distribution delays and management overhead.",
    link: "https://devpost.com/software/naga-product-tbd",
    tag: "On the Rise Winner",
    date: "2021-11",
    winner: true,
  },
  {
    title: "SCB10X Bangkok Blockathon",
    description:
      "Built Estate-Onblock, an NFT platform where users stake country-specific tokens to farm digital landmarks and showcase their collections in virtual galleries.",
    link: "https://techsauce.co/pr-news/scb-10x-bangkok-blockathon-2021-killswitch",
    tag: "2nd Runner Up",
    date: "2021-03",
    winner: true,
  },
];

export const audits: Entry[] = [
  {
    title: "Axelar Network v2 contest",
    description:
      "XC20Wrapper may lost received token forever if LocalAsset(xc20).mint is reverted indefinitely.",
    link: "https://code4rena.com/audits/2022-07-axelar-network-v2-contest",
    tag: "1st Place",
    date: "2022-07",
    winner: true,
  },
  {
    title: "Axelar Network contest",
    description:
      "Cross-chain smart contract calls can revert but source chain tokens remain burnt and are not refunded.",
    link: "https://code4rena.com/audits/2022-04-axelar-network-contest",
    tag: "2nd Place",
    date: "2022-04",
    winner: true,
  },
  {
    title: "Nouns Builder contest",
    description:
      "Precision is not enough for proposalThreshold and quorum. Collections with at least 20000 NFTs in total supply may have some trouble.",
    link: "https://code4rena.com/audits/2022-09-nouns-builder-contest",
    tag: "3rd Place",
    date: "2022-09",
    winner: false,
  },
];

export const startups: Startup[] = [
  {
    title: "TopDev.to",
    description: "Find hidden founders, grads and elites on Github",
    link: "https://topdev.to",
    tag: "Active",
    date: "2026-03",
    winner: true,
    achievements: [],
  },
  {
    title: "Turbo ZK Gaming",
    description: "Real time peer to peer ZK gaming framework",
    link: "https://turbo.ing",
    tag: "Sunset",
    date: "2024-10",
    achievements: [
      "a16z CSX Spring 2025 Video Request",
      "Alliance MVP2 Hackathon",
    ],
    postmortem:
      "Impressive deep tech, but zero market demand. Game devs advertise 'fully on-chain' but still run core gameplay on centralized servers.",
    takeaways:
      "Validate demand before building by using a 'painted door test' via warm DMs, cold emails, and ads.",
  },
  {
    title: "Hokum L3 OP Stack Gaming Chain",
    description:
      "The first (never hitting the news) gaming-focused OP Stack L3 on Base used Celestia DA",
    link: "https://x.com/TweetByGerald/status/1738594978073579970",
    tag: "Sunset",
    date: "2023-12",
    achievements: ["a16z SR003 1st Interview"],
    postmortem:
      "L2/L3 rollups and on-chain gaming hype faded fast. Market shifted to pure cash-burning and airdrops.",
    takeaways:
      "Avoid building on unsustainable hype. Even if we start early, the trend may fade before we finish building.",
  },
  {
    title: "AxelarSea",
    description:
      "The first cross-chain NFT Bridge & Marketplace on Axelar. Hit 100k+ users in weeks, but they were mostly airdrop hunters.",
    link: "https://x.com/axelarsea",
    tag: "Sunset",
    date: "2022-04",
    achievements: ["Partnered with Axelar", "Went Viral"],
    postmortem:
      "Built at the NFT peak, right before the Luna collapse and the NFT market crash (and never recovered).",
    takeaways:
      "Avoid the peak hype. Get in early and build fast, and don't mistake airdrop hunters for real users.",
  },
];
