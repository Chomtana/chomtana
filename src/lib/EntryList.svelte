<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Entry } from './data';

  let { items }: { items: Entry[] } = $props();
</script>

<ul class="entry-list">
  {#each items as entry (entry.link + entry.title)}
    <li>
      <a href={entry.link} target="_blank" rel="noreferrer">
        <div class="meta">
          {#if entry.date}<span class="date">{entry.date}</span>{/if}
          {#if entry.tag}<span class="tag" class:winner={entry.winner}>{entry.tag}</span>{/if}
        </div>
        <div class="body">
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
        <span class="arrow"><Icon name="arrow" size={20} /></span>
      </a>
    </li>
  {/each}
</ul>

<style>
  .entry-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid var(--border);
  }
  li {
    border-bottom: 1px solid var(--border);
  }
  a {
    display: grid;
    grid-template-columns: 200px 1fr 32px;
    align-items: flex-start;
    gap: 32px;
    padding: 28px 4px;
    color: var(--text-mid);
    transition: color 0.2s;
    position: relative;
  }
  a::before {
    content: '';
    position: absolute;
    inset: 0 -16px;
    background: var(--accent-dim);
    opacity: 0;
    border-radius: 10px;
    transition: opacity 0.25s;
    z-index: -1;
  }
  a:hover::before {
    opacity: 1;
  }
  a:hover {
    color: var(--text-h);
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
  .tag {
    align-self: flex-start;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    color: var(--text-h);
  }
  .tag.winner {
    color: var(--accent);
    border-color: rgba(212, 255, 58, 0.45);
    background: var(--accent-dim);
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
  .arrow {
    display: inline-flex;
    justify-content: flex-end;
    padding-top: 8px;
    color: var(--text);
    transition:
      color 0.2s,
      transform 0.25s;
  }
  a:hover .arrow {
    color: var(--accent);
    transform: translate(4px, -4px);
  }
  @media (max-width: 720px) {
    a {
      grid-template-columns: 1fr 24px;
      grid-template-rows: auto auto;
      gap: 14px 12px;
      padding: 24px 4px;
    }
    .meta {
      grid-column: 1;
      grid-row: 1;
      flex-direction: row;
      align-items: center;
      padding-top: 0;
    }
    .body {
      grid-column: 1 / 3;
      grid-row: 2;
    }
    .arrow {
      grid-column: 2;
      grid-row: 1;
      justify-content: flex-end;
      padding-top: 0;
      align-items: center;
    }
  }
</style>
