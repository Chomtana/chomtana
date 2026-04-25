<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Section from './lib/Section.svelte';
  import PRList from './lib/PRList.svelte';
  import EntryList from './lib/EntryList.svelte';
  import ContactModal from './lib/ContactModal.svelte';
  import Icon from './lib/Icon.svelte';
  import { contributions, hackathons, audits, opGrants, profile } from './lib/data';

  let contactOpen = $state(false);

  $effect(() => {
    const open = () => (contactOpen = true);
    window.addEventListener('open-contact', open);
    return () => window.removeEventListener('open-contact', open);
  });
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
      <span class="huge">{profile.name}</span>
    </div>
    <div class="bottom">
      <ul class="socials">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Icon name="github" size={16} />
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={16} />
          </a>
        </li>
        <li>
          <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
            <Icon name="x" size={14} />
          </a>
        </li>
      </ul>
      <a href="mailto:{profile.email}">{profile.email}</a>
    </div>
  </footer>
</main>

<ContactModal open={contactOpen} onClose={() => (contactOpen = false)} />

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
    width: 100%;
  }
  .huge {
    display: block;
    font-family: var(--display);
    font-weight: 700;
    font-size: clamp(48px, 13vw, 160px);
    line-height: 0.9;
    letter-spacing: -0.06em;
    background: linear-gradient(180deg, var(--text-h) 0%, rgba(245, 245, 242, 0.15) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    white-space: nowrap;
    max-width: 100%;
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
  .bottom > a {
    color: var(--text-mid);
    transition: color 0.2s;
  }
  .bottom > a:hover {
    color: var(--accent);
  }
  .socials {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 8px;
  }
  .socials a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--text-mid);
    background: var(--bg-elev);
    transition:
      color 0.2s,
      border-color 0.2s,
      background 0.2s;
  }
  .socials a:hover {
    color: var(--text-h);
    border-color: var(--accent);
    background: var(--accent-dim);
  }
  @media (max-width: 640px) {
    .bottom {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
