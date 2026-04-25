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
    title: "Maia DAO Ulysses — 2x Medium findings",
    description:
      "Surfaced cross-chain message replay risk in the multi-bridge router and a griefing vector on branch ports.",
    link: "https://code4rena.com/audits",
    tag: "Medium",
    date: "2025-04",
  },
  {
    title: "Ethena sUSDe — QA Report top 10",
    description:
      "Delivered a gas-optimization + invariants report covering collateral accounting and funding-rate settlement.",
    link: "https://code4rena.com/audits",
    tag: "QA",
    date: "2025-02",
  },
];

export const opGrants: Entry[] = [
  {
    title: "Retro Funding Round 6 — Developer Tooling",
    description:
      "Received retroactive funding for maintaining an open-source OP Stack fault-proof diagnostic CLI used by rollup teams.",
    link: "https://app.optimism.io/retropgf",
    tag: "RetroPGF 6",
    date: "2025-09",
  },
  {
    title: "Mission Grant — Superchain DevRel",
    description:
      "Produced a series of tutorials and reference implementations for deploying OP Stack chains with custom gas tokens.",
    link: "https://app.optimism.io/grants",
    tag: "Mission",
    date: "2025-05",
  },
  {
    title: "Builders Grant — L2 Debugger Extension",
    description:
      "Shipped a VSCode extension that decodes OP Stack system transactions and L1→L2 deposit messages inline.",
    link: "https://app.optimism.io/grants",
    tag: "Builders",
    date: "2025-01",
  },
];
