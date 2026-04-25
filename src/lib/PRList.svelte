<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Contribution } from './data';

  let { items }: { items: Contribution[] } = $props();

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
</script>

<ul class="pr-list">
  {#each items as c (c.url)}
    <li>
      <a href={c.url} target="_blank" rel="noreferrer">
        <span class="date">{fmt(c.date)}</span>
        <div class="body">
          <div class="title">{c.title}</div>
          <div class="meta">
            <span class="kind {c.kind}">
              <Icon name={c.kind === 'pr' ? 'merge' : 'issue'} size={12} />
              {c.kind === 'pr' ? c.state ?? 'pr' : 'issue'}
            </span>
            <span class="repo">{c.repo}</span>
            <span class="num">#{c.number}</span>
          </div>
        </div>
        <span class="arrow"><Icon name="arrow" size={18} /></span>
      </a>
    </li>
  {/each}
</ul>

<style>
  .pr-list {
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
    grid-template-columns: 120px 1fr 32px;
    align-items: flex-start;
    gap: 32px;
    padding: 22px 4px;
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
    border-radius: 8px;
    transition: opacity 0.25s;
    z-index: -1;
  }
  a:hover::before {
    opacity: 1;
  }
  a:hover {
    color: var(--text-h);
  }
  .date {
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--text);
    padding-top: 4px;
  }
  .body {
    min-width: 0;
  }
  .title {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(17px, 1.6vw, 20px);
    line-height: 1.35;
    color: var(--text-h);
    letter-spacing: -0.015em;
    margin-bottom: 8px;
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
  }
  .kind {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 11px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid var(--border-strong);
  }
  .kind.pr {
    color: var(--accent);
    border-color: rgba(212, 255, 58, 0.35);
    background: var(--accent-dim);
  }
  .kind.issue {
    color: #c8a8ff;
    border-color: rgba(168, 120, 255, 0.45);
    background: rgba(168, 120, 255, 0.12);
  }
  .repo {
    color: var(--text-mid);
  }
  .num {
    color: var(--text);
  }
  .arrow {
    display: inline-flex;
    justify-content: flex-end;
    color: var(--text);
    padding-top: 4px;
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
      gap: 10px 14px;
      padding: 20px 4px;
    }
    .date {
      grid-column: 1;
      grid-row: 1;
      padding-top: 0;
    }
    .body {
      grid-column: 1 / 3;
      grid-row: 2;
    }
    .arrow {
      grid-column: 2;
      grid-row: 1;
      padding-top: 0;
    }
    .title {
      font-size: 16px;
    }
  }
</style>
