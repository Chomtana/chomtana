<script lang="ts">
  import { profile } from './data';
</script>

<nav class="pill">
  <a href="#top" class="brand">
    <img class="brand-avatar" src={profile.avatar} alt="" />
    <span>{profile.name}</span>
  </a>
  <ul>
    <li><a href="#contributions">Contributions</a></li>
    <li><a href="#hackathons">Hackathons</a></li>
    <li><a href="#audits">Audits</a></li>
    <li><a href="#op-grants">Grants</a></li>
  </ul>
  <a class="cta" href="mailto:{profile.email}">Get in touch</a>
</nav>

<style>
  .pill {
    position: fixed;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 6px 6px 14px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-h);
    padding-right: 14px;
    border-right: 1px solid var(--border);
    height: 32px;
    white-space: nowrap;
  }
  .brand-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--border-strong);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2px;
  }
  ul a {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    font-size: 13px;
    color: var(--text-mid);
    border-radius: 999px;
    transition:
      color 0.2s,
      background 0.2s;
    white-space: nowrap;
  }
  ul a:hover {
    color: var(--text-h);
    background: rgba(255, 255, 255, 0.05);
  }
  .cta {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 999px;
    background: var(--accent);
    color: var(--accent-ink);
    transition:
      transform 0.2s,
      filter 0.2s;
    white-space: nowrap;
  }
  .cta:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
  @media (max-width: 860px) {
    .pill {
      display: none;
    }
  }
</style>
