const icon = name => `<svg aria-hidden="true"><use href="#${name}"/></svg>`;

const stages = [
  {
    title: 'Discover enterprise reality',
    description: 'Inventory the systems, assets, and evidence chains that compliance depends on.',
    actions: ['Scan data assets, reports, pipelines, and repositories', 'Capture ownership, lineage, usage, and criticality', 'Identify evidence sources and trust signals'],
    label: 'DATA ASSET DISCOVERY',
    columns: ['Asset', 'Domain', 'Owner', 'Status'],
    rows: [['crilc_returns', 'Finance', 'Reporting', 'Cataloged'], ['customer_kyc', 'PII', 'Operations', 'Cataloged'], ['control_events', 'Analytics', 'Risk', 'Monitoring']],
    output: 'Asset inventory, ownership, lineage, and classifications',
  },
  {
    title: 'Map regulatory intent',
    description: 'Translate regulations into a map of obligations, controls, and evidence.',
    actions: ['Identify applicable frameworks by jurisdiction and business line', 'Break requirements into obligations, principles, and rules', 'Link obligations to controls, reports, and supporting data'],
    label: 'OBLIGATION MAPPING',
    columns: ['Requirement', 'Control', 'Evidence', 'Status'],
    rows: [['CRILC completeness', 'RET-01', 'Filing checks', 'Mapped'], ['Identity consistency', 'KYC-04', 'Document scan', 'Mapped'], ['Risk data lineage', 'DAT-07', 'Lineage graph', 'In review']],
    output: 'Applicable regulations and mapped obligations',
  },
  {
    title: 'Assess exposure and root cause',
    description: 'See where control coverage or evidence has changed and what the change affects.',
    actions: ['Validate control execution, data quality, and evidence freshness', 'Detect drift in schemas, reports, jobs, and ownership', 'Trace each finding to the relevant obligation and technical signal'],
    label: 'EXPOSURE ASSESSMENT',
    columns: ['Finding', 'Cause', 'Impact', 'Status'],
    rows: [['Missing source field', 'Schema drift', 'Reporting', 'In review'], ['Stale evidence', 'Delayed job', 'Controls', 'In review'], ['Unassigned control', 'Owner change', 'Governance', 'Monitoring']],
    output: 'Prioritized findings with root cause and evidence',
  },
  {
    title: 'Recommend and drive resolution',
    description: 'Convert findings into governed corrective action with clear ownership.',
    actions: ['Prioritize next steps by regulatory impact', 'Trigger approved fixes where the resolution is deterministic', 'Route issues to GRC, ITSM, or workflow owners with service levels'],
    label: 'REMEDIATION QUEUE',
    columns: ['Action', 'Priority', 'Owner', 'Status'],
    rows: [['Restore source field', 'High', 'Data platform', 'In review'], ['Refresh evidence', 'Medium', 'Reporting', 'Assigned'], ['Confirm control owner', 'Medium', 'Governance', 'Assigned']],
    output: 'Action recommendations, ownership, and posture reporting',
  },
  {
    title: 'Verify closure and prove it',
    description: 'Retest the control, confirm the fix worked, and keep proof of the outcome.',
    actions: ['Revalidate affected controls, data, and evidence chains', 'Recompute regulatory posture after remediation', 'Generate a closure record for audit and regulatory review'],
    label: 'CLOSURE VERIFICATION',
    columns: ['Finding', 'Retest', 'Evidence', 'Status'],
    rows: [['Missing source field', 'Passed', 'Run #482', 'Verified'], ['Stale evidence', 'Passed', 'Run #485', 'Verified'], ['Unassigned control', 'Scheduled', 'Pending', 'Monitoring']],
    output: 'Audit-ready evidence and verified closure',
  },
];

