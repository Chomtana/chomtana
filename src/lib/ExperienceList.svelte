<script lang="ts">
  import type { WorkExperience } from './data';

  let { items }: { items: WorkExperience[] } = $props();

  const fmt = (iso: string) => {
    const [y, m] = iso.split('-');
    return new Date(Number(y), Number(m ?? 1) - 1, 1).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
    });
  };
</script>

<ul class="experience-list">
  {#each items as e (e.title + e.company)}
    <li>
      <div class="meta">
        {#if e.date}<span class="date">{fmt(e.date)}</span>{/if}
      </div>
      <div class="body">
        <h3>{e.title}</h3>
        <p class="company">{e.company}</p>
        <p class="desc">{e.description}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  .experience-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid var(--border);
  }
  li {
    display: grid;
    grid-template-columns: 200px 1fr;
    align-items: flex-start;
    gap: 32px;
    padding: 28px 4px;
    border-bottom: 1px solid var(--border);
  }
  .meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 6px;
  }
  .date {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text);
  }
  .body {
    min-width: 0;
  }
  h3 {
    margin: 0 0 10px;
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: var(--text-h);
  }
  p {
    margin: 0;
    font-size: 15px;
    color: var(--text-mid);
    max-width: 620px;
  }
  .company {
    margin-bottom: 8px;
    font-family: var(--mono);
    font-size: 13px;
    color: var(--text);
  }
  .desc {
    max-width: 720px;
  }
  @media (max-width: 720px) {
    li {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 24px 4px;
    }
  }
</style>
