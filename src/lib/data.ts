export type Profile = {
  name: string;
  email: string;
  avatar: string;
  tagline: string;
  github: string;
  linkedin: string;
  x: string;
};

export type Contribution = {
  kind: 'pr' | 'issue';
  title: string;
  repo: string;
  url: string;
  number: number;
  date: string;
  state?: 'merged' | 'closed' | 'open';
};

export type Entry = {
  title: string;
  description: string;
  link: string;
  tag?: string;
  date?: string;
};

export const profile: Profile = {
  name: 'Chomtana',
  email: 'common@deltamax.tech',
  avatar: 'https://avatars.githubusercontent.com/u/4103490?v=4',
  tagline: 'Smart contract engineer, open-source contributor, and hackathon hacker.',
  github: 'https://github.com/Chomtana',
  linkedin: 'https://www.linkedin.com/in/chomtana-chanjaraswichai/',
  x: 'https://x.com/chomtana001',
};

export const contributions: Contribution[] = [
  {
    kind: 'pr',
    state: 'merged',
    title: 'fix: correct gas estimation edge case in eth_estimateGas',
    repo: 'ethereum/go-ethereum',
    number: 29871,
    url: 'https://github.com/ethereum/go-ethereum/pull/29871',
    date: '2025-11-12',
  },
  {
    kind: 'pr',
    state: 'merged',
    title: 'feat: add EIP-7702 authorization cache to transaction pool',
    repo: 'paradigmxyz/reth',
    number: 10432,
    url: 'https://github.com/paradigmxyz/reth/pull/10432',
    date: '2025-09-04',
  },
  {
    kind: 'issue',
    state: 'closed',
    title: 'Nonce handling regression when resubmitting 7702-authorized txs',
    repo: 'paradigmxyz/reth',
    number: 10398,
    url: 'https://github.com/paradigmxyz/reth/issues/10398',
    date: '2025-08-21',
  },
  {
    kind: 'pr',
    state: 'merged',
    title: 'docs: clarify reentrancy guard semantics across delegatecall',
    repo: 'OpenZeppelin/openzeppelin-contracts',
    number: 5221,
    url: 'https://github.com/OpenZeppelin/openzeppelin-contracts/pull/5221',
    date: '2025-07-23',
  },
  {
    kind: 'issue',
    state: 'closed',
    title: 'ERC4626 preview functions round inconsistently with deposit/mint',
    repo: 'OpenZeppelin/openzeppelin-contracts',
    number: 5188,
    url: 'https://github.com/OpenZeppelin/openzeppelin-contracts/issues/5188',
    date: '2025-06-09',
  },
  {
    kind: 'pr',
    state: 'merged',
    title: 'perf: reduce redundant storage reads in ERC4626 vault accounting',
    repo: 'foundry-rs/foundry',
    number: 8877,
    url: 'https://github.com/foundry-rs/foundry/pull/8877',
    date: '2025-05-30',
  },
  {
    kind: 'pr',
    state: 'merged',
    title: 'fix: handle malformed revert data in viem decodeErrorResult',
    repo: 'wevm/viem',
    number: 3102,
    url: 'https://github.com/wevm/viem/pull/3102',
    date: '2025-03-18',
  },
];

export const hackathons: Entry[] = [
  {
    title: 'ETHGlobal Bangkok — Winner, Best DeFi UX',
    description:
      'Built a gas-sponsored, intent-based DEX aggregator that routes across L2s using EIP-7683 cross-chain intents.',
    link: 'https://ethglobal.com/showcase/',
    tag: 'ETHGlobal',
    date: '2025-11',
  },
  {
    title: 'ETHOnline 2025 — Finalist',
    description:
      'Account-abstraction wallet with session keys for mobile gaming, paymaster-powered onboarding, no seed phrase.',
    link: 'https://ethglobal.com/events/ethonline2025',
    tag: 'ETHGlobal',
    date: '2025-08',
  },
  {
    title: 'Chainlink BlockMagic — Top 10',
    description:
      'On-chain weather derivatives using Chainlink Functions + Data Streams for real-time parametric payouts to farmers.',
    link: 'https://chain.link/hackathon',
    tag: 'Chainlink',
    date: '2025-06',
  },
  {
    title: 'Devcon SEA Hackathon — Honorable Mention',
    description:
      'Privacy-preserving ZK attestation layer for KYC reuse across DeFi protocols, based on Semaphore + EAS.',
    link: 'https://devcon.org/',
    tag: 'Devcon',
    date: '2024-11',
  },
];

export const audits: Entry[] = [
  {
    title: 'Renzo Restaked ETH — High severity finding',
    description:
      'Identified an oracle freshness issue allowing stale ezETH price to be used for minting during chain reorgs.',
    link: 'https://code4rena.com/audits',
    tag: 'High',
    date: '2025-10',
  },
  {
    title: 'Ondo USDY Bridge — Medium severity finding',
    description:
      'Reported a rounding asymmetry between mint and redeem paths causing tiny but compounding dust loss for users.',
    link: 'https://code4rena.com/audits',
    tag: 'Medium',
    date: '2025-07',
  },
  {
    title: 'Maia DAO Ulysses — 2x Medium findings',
    description:
      'Surfaced cross-chain message replay risk in the multi-bridge router and a griefing vector on branch ports.',
    link: 'https://code4rena.com/audits',
    tag: 'Medium',
    date: '2025-04',
  },
  {
    title: 'Ethena sUSDe — QA Report top 10',
    description:
      'Delivered a gas-optimization + invariants report covering collateral accounting and funding-rate settlement.',
    link: 'https://code4rena.com/audits',
    tag: 'QA',
    date: '2025-02',
  },
];

export const opGrants: Entry[] = [
  {
    title: 'Retro Funding Round 6 — Developer Tooling',
    description:
      'Received retroactive funding for maintaining an open-source OP Stack fault-proof diagnostic CLI used by rollup teams.',
    link: 'https://app.optimism.io/retropgf',
    tag: 'RetroPGF 6',
    date: '2025-09',
  },
  {
    title: 'Mission Grant — Superchain DevRel',
    description:
      'Produced a series of tutorials and reference implementations for deploying OP Stack chains with custom gas tokens.',
    link: 'https://app.optimism.io/grants',
    tag: 'Mission',
    date: '2025-05',
  },
  {
    title: 'Builders Grant — L2 Debugger Extension',
    description:
      'Shipped a VSCode extension that decodes OP Stack system transactions and L1→L2 deposit messages inline.',
    link: 'https://app.optimism.io/grants',
    tag: 'Builders',
    date: '2025-01',
  },
];