const cases = [
  {
    tag: 'TRUOPTIMIZE / FINOPS ON GCP',
    title: 'Driving efficiency at a leading global bank',
    challenge: 'Uncontrolled BigQuery workloads drove up the cost of a fraud-detection backend running on GCP.',
    delivery: 'TruOptimize tuned queries, workloads, and storage, then provided weekly recommendations to manage spend.',
    metric: '40%', result: 'Lower annual GCP spend',
    outcomes: ['Predictable monthly spend', 'Faster fraud investigations', 'Runaway queries eliminated'],
  },
  {
    tag: 'TRUOPTIMIZE / AWS INSURANCE',
    title: 'A leaner AWS stack for an insurer’s claims engine',
    challenge: 'Production procedures for claims and policy lookups ran on oversized infrastructure and consumed significant CPU.',
    delivery: 'TruOptimize tuned queries and reduced the production footprint while preserving the results users received.',
    metric: '50%+', result: 'Reduction in annual AWS spend',
    outcomes: ['Half the production infrastructure', 'Faster claims lookups', 'Client savings target achieved'],
  },
  {
    tag: 'TRUFLOW RPI / CKYC VALIDATION',
    title: 'Cleaner CKYC data for a public sector bank',
    challenge: 'The regulator stopped validation at the first error, so a single record could require several submissions.',
    delivery: 'TruFlow RPI introduced an in-house validation layer so the bank could catch and resolve errors before filing.',
    metric: '95%+', result: 'Fewer CKYC rejections from the regulator',
    outcomes: ['Less operational rework', 'Only validated records submitted', 'Improved visibility into data controls'],
  },
  {
    tag: 'TRUFLOW RPI / RBI REPORTING',
    title: 'Regulator-ready RBI submissions',
    challenge: 'The bank needed to address data quality problems in filings, particularly in CRILC and FMR returns.',
    delivery: 'TruFlow RPI validated filings before submission and traced fields back to the source systems.',
    metric: 'SDQI', result: 'Incorrect regulatory submissions stopped',
    outcomes: ['Cleaner RBI submissions', 'Operations and compliance aligned', 'Automated validation before filing'],
  },
];

const journeyVisuals = [
  ['Data asset discovery', 'Automated multi-cloud data inventory scan', 'INVENTORY',
    ['Core systems', 'Applications', 'Reports & spreadsheets', 'Warehouses & lakes', 'Files & documents', 'APIs & third-party feeds'],
    ['stack', 'grid', 'file', 'stack', 'file', 'graph']],
  ['Regulation identification', 'Global, regional and sectoral rule mapping', 'JURISDICTION MAPPER',
    ['Global regulations', 'Regional regulations', 'Local regulations', 'Industry-specific rules'],
    ['target', 'graph', 'file', 'shield']],
  ['Posture assessment engine', 'Continuous mapping and risk gap evaluation', 'RPI ENGINE',
    ['Obligation mapping', 'Control evaluation', 'Evidence & data validation', 'Gap & risk analysis'],
    ['graph', 'shield', 'file', 'pulse']],
  ['Regulatory posture report card', 'Executive assurance and audit proof', 'ILLUSTRATIVE SCORE',
    [], []],
  ['Continuous proof', 'Audit-ready evidence chain', 'VALIDATED',
    ['Controls revalidated', 'Closure proof logged'], ['check', 'file']],
];

const journeyOutputs = [
  ['Complete inventory of data assets', 'Data ownership and lineage', 'Data classification and metadata'],
  ['Applicable regulations list', 'Regulatory obligations mapped'],
  ['Obligation-to-data mapping', 'Control effectiveness scores', 'Gap identification and risk rating', 'Evidence summary'],
  ['Overall posture score', 'Domain scores and heatmap', 'Prioritized action recommendations', 'Executive summary and insights'],
  ['Revalidated controls', 'Updated regulatory posture', 'Audit-ready closure proof'],
];

