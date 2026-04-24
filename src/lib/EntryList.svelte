<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Entry } from './data';

  let { items }: { items: Entry[] } = $props();
</script>

<ul class="entry-list">
  {#each items as entry (entry.link + entry.title)}
    <li>
      <a href={entry.link} target="_blank" rel="noreferrer">
        <div class="head">
          <h3>{entry.title}</h3>
          <span class="ext"><Icon name="external" size={16} /></span>
        </div>
        <p class="desc">{entry.description}</p>
        <div class="tags">
          {#if entry.tag}<span class="tag">{entry.tag}</span>{/if}
          {#if entry.date}<span class="date">{entry.date}</span>{/if}
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .entry-list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 960px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 14px;
  }
  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 18px;
    height: 100%;
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
  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  h3 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
    color: var(--text-h);
    line-height: 1.35;
  }
  .ext {
    color: var(--text);
    flex-shrink: 0;
  }
  .desc {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--text);
    flex-grow: 1;
  }
  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .tag {
    font-size: 12px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 999px;
    background: var(--accent-bg);
    color: var(--accent);
  }
  .date {
    font-size: 12px;
    color: var(--text);
    font-family: var(--mono);
  }
</style>
