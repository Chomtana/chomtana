<script lang="ts">
  import Icon from './Icon.svelte';
  import type { PullRequest } from './data';

  let { items }: { items: PullRequest[] } = $props();

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
</script>

<ul class="pr-list">
  {#each items as pr (pr.url)}
    <li>
      <a href={pr.url} target="_blank" rel="noreferrer">
        <span class="merge"><Icon name="merge" size={16} /></span>
        <div class="body">
          <div class="title">{pr.title}</div>
          <div class="meta">
            <span class="repo">{pr.repo}</span>
            <span class="dot">·</span>
            <span>#{pr.number}</span>
            <span class="dot">·</span>
            <span>merged {fmt(pr.mergedAt)}</span>
          </div>
        </div>
        <span class="ext"><Icon name="external" size={16} /></span>
      </a>
    </li>
  {/each}
</ul>

<style>
  .pr-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  a {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 18px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--card-bg);
    text-decoration: none;
    color: inherit;
    transition:
      border-color 0.2s,
      box-shadow 0.2s,
      transform 0.2s;
  }
  a:hover {
    border-color: var(--accent-border);
    box-shadow: var(--shadow);
    transform: translateY(-1px);
  }
  .merge {
    display: inline-flex;
    padding: 6px;
    border-radius: 8px;
    background: var(--merge-bg);
    color: var(--merge-fg);
    margin-top: 1px;
    flex-shrink: 0;
  }
  .body {
    flex: 1 1 auto;
    min-width: 0;
  }
  .title {
    color: var(--text-h);
    font-weight: 500;
    font-size: 15px;
    line-height: 1.4;
    word-break: break-word;
  }
  .meta {
    margin-top: 4px;
    color: var(--text);
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
  }
  .repo {
    font-family: var(--mono);
    color: var(--text-h);
  }
  .dot {
    opacity: 0.5;
  }
  .ext {
    color: var(--text);
    margin-top: 4px;
    flex-shrink: 0;
  }
</style>
