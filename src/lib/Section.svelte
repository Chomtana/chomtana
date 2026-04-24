<script lang="ts">
  import type { Snippet } from 'svelte';
  let {
    id,
    index,
    title,
    subtitle,
    children,
  }: {
    id: string;
    index: string;
    title: string;
    subtitle?: string;
    children: Snippet;
  } = $props();
</script>

<section {id} class="section">
  <div class="inner">
    <header>
      <div class="eyebrow">
        <span class="index">{index}</span>
        <span class="line-mark"></span>
        <span class="label">— {subtitle ?? ''}</span>
      </div>
      <h2>{title}</h2>
    </header>
    <div class="content">
      {@render children()}
    </div>
  </div>
</section>

<style>
  .section {
    padding: 88px 24px;
    border-top: 1px solid var(--border);
  }
  .inner {
    max-width: 1120px;
    margin: 0 auto;
  }
  header {
    margin-bottom: 44px;
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text);
  }
  .index {
    color: var(--accent);
  }
  .line-mark {
    flex-shrink: 0;
    width: 28px;
    height: 1px;
    background: var(--border-strong);
  }
  h2 {
    font-family: var(--display);
    font-weight: 600;
    font-size: clamp(32px, 4.8vw, 60px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    color: var(--text-h);
    margin: 0;
    max-width: 900px;
  }
  @media (max-width: 640px) {
    .section {
      padding: 64px 20px;
    }
  }
</style>
