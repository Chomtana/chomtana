<script lang="ts">
  import { profile, seo, startups, otherWorkExperience, audits } from './data';

  type WorkItem = { key: string; title: string; subtitle: string; date?: string };
  const workHistory: WorkItem[] = [
    ...startups.map((s) => ({
      key: `startup-${s.title}`,
      title: s.title,
      subtitle: s.description + (s.achievements?.length ? ` (${s.achievements.join('; ')})` : ''),
      date: s.date,
    })),
    ...otherWorkExperience.map((e) => ({
      key: `work-${e.title}`,
      title: e.title,
      subtitle: `${e.company} — ${e.description}`,
      date: e.date,
    })),
  ].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function fmt(date?: string): string {
    if (!date) return '';
    const [y, m] = date.split('-');
    return m ? `${MONTHS[Number(m) - 1]} ${y}` : y;
  }
  function domain(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  }

  $effect(() => {
    const prevTitle = document.title;
    document.title = `${profile.fullName} - CV`;
    document.body.classList.add('cv-mode');
    window.scrollTo(0, 0);
    const timer = setTimeout(() => window.print(), 400);
    return () => {
      clearTimeout(timer);
      document.title = prevTitle;
      document.body.classList.remove('cv-mode');
    };
  });
</script>

<div class="toolbar">
  <a class="back" href="#top">&larr; Back to portfolio</a>
  <button type="button" class="print" onclick={() => window.print()}>
    Print / Save as PDF
  </button>
</div>

<article class="page">
  <header>
    <h1>{profile.fullName}</h1>
    <p class="role">
      AI &amp; Blockchain Engineer &mdash; {profile.headlinePrefix}
      <a href={profile.product.url}>{profile.product.name}</a>
    </p>
    <p class="contact">
      <a href="mailto:{profile.email}">{profile.email}</a>
      <span>&bull;</span>
      <a href={seo.url}>{domain(seo.url)}</a>
      <span>&bull;</span>
      <a href={profile.github}>{domain(profile.github)}</a>
      <span>&bull;</span>
      <a href={profile.linkedin}>{domain(profile.linkedin)}</a>
    </p>
  </header>

  <section>
    <h2>Summary</h2>
    <p class="summary">
      AI and blockchain engineer. Currently building
      {profile.product.name} &mdash; {profile.tagline} Top-ranked Code4rena security
      auditor (1st and 2nd place finishes), open source contributor to reth, viem,
      Seaport and Optimism, and multi-time hackathon winner.
    </p>
  </section>

  <section>
    <h2>Education</h2>
    <div class="item">
      <div class="row">
        <h3>Chulalongkorn University</h3>
        <span class="date">First-Class Honors &mdash; GPA 3.88 / 4</span>
      </div>
      <p>Bachelor of Engineering in Computer Engineering</p>
    </div>
  </section>

  <section>
    <h2>Work Experience</h2>
    {#each workHistory as w (w.key)}
      <div class="item">
        <div class="row">
          <h3>{w.title}</h3>
          <span class="date">{fmt(w.date)}</span>
        </div>
        <p>{w.subtitle}</p>
      </div>
    {/each}
  </section>

  <section>
    <h2>Security Audits (Code4rena)</h2>
    {#each audits as a}
      <div class="item">
        <div class="row">
          <h3>{a.title}{#if a.tag}<span class="tag">&nbsp;&mdash; {a.tag}</span>{/if}</h3>
          <span class="date">{fmt(a.date)}</span>
        </div>
        <p>{a.description}</p>
      </div>
    {/each}
  </section>

</article>

<style>
  :global(body.cv-mode) {
    background: #e8e8e8;
    background-image: none;
    color-scheme: light;
  }

  .toolbar {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    max-width: 210mm;
    margin: 0 auto;
    padding: 12px 4px;
  }
  .back {
    font-size: 13px;
    color: #333;
    text-decoration: none;
  }
  .back:hover {
    text-decoration: underline;
  }
  .print {
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    border: none;
    border-radius: 999px;
    background: #111;
    color: #fff;
    cursor: pointer;
  }
  .print:hover {
    background: #333;
  }

  .page {
    max-width: 210mm;
    margin: 0 auto 40px;
    padding: 15mm 17mm;
    background: #fff;
    color: #1a1a1a;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
    font-size: 12px;
    line-height: 1.5;
  }

  header {
    text-align: center;
    margin-bottom: 14px;
  }
  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #000;
  }
  .role {
    margin: 4px 0 6px;
    font-size: 13px;
    color: #333;
  }
  .contact {
    margin: 0;
    font-size: 11.5px;
    color: #444;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
  }
  .page a {
    color: inherit;
    text-decoration: none;
  }
  .page a:hover {
    text-decoration: underline;
  }

  section {
    margin-bottom: 11px;
  }
  h2 {
    margin: 0 0 6px;
    padding-bottom: 2px;
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #000;
    border-bottom: 1px solid #000;
  }
  .summary {
    margin: 0;
  }

  .item {
    margin-bottom: 7px;
  }
  .item:last-child {
    margin-bottom: 0;
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 12px;
  }
  h3 {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    color: #000;
  }
  .tag {
    font-weight: 500;
    color: #333;
  }
  .date {
    flex-shrink: 0;
    font-size: 11.5px;
    color: #555;
    white-space: nowrap;
  }
  .item p {
    margin: 1px 0 0;
    color: #333;
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    :global(body.cv-mode) {
      background: #fff;
    }
    .toolbar {
      display: none;
    }
    .page {
      max-width: none;
      margin: 0;
      box-shadow: none;
    }
  }
</style>
