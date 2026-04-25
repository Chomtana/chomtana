<script lang="ts">
  import Icon from './Icon.svelte';
  import { profile } from './data';
</script>

<section class="hero" id="top">
  <div class="center">
    <img class="avatar" src={profile.avatar} alt={profile.name} />

    <p class="name">
      <span class="mark"></span>
      <span class="name-text">{profile.name}</span>
      <span class="mark"></span>
    </p>
    <h1>
      {profile.headlinePrefix}
      <a class="product" href={profile.product.url} target="_blank" rel="noreferrer">{profile.product.name}</a>
    </h1>

    <p class="tagline">{profile.tagline}</p>

    <div class="actions">
      <a class="email" href="mailto:{profile.email}">
        <Icon name="mail" size={16} />
        <span>{profile.email}</span>
      </a>
      <div class="socials">
        <a class="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="github" size={18} />
        </a>
        <a class="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Icon name="linkedin" size={18} />
        </a>
        <a class="icon-btn" href={profile.x} target="_blank" rel="noreferrer" aria-label="X">
          <Icon name="x" size={16} />
        </a>
      </div>
    </div>

    <!--
    <dl class="stats">
      <div><dt>Merged PRs</dt><dd>40+</dd></div>
      <div><dt>Hackathons</dt><dd>12</dd></div>
      <div><dt>Audit findings</dt><dd>30+</dd></div>
      <div><dt>Grants shipped</dt><dd>3</dd></div>
    </dl>
    -->
  </div>

  <a class="scroll" href="#contributions" aria-label="Scroll to content">
    <span class="scroll-label">Scroll down to view more</span>
    <span class="scroll-chevron" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </span>
  </a>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100dvh;
    padding: 120px 24px 80px;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .avatar {
    width: 108px;
    height: 108px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-strong);
    margin-bottom: 28px;
  }

  .name {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin: 0 0 18px;
  }
  .mark {
    width: 36px;
    height: 1px;
    background: var(--accent);
    box-shadow: 0 0 12px var(--accent);
  }
  .name-text {
    font-family: var(--display);
    font-weight: 500;
    font-size: clamp(26px, 2.8vw, 34px);
    letter-spacing: -0.01em;
    color: var(--accent);
  }

  h1 {
    font-family: var(--display);
    font-weight: 600;
    font-size: clamp(36px, 5.2vw, 64px);
    line-height: 1.05;
    letter-spacing: -0.035em;
    color: var(--text-h);
    margin: 0 0 20px;
  }
  .product {
    color: var(--accent);
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-repeat: no-repeat;
    background-size: 0% 2px;
    background-position: 0 100%;
    transition: background-size 0.25s;
  }
  .product:hover {
    background-size: 100% 2px;
  }

  .tagline {
    max-width: 620px;
    margin: 0 0 40px;
    font-size: clamp(16px, 1.4vw, 19px);
    line-height: 1.55;
    color: var(--text-mid);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  .email {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-h);
    font-size: 14px;
    font-family: var(--mono);
    background: var(--bg-elev);
    transition:
      border-color 0.2s,
      background 0.2s;
  }
  .email:hover {
    border-color: var(--accent);
    background: var(--accent-dim);
  }
  .socials {
    display: flex;
    gap: 8px;
  }
  .icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--text-mid);
    background: var(--bg-elev);
    transition:
      color 0.2s,
      border-color 0.2s,
      background 0.2s;
  }
  .icon-btn:hover {
    color: var(--text-h);
    border-color: var(--accent);
    background: var(--accent-dim);
  }

  .scroll {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text);
    transition: color 0.2s;
  }
  .scroll:hover {
    color: var(--accent);
  }
  .scroll-chevron {
    display: inline-flex;
    animation: bob 2s ease-in-out infinite;
  }
  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(4px); }
  }

  @media (max-width: 720px) {
    .hero {
      padding: 100px 20px 80px;
    }
    .avatar {
      width: 92px;
      height: 92px;
    }
    .scroll {
      bottom: 24px;
    }
  }
</style>
