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
  {
    title: "ETHGlobal Bangkok — Winner, Best DeFi UX",
    description:
      "Built a gas-sponsored, intent-based DEX aggregator that routes across L2s using EIP-7683 cross-chain intents.",
    link: "https://ethglobal.com/showcase/",
    tag: "ETHGlobal",
    date: "2025-11",
    winner: true,
  },
  {
    title: "ETHOnline 2025 — Finalist",
    description:
      "Account-abstraction wallet with session keys for mobile gaming, paymaster-powered onboarding, no seed phrase.",
    link: "https://ethglobal.com/events/ethonline2025",
    tag: "ETHGlobal",
    date: "2025-08",
  },
  {
    title: "Chainlink BlockMagic — Top 10",
    description:
      "On-chain weather derivatives using Chainlink Functions + Data Streams for real-time parametric payouts to farmers.",
    link: "https://chain.link/hackathon",
    tag: "Chainlink",
    date: "2025-06",
  },
  {
    title: "Devcon SEA Hackathon — Honorable Mention",
    description:
      "Privacy-preserving ZK attestation layer for KYC reuse across DeFi protocols, based on Semaphore + EAS.",
    link: "https://devcon.org/",
    tag: "Devcon",
    date: "2024-11",
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
    description:
      "Find hidden founders, grads and elites on Github by mining open-source signal across millions of repositories.",
    link: "https://topdev.to",
    tag: "Active",
    date: "2025-09",
    winner: true,
    achievements: [
      "Y Combinator W26 interview",
      "Featured on Product Hunt",
      "1,200+ recruiter signups",
    ],
  },
  {
    title: "ChainTrade Aggregator",
    description:
      "Cross-chain DEX aggregator with gas-sponsored intent routing across L2s, targeting on-ramps that didn't want to manage bridging UX.",
    link: "https://github.com/Chomtana",
    tag: "Sunset",
    date: "2024-06",
    achievements: ["$120k pre-seed raised", "Polygon Grant recipient"],
    postmortem:
      "Couldn't out-execute LI.FI and Across on liquidity coverage; B2B partners chose incumbents with insurance and SLAs we didn't have.",
    takeaways:
      "In aggregation, depth wins over UX polish. Don't compete on the same axis as a 50-engineer incumbent — pick a wedge they ignore.",
  },
  {
    title: "PassportDAO",
    description:
      "Reusable on-chain KYC attestations using EAS + Semaphore so users could prove KYC once and reuse across DeFi protocols.",
    link: "https://github.com/Chomtana",
    tag: "Sunset",
    date: "2023-11",
    achievements: ["ETHGlobal Istanbul finalist", "Gitcoin GR19 funded"],
    postmortem:
      "Regulatory ambiguity scared away every DeFi integration partner; demand from users existed but B2B side wouldn't sign.",
    takeaways:
      "Selling compliance primitives requires the customer to be the regulated entity, not the user. Talk to GCs before writing a line of code.",
  },
];
