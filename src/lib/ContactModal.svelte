<script lang="ts">
  import Icon from './Icon.svelte';
  import { profile } from './data';

  let { open, onClose }: { open: boolean; onClose: () => void } = $props();

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }
</script>

<svelte:window on:keydown={onKey} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
  <div class="backdrop" role="presentation" onclick={onClose}>
    <div
      class="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      tabindex="-1"
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e) => e.stopPropagation()}
    >
      <button class="close" type="button" aria-label="Close" onclick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      </button>

      <img class="avatar" src={profile.avatar} alt={profile.name} />
      <h2 id="contact-title">Let's talk</h2>
      <p class="lead">
        I'm building
        <a class="product" href={profile.product.url} target="_blank" rel="noreferrer"><strong>{profile.product.name}</strong></a>
      </p>

      <p class="lead description">
        {profile.tagline}
      </p>

      <a class="email" href="mailto:{profile.email}">
        <Icon name="mail" size={16} />
        <span>{profile.email}</span>
      </a>

      <div class="socials">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="github" size={18} />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Icon name="linkedin" size={18} />
        </a>
        <a href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
          <Icon name="x" size={16} />
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    animation: fade 0.2s ease-out;
  }
  .modal {
    position: relative;
    width: 100%;
    max-width: 460px;
    padding: 40px 32px 32px;
    background: var(--bg-elev, #121212);
    border: 1px solid var(--border-strong);
    border-radius: 20px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
    text-align: center;
    animation: rise 0.25s ease-out;
  }
  .close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--text-mid);
    cursor: pointer;
    transition:
      color 0.2s,
      border-color 0.2s;
  }
  .close:hover {
    color: var(--text-h);
    border-color: var(--text-mid);
  }
  .avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-strong);
    margin-bottom: 18px;
  }
  h2 {
    font-family: var(--display);
    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.02em;
    color: var(--text-h);
    margin: 0 0 12px;
  }
  .lead {
    font-size: 18px;
    line-height: 1.55;
    color: var(--text-mid);
    margin: 0 0 12px 0px;
  }
  .lead strong {
    color: var(--accent);
    font-weight: 500;
  }
  .product {
    text-decoration: none;
    background-image: linear-gradient(var(--accent), var(--accent));
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 0 100%;
    transition: background-size 0.25s;
  }
  .product:hover {
    background-size: 100% 2px;
  }
  .description {
    font-size: 14.5px;
    margin: 0 0 24px 0px;
  }
  .email {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 11px 18px;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-h);
    font-size: 14px;
    font-family: var(--mono);
    background: rgba(255, 255, 255, 0.02);
    transition:
      border-color 0.2s,
      background 0.2s;
    margin-bottom: 18px;
  }
  .email:hover {
    border-color: var(--accent);
    background: var(--accent-dim);
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .socials a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--text-mid);
    background: rgba(255, 255, 255, 0.02);
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
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes rise {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
</style>