const postureReports = [
  { quarter: 'Q3', score: 78, status: 'Approaching strong', counts: [1248, 822, 268, 158], risks: [['Data Governance', '12 controls'], ['Third Party Risk', '8 vendors'], ['AML Controls', '24 rules']] },
  { quarter: 'Q2', score: 72, status: 'Moderate posture', counts: [1180, 720, 280, 180], risks: [['Vendor Assessment', '15 vendors'], ['Data Retention', '6 services'], ['Access Controls', '18 groups']] },
  { quarter: 'Q1', score: 64, status: 'Needs attention', counts: [1050, 580, 310, 160], risks: [['Legacy Databases', '4 databases'], ['GDPR Consent Logs', '9 flows'], ['API Auth Standards', '11 APIs']] },
];
const postureMetrics = ['Total obligations', 'Compliant', 'Partial', 'Non-compliant'];
const formatCount = new Intl.NumberFormat('en-US');
const assetCategories = ['All', 'Analytics', 'Finance', 'PII'];
const assetMatches = [[1, 2, 3], [3, 5], [0, 2, 3], [1, 4, 5]];
const jurisdictions = ['Basel, FATF, IFRS', 'EU, US, APAC', 'Country-specific rules', 'Sectoral guidelines'];

function postureDashboard(quarter = 0, metric = 1) {
  const { score, status, counts, risks } = postureReports[quarter];
  const progress = counts[metric] / counts[0] * 100;
  const angle = Math.PI * (1 - score / 100);
  const points = postureReports.slice(quarter).reverse().map((report, i) => [12 + 58 * i, 100 - report.score]);
  return `<div class="journey-dashboard">
    <div class="journey-dashboard-bar"><div class="journey-filters" aria-label="Reporting quarter">${postureReports.map((report, i) => `<button type="button" data-quarter="${i}" aria-pressed="${i === quarter}">${report.quarter} 2026</button>`).join('')}</div><button type="button" class="journey-export" data-journey-export>Export CSV ↓</button></div>
    <div class="journey-gauge"><div><span class="journey-kicker">Overall posture score</span><svg class="journey-dial" viewBox="0 0 150 91" role="img" aria-label="${score} out of 100">
      <path d="M19 72a56 56 0 0 1 112 0" pathLength="100" stroke="#ecedf4" stroke-width="9"/>
      <path d="M19 72a56 56 0 0 1 112 0" pathLength="100" stroke="#c16370" stroke-width="9" stroke-dasharray="48 100"/>
      <path d="M19 72a56 56 0 0 1 112 0" pathLength="100" stroke="#b78a37" stroke-width="9" stroke-dasharray="28 100" stroke-dashoffset="-51"/>
      <path d="M19 72a56 56 0 0 1 112 0" pathLength="100" stroke="#3a8a73" stroke-width="9" stroke-dasharray="18 100" stroke-dashoffset="-82"/>
      <circle cx="${75 + 56 * Math.cos(angle)}" cy="${72 - 56 * Math.sin(angle)}" r="4" fill="#263459" stroke="white" stroke-width="1.5"/>
      <text x="75" y="61" class="journey-dial-score">${score}</text><text x="75" y="78" class="journey-dial-max">/ 100</text>
    </svg></div><div class="journey-gauge-legend"><strong>${status}</strong><span>Strong <small>80–100</small></span><span>Moderate <small>50–79</small></span><span>Weak <small>0–49</small></span></div></div>
    <span class="journey-kicker">Posture summary</span>
    <div class="journey-metrics">${postureMetrics.map((name, i) => `<button type="button" data-metric="${i}" aria-pressed="${i === metric}"><span>${name}</span><strong>${formatCount.format(counts[i])}</strong></button>`).join('')}</div>
    <p class="journey-metric-detail" aria-live="polite">${postureMetrics[metric]} <strong>${formatCount.format(counts[metric])}</strong> · ${progress.toFixed(1)}% of assessed obligations</p>
    <div class="journey-report-bottom"><div class="journey-risks"><span class="journey-kicker">Top risk areas · ${postureReports[quarter].quarter}</span>${risks.map(([name, count]) => `<div><span>${name}</span><small>${count}</small></div>`).join('')}</div>
      <div class="journey-trend"><span class="journey-kicker">Posture trend</span><svg viewBox="0 0 140 53" role="img" aria-label="Quarterly posture scores: ${postureReports.slice(quarter).reverse().map(report => report.score).join(', ')}">
        <path d="M12 13h116M12 27h116M12 41h116" stroke="#e8edf3"/><polyline class="journey-trend-line" pathLength="1" points="${points.map(point => point.join(',')).join(' ')}" stroke="#3a8a73" stroke-width="2.5"/>${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#3a8a73" stroke="white"/>`).join('')}
      </svg></div></div>
  </div>`;
}

const journeyScenes = {
  0: `<path class="scene-guide" d="M23 122H497M260 27V186"/>
    <g class="scene-route"><path d="M95 77h60l40 33h32M95 151h60l40-33h32M425 77h-60l-40 33h-32M425 151h-60l-40-33h-32"/></g>
    <g class="scene-packet"><path d="M95 77h60l40 33h32M425 151h-60l-40-33h-32" pathLength="1"/></g>
    <g class="scene-surface">
      <rect x="53" y="57" width="46" height="38" rx="7"/><rect x="53" y="132" width="46" height="38" rx="7"/>
      <rect x="421" y="57" width="46" height="38" rx="7"/><rect x="421" y="132" width="46" height="38" rx="7"/>
    </g>
    <g class="scene-ink">
      <path d="M66 70h20m-20 6h15m-15 6h20m-20 62h20v14H66zm7 0v14m6-14v14M434 70h20m-20 6h15m-15 6h20m-20 65 5-5 5 5-5 5zm10 5 5-5 5 5-5 5z"/>
    </g>
    <circle class="scene-orbit" cx="260" cy="114" r="59"/>
    <circle class="scene-surface" cx="260" cy="114" r="46"/>
    <g class="scene-sweep"><path d="M260 114 260 68a46 46 0 0 1 32.5 13.5Z" fill="url(#journey-scan)"/><path class="scene-route" d="M260 114 292.5 81.5"/></g>
    <circle class="scene-orbit" cx="260" cy="114" r="32"/><circle class="scene-orbit" cx="260" cy="114" r="18"/>
    <path class="scene-guide" d="M214 114h92m-46-46v92"/>
    <circle cx="260" cy="114" r="5" fill="#354fb6" stroke="white" stroke-width="2"/>
    <circle cx="282" cy="99" r="3" fill="#526fd5"/><circle cx="241" cy="125" r="3" fill="#49a08e"/>`,
  1: `<path class="scene-guide" d="M47 163h426"/>
    <path class="scene-route" d="M260 115v19m-151 26v-13a13 13 0 0 1 13-13h276a13 13 0 0 1 13 13v13m-202 0v-26m102 26v-26"/>
    <path class="scene-packet" d="M260 115v19H122a13 13 0 0 0-13 13v13m151-45v19h138a13 13 0 0 1 13 13v13" pathLength="1"/>
    <g transform="translate(260 75)">
      <path d="m-63 4 63-34 63 34-63 34z" fill="#d8e2ff" stroke="#a6b7eb" transform="translate(0 18)"/>
      <path d="m-63 4 63-34 63 34-63 34z" fill="#e9eeff" stroke="#a6b7eb" transform="translate(0 9)"/>
      <path d="m-63 4 63-34 63 34-63 34z" fill="white" stroke="#9eafe6"/>
      <path class="scene-ink" d="m-28 4 28-15 28 15m-42 8 14 8 18-10m-18-21v31"/>
      <circle cx="0" cy="4" r="3.5" fill="#4865cd" stroke="white"/>
    </g>
    <g class="scene-surface"><rect x="95" y="155" width="28" height="22" rx="5"/><rect x="195" y="155" width="28" height="22" rx="5"/><rect x="297" y="155" width="28" height="22" rx="5"/><rect x="397" y="155" width="28" height="22" rx="5"/></g>
    <g class="scene-ink"><path d="M104 165h10m-8 4h6m92-4h10m-8 4h6m94-4h10m-8 4h6m92-4h10m-8 4h6"/></g>`,
  4: `<ellipse cx="260" cy="169" rx="116" ry="14" fill="#3f8976" opacity=".09"/>
    <path class="scene-guide" d="M81 114h98m158 0h102"/>
    <rect x="188" y="49" width="144" height="103" rx="10" fill="#e5f2ee" stroke="#afd0c6" transform="rotate(11 260 100)"/>
    <rect x="188" y="49" width="144" height="103" rx="10" fill="#f0f8f5" stroke="#afd0c6" transform="rotate(-10 260 100)"/>
    <rect x="184" y="44" width="152" height="111" rx="10" fill="white" stroke="#afd0c6"/>
    <path d="M200 65h120m-120 67h120" stroke="#dcece7"/>
    <g class="scene-ink"><path d="M207 82h42m-42 10h54m-54 10h42m-42 10h27m-27 30h27m8 0h9"/></g>
    <circle cx="294" cy="99" r="25" fill="#edf8f3" stroke="#c3e1d6"/>
    <circle cx="294" cy="99" r="18" fill="#e2f2eb" stroke="#a7d0c1"/>
    <path class="scene-proof-check" d="m285 99 6 6 12-13" pathLength="1"/>
    <circle cx="201" cy="55" r="2" fill="#5ea591"/><circle cx="208" cy="55" r="2" fill="#aaccc1"/>`,
};

function journeyScene(index) {
  const scene = journeyScenes[index];
  if (!scene) return '';
  return `<div class="journey-scene"><svg viewBox="0 0 520 205" aria-hidden="true">
    <defs><linearGradient id="journey-scan"><stop stop-color="#7a94ea" stop-opacity=".04"/><stop offset="1" stop-color="#7a94ea" stop-opacity=".46"/></linearGradient></defs>
    ${scene}
  </svg></div>`;
}

function journeyArtwork(index) {
  const [title, subtitle, label, items, marks] = journeyVisuals[index];
  const icons = ['stack', 'target', 'pulse', 'file', 'shield'];
  const nodeLabels = index === 1 ? jurisdictions : [];
  const cards = items.map((item, i) => `<li>${icon(marks[i])}<div><strong>${item}</strong>${nodeLabels[i] ? `<small>${nodeLabels[i]}</small>` : ''}</div></li>`).join('');
  const hub = index === 1 ? 'Jurisdiction mapper' : 'RPI assessment engine';
  const visuals = [
    `<div class="journey-filters" aria-label="Asset categories">${assetCategories.map((category, i) => `<button type="button" data-asset-filter="${i}" aria-pressed="${i === 0}">${category}</button>`).join('')}</div><ul class="journey-inventory">${cards}</ul>`,
    `<div class="journey-diagram"><ul>${cards}</ul></div>`,
    `<div class="journey-diagram journey-engine"><svg class="journey-engine-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M25 18V30L50 50 75 30V18M25 82V70L50 50 75 70V82" vector-effect="non-scaling-stroke"/><path class="scene-packet" d="M25 18V30L50 50 75 70V82" pathLength="1" vector-effect="non-scaling-stroke"/></svg><div class="journey-hub"><span class="journey-chip"><svg viewBox="0 0 76 68" aria-hidden="true"><path d="M24 7v8m9-8v8m10-8v8m9-8v8M24 53v8m9-8v8m10-8v8m9-8v8M9 23h10m-10 8h10m-10 8h10m-10 8h10m38-24h10m-10 8h10m-10 8h10m-10 8h10"/><rect x="18" y="14" width="40" height="40" rx="8"/><path d="M28 34h6l4-8 5 15 4-7h3"/></svg></span>${hub}</div><ul>${cards}</ul></div>`,
    postureDashboard(),
    `<div class="journey-proof"><strong>Audit ready</strong><ul>${cards}</ul></div>`,
  ];
  return `<figure class="journey-art journey-art-${index + 1}">
    <figcaption><div class="journey-art-title">${icon(icons[index])}<div><strong>${title}</strong><small>${subtitle}</small></div></div><span>${label}</span></figcaption>
    <div class="journey-artboard">${journeyScene(index)}${visuals[index]}</div>
  </figure>`;
}

function handleJourneyArtwork(event) {
  const button = event.target.closest('button');
  if (!button) return;
  const art = button.closest('.journey-art');
  if (!art) return;
  if (button.hasAttribute('data-asset-filter')) {
    const filter = Number(button.dataset.assetFilter);
    art.querySelectorAll('[data-asset-filter]').forEach(control => control.setAttribute('aria-pressed', String(control === button)));
    art.querySelectorAll('.journey-inventory li').forEach((card, i) => {
      card.classList.toggle('is-muted', filter !== 0 && !assetMatches[filter].includes(i));
    });
    return;
  }
  const dashboard = button.closest('.journey-dashboard');
  if (!dashboard) return;
  const quarter = Number(button.dataset.quarter ?? dashboard.querySelector('[data-quarter][aria-pressed="true"]').dataset.quarter);
  const metric = Number(button.dataset.metric ?? dashboard.querySelector('[data-metric][aria-pressed="true"]').dataset.metric);
  if (button.hasAttribute('data-journey-export')) {
    const report = postureReports[quarter];
    const csv = ['Quarter,Score,' + postureMetrics.join(','), [report.quarter + ' 2026', report.score, ...report.counts].join(',')].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const download = document.createElement('a');
    download.href = url;
    download.download = `truvis-posture-${report.quarter.toLowerCase()}-2026.csv`;
    download.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return;
  }
  const focus = button.hasAttribute('data-quarter') ? `[data-quarter="${quarter}"]` : `[data-metric="${metric}"]`;
  dashboard.outerHTML = postureDashboard(quarter, metric);
  art.querySelector(focus).focus({ preventScroll: true });
}

function renderStage(button, panel) {
  const index = Number(button.dataset.stage);
  const stage = stages[index];
  panel.parentElement.style.setProperty('--journey-stage', index);
  panel.innerHTML = `<div class="journey-body">
    <div class="journey-copy"><span class="eyebrow">STAGE 0${index + 1} / 05</span><h3>${stage.title}</h3><p>${stage.description}</p><div class="journey-lists"><div><strong>TruFlow does</strong><ul>${stage.actions.map(action => `<li>${icon('check')}<span>${action}</span></li>`).join('')}</ul></div><div><strong>Outputs</strong><ul>${journeyOutputs[index].map(output => `<li>${icon('check')}<span>${output}</span></li>`).join('')}</ul></div></div>
      <div class="journey-step-nav"><span>Stage 0${index + 1} of 05</span><div><button type="button" aria-label="Previous stage" data-journey-step="${index - 1}" ${index === 0 ? 'disabled' : ''}>←</button><button type="button" aria-label="Next stage" data-journey-step="${index + 1}" ${index === 4 ? 'disabled' : ''}>→</button></div></div></div>
    ${journeyArtwork(index)}
  </div>`;
}

function renderCase(button, panel) {
  const story = cases[Number(button.dataset.case)];
  panel.innerHTML = `<article class="case-body">
    <div class="case-copy"><span class="eyebrow">${story.tag}</span><h3>${story.title}</h3><h4>The challenge</h4><p>${story.challenge}</p><h4>What TruVis delivered</h4><p>${story.delivery}</p></div>
    <div class="case-result"><span class="eyebrow">REPORTED OUTCOME</span><strong>${story.metric}</strong><p>${story.result}</p><ul>${story.outcomes.map(outcome => `<li>${icon('check')}${outcome}</li>`).join('')}</ul></div>
  </article>`;
}

function bindTabs(listSelector, panelSelector, render) {
  const list = document.querySelector(listSelector);
  const buttons = [...list.querySelectorAll('[role="tab"]')];
  const panel = document.querySelector(panelSelector);

  function select(button, focus = false, manual = false) {
    for (const item of buttons) {
      const active = item === button;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    }
    panel.setAttribute('aria-labelledby', button.id);
    render(button, panel, manual);
    if (focus) button.focus();
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(button, false, true));
    button.addEventListener('keydown', event => {
      let next;
      const vertical = list.getAttribute('aria-orientation') === 'vertical';
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (event.key === (vertical ? 'ArrowDown' : 'ArrowRight')) next = (index + 1) % buttons.length;
      if (event.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) next = (index - 1 + buttons.length) % buttons.length;
      if (next === undefined) return;
      event.preventDefault();
      select(buttons[next], true, true);
    });
  });
  select(buttons[0]);
  return () => {
    const active = buttons.findIndex(button => button.getAttribute('aria-selected') === 'true');
    select(buttons[(active + 1) % buttons.length]);
  };
}

bindTabs('.journey-tabs', '#journey-panel', renderStage);
const journeyPanel = document.querySelector('#journey-panel');
new IntersectionObserver(([entry], observer) => {
  if (!entry.isIntersecting) return;
  journeyPanel.dataset.inView = '';
  observer.disconnect();
}, { threshold: .15 }).observe(journeyPanel);

journeyPanel.addEventListener('click', event => {
  handleJourneyArtwork(event);
  const control = event.target.closest('[data-journey-step]');
  if (!control || control.disabled) return;
  const tab = document.querySelector('#stage-' + control.dataset.journeyStep);
  tab.click();
  tab.focus();
});

bindTabs('.case-selector', '#case-panel', renderCase);
const assuranceStack = document.querySelector('.regulatory-flow');
const playback = assuranceStack.querySelector('.iso-playback');
const autoMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
let autoplay = true;
let stackVisible = false;
let rotationTimer;

const nextLayer = bindTabs('.iso-tabs', '#iso-detail', (button, panel, manual) => {
  assuranceStack.dataset.layer = button.dataset.layer;
  panel.textContent = button.dataset.description;
  if (manual) setAutoplay(false);
});

function scheduleLayer() {
  clearTimeout(rotationTimer);
  if (!autoplay || !autoMotion.matches || !stackVisible || document.hidden ||
      assuranceStack.querySelector('.iso-tabs:focus-within, .iso-detail:focus')) return;
  rotationTimer = setTimeout(() => {
    nextLayer();
    scheduleLayer();
  }, 4000);
}

function setAutoplay(enabled) {
  autoplay = enabled;
  playback.dataset.playing = String(enabled);
  playback.setAttribute('aria-label', enabled ? 'Pause illustration rotation' : 'Resume illustration rotation');
  scheduleLayer();
}

playback.addEventListener('click', () => setAutoplay(!autoplay));
assuranceStack.addEventListener('focusin', scheduleLayer);
assuranceStack.addEventListener('focusout', () => queueMicrotask(scheduleLayer));
document.addEventListener('visibilitychange', scheduleLayer);
autoMotion.addEventListener('change', () => {
  playback.hidden = !autoMotion.matches;
  scheduleLayer();
});
playback.hidden = !autoMotion.matches;
new IntersectionObserver(([entry]) => {
  stackVisible = entry.intersectionRatio >= 0.35;
  scheduleLayer();
}, { threshold: 0.35 }).observe(assuranceStack);

const magneticPointer = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

for (const button of document.querySelectorAll('.header-cta, .hero-actions .button, .final-cta .button')) {
  let bounds;
  button.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && magneticPointer.matches) bounds = button.getBoundingClientRect();
  });
  button.addEventListener('pointermove', event => {
    if (!bounds || !magneticPointer.matches) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    button.style.setProperty('--magnet-x', `${Math.max(-3, Math.min(3, x * 6))}px`);
    button.style.setProperty('--magnet-y', `${Math.max(-2, Math.min(2, y * 4))}px`);
  });
  function resetMagnet() {
    bounds = undefined;
    button.style.removeProperty('--magnet-x');
    button.style.removeProperty('--magnet-y');
  }
  button.addEventListener('pointerleave', resetMagnet);
  button.addEventListener('pointercancel', resetMagnet);
}

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
const dropdowns = [...document.querySelectorAll('.nav-dropdown')];

function setMenu(open) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.innerHTML = icon(open ? 'close' : 'menu');
}

menuButton.addEventListener('click', () => setMenu(!navigation.classList.contains('is-open')));
navigation.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  setMenu(false);
  dropdowns.forEach(dropdown => { dropdown.open = false; });
});

document.addEventListener('click', event => {
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) dropdown.open = false;
  });
  if (!event.target.closest('.site-header')) setMenu(false);
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const openDropdown = dropdowns.find(dropdown => dropdown.open);
  if (openDropdown) {
    openDropdown.open = false;
    openDropdown.querySelector('summary').focus();
  } else if (navigation.classList.contains('is-open')) {
    setMenu(false);
    menuButton.focus();
  }
});
