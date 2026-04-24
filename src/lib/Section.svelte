<script lang="ts">
  import type { Snippet } from 'svelte';
  let {
    id,
    title,
    subtitle,
    children,
  }: { id: string; title: string; subtitle?: string; children: Snippet } = $props();
</script>

<section {id} class="section">
  <header>
    <h2>{title}</h2>
    {#if subtitle}<p class="subtitle">{subtitle}</p>{/if}
  </header>
  {@render children()}
</section>

<style>
  .section {
    padding: 56px 24px;
    border-top: 1px solid var(--border);
  }
  header {
    max-width: 960px;
    margin: 0 auto 28px;
  }
  h2 {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin: 0 0 6px;
    color: var(--text-h);
  }
  .subtitle {
    color: var(--text);
    margin: 0;
    font-size: 15px;
  }
  @media (max-width: 640px) {
    .section {
      padding: 40px 20px;
    }
    h2 {
      font-size: 22px;
    }
  }
</style>
