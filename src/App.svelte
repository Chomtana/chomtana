<script lang="ts">
  import Hero from './lib/Hero.svelte';
  import Section from './lib/Section.svelte';
  import PRList from './lib/PRList.svelte';
  import EntryList from './lib/EntryList.svelte';
  import { pullRequests, hackathons, audits, opGrants, profile } from './lib/data';
</script>

<main>
  <Hero />

  <Section
    id="contributions"
    title="Open Source Contributions"
    subtitle="Merged pull requests across the ecosystem."
  >
    <PRList items={pullRequests} />
  </Section>

  <Section
    id="hackathons"
    title="Hackathons"
    subtitle="Projects shipped under a deadline."
  >
    <EntryList items={hackathons} />
  </Section>

  <Section
    id="audits"
    title="Code4rena Audits"
    subtitle="Findings submitted in public audit contests."
  >
    <EntryList items={audits} />
  </Section>

  <Section
    id="op-grants"
    title="OP Grants"
    subtitle="Optimism-funded work for the Superchain ecosystem."
  >
    <EntryList items={opGrants} />
  </Section>

  <footer>
    <span>© {new Date().getFullYear()} {profile.name}</span>
  </footer>
</main>

<style>
  main {
    max-width: 1120px;
    margin: 0 auto;
  }
  footer {
    text-align: center;
    padding: 40px 24px 56px;
    border-top: 1px solid var(--border);
    color: var(--text);
    font-size: 13px;
  }
</style>
