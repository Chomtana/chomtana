<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Section from './lib/Section.svelte';
  import PRList from './lib/PRList.svelte';
  import EntryList from './lib/EntryList.svelte';
  import { contributions, hackathons, audits, opGrants, profile } from './lib/data';
</script>

<Nav />

<main>
  <Hero />

  <Section
    id="contributions"
    index="01"
    title="Open source contributions"
    subtitle="Pull requests & issues"
  >
    <PRList items={contributions} />
  </Section>

  <Section
    id="hackathons"
    index="02"
    title="Hackathons"
    subtitle="Shipped under deadline"
  >
    <EntryList items={hackathons} />
  </Section>

  <Section
    id="audits"
    index="03"
    title="Code4rena audits"
    subtitle="Public contest findings"
  >
    <EntryList items={audits} />
  </Section>

  <Section
    id="op-grants"
    index="04"
    title="OP grants"
    subtitle="Superchain-funded work"
  >
    <EntryList items={opGrants} />
  </Section>

  <footer>
    <div class="wall">
      <span class="huge">{profile.name}.</span>
    </div>
    <div class="bottom">
      <span>© {new Date().getFullYear()} — All rights reserved.</span>
      <a href="mailto:{profile.email}">{profile.email}</a>
    </div>
  </footer>
</main>

<style>
  main {
    position: relative;
  }
  footer {
    border-top: 1px solid var(--border);
    padding: 88px 24px 32px;
    max-width: 1120px;
    margin: 0 auto;
  }
  .wall {
    display: flex;
    justify-content: center;
    padding: 40px 0 64px;
    overflow: hidden;
  }
  .huge {
    font-family: var(--display);
    font-weight: 700;
    font-size: clamp(72px, 18vw, 240px);
    line-height: 0.9;
    letter-spacing: -0.06em;
    background: linear-gradient(180deg, var(--text-h) 0%, rgba(245, 245, 242, 0.15) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    white-space: nowrap;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text);
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }
  .bottom a {
    color: var(--text-mid);
    transition: color 0.2s;
  }
  .bottom a:hover {
    color: var(--accent);
  }
  @media (max-width: 640px) {
    .bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
