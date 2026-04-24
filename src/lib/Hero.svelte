<script lang="ts">
  import Icon from './Icon.svelte';
  import { profile } from './data';
</script>

<section class="hero" id="top">
  <img class="avatar" src={profile.avatar} alt={profile.name} />

  <h1>
    <span class="line">Building in</span>
    <span class="line">
      <em>onchain</em> systems —
    </span>
    <span class="line">by {profile.name}.</span>
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

  <dl class="stats">
    <div>
      <dt>Merged PRs</dt>
      <dd>40+</dd>
    </div>
    <div>
      <dt>Hackathons</dt>
      <dd>12</dd>
    </div>
    <div>
      <dt>Audit findings</dt>
      <dd>30+</dd>
    </div>
    <div>
      <dt>Grants shipped</dt>
      <dd>3</dd>
    </div>
  </dl>
</section>

<style>
  .hero {
    position: relative;
    padding: 140px 24px 64px;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-strong);
    margin-bottom: 32px;
  }

  h1 {
    font-family: var(--display);
    font-weight: 600;
    font-size: clamp(40px, 7vw, 88px);
    line-height: 1.02;
    letter-spacing: -0.04em;
    color: var(--text-h);
    margin: 0 0 28px;
  }
  .line {
    display: block;
  }
  em {
    font-style: italic;
    font-weight: 500;
    color: var(--accent);
  }

  .tagline {
    max-width: 640px;
    margin: 0 0 36px;
    font-size: 17px;
    color: var(--text-mid);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 72px;
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
      transform 0.2s;
  }
  .icon-btn:hover {
    color: var(--accent-ink);
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    width: 100%;
    max-width: 960px;
    margin: 0;
    padding: 32px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .stats > div {
    padding: 0 16px;
    text-align: left;
    border-right: 1px solid var(--border);
  }
  .stats > div:last-child {
    border-right: none;
  }
  dt {
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text);
    margin: 0 0 10px;
  }
  dd {
    font-family: var(--display);
    font-weight: 600;
    font-size: 40px;
    line-height: 1;
    margin: 0;
    color: var(--text-h);
    letter-spacing: -0.03em;
  }

  @media (max-width: 720px) {
    .hero {
      padding: 120px 20px 48px;
    }
    .stats {
      grid-template-columns: repeat(2, 1fr);
    }
    .stats > div:nth-child(2) {
      border-right: none;
    }
    .stats > div:nth-child(1),
    .stats > div:nth-child(2) {
      border-bottom: 1px solid var(--border);
      padding-bottom: 18px;
      margin-bottom: 18px;
    }
    dd {
      font-size: 32px;
    }
  }
</style>
