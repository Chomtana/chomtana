<script lang="ts">
  import Icon from './Icon.svelte';
  import { profile } from './data';
</script>

<section class="hero">
  <img class="avatar" src={profile.avatar} alt={profile.name} />
  <h1>{profile.name}</h1>
  <p class="tagline">{profile.tagline}</p>
  <a class="email" href="mailto:{profile.email}">
    <Icon name="mail" size={18} />
    <span>{profile.email}</span>
  </a>
  <div class="contacts">
    <a class="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
      <Icon name="github" />
    </a>
    <a class="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <Icon name="linkedin" />
    </a>
    <a class="icon-btn" href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
      <Icon name="x" />
    </a>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 96px 24px 72px;
    gap: 16px;
  }
  .avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
    box-shadow: var(--shadow);
  }
  h1 {
    margin: 8px 0 0;
    font-size: 44px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-h);
  }
  .tagline {
    max-width: 560px;
    color: var(--text);
    margin: 0;
  }
  .email {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-h);
    text-decoration: none;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--chip-bg);
    font-size: 15px;
    transition: background 0.2s;
  }
  .email:hover {
    background: var(--chip-bg-hover);
  }
  .contacts {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--text-h);
    background: var(--chip-bg);
    text-decoration: none;
    transition:
      background 0.2s,
      transform 0.2s,
      color 0.2s;
  }
  .icon-btn:hover {
    background: var(--accent-bg);
    color: var(--accent);
    transform: translateY(-2px);
  }
  @media (max-width: 640px) {
    .hero {
      padding: 64px 20px 48px;
    }
    h1 {
      font-size: 32px;
    }
    .avatar {
      width: 112px;
      height: 112px;
    }
  }
</style>
