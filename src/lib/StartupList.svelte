<script lang="ts">
  import Icon from './Icon.svelte';
  import type { Startup } from './data';

  let { items }: { items: Startup[] } = $props();

  const fmt = (iso: string) => {
    const [y, m] = iso.split('-');
    return new Date(Number(y), Number(m ?? 1) - 1, 1).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
    });
  };
</script>

<ul class="startup-list">
  {#each items as s (s.link + s.title)}
    <li>
      <a href={s.link} target="_blank" rel="noreferrer">
        <div class="meta">
          {#if s.date}<span class="date">{fmt(s.date)}</span>{/if}
          {#if s.tag}<span class="tag" class:winner={s.winner}>{s.tag}</span>{/if}
        </div>
        <div class="body">
          {#if s.achievements && s.achievements.length}
            <ul class="achievements">
              {#each s.achievements as a}
                <li class="tag achievement">{a}</li>
              {/each}
            </ul>
          {/if}
          <h3>{s.title}</h3>
          <p class="desc">{s.description}</p>
          {#if s.postmortem || s.takeaways}
            <dl class="notes">
              {#if s.postmortem}
                <div>
                  <dt>Why failed?</dt>
                  <dd>{s.postmortem}</dd>
                </div>
              {/if}
              {#if s.takeaways}
                <div>
                  <dt>What did I learn?</dt>
                  <dd>{s.takeaways}</dd>
                </div>
              {/if}
            </dl>
          {/if}
        </div>
        <span class="arrow"><Icon name="arrow" size={20} /></span>
      </a>
    </li>
  {/each}
</ul>

<style>
  .startup-list {
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
  .tag.achievement {
    text-transform: none;
    letter-spacing: 0;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    border-color: rgba(212, 255, 58, 0.3);
    background: rgba(212, 255, 58, 0.06);
  }
  .body {
    min-width: 0;
    display: flex;
    flex-direction: column;
  }
  .achievements {
    list-style: none;
    padding: 0;
    margin: 0 0 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    order: 2;
  }
  h3 {
    order: 1;
    margin: 0 0 12px;
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: var(--text-h);
    transition: color 0.2s;
  }
  a:hover h3 {
    color: var(--accent);
  }
  .desc {
    order: 3;
  }
  .notes {
    order: 4;
  }
  .desc {
    margin: 0 0 18px;
    font-size: 15px;
    color: var(--text-mid);
    max-width: 720px;
  }
  .notes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 32px;
    margin: 0;
    max-width: 820px;
  }
  .notes > div {
    border-left: 1px solid var(--border);
    padding-left: 14px;
  }
  dt {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 6px;
  }
  dd {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--text-mid);
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
    .notes {
      grid-template-columns: 1fr;
    }
  }
</style>
