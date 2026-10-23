/**
 * Left / Right — fixed center index, cascading detail columns
 */

// ─── CONTENT ──────────────────────────────────────────────────────────────

const LEFT_DATA = [
  {
    id: "left-main",
    label: "Left",
    sub: "direction",
    text: "Left is the direction or side that is on the west when someone is facing north. In most writing systems, left is the direction toward the beginning of a line of text. The word derives from the Old English lyft, meaning weak or worthless — a trace of the historical suspicion of the left side found across many cultures.",
    children: [
      { id: "left-politics", label: "Left-wing politics", sub: "political philosophy" },
      { id: "left-hand", label: "Left-handedness", sub: "human biology" },
      { id: "left-brain", label: "Left hemisphere", sub: "neuroscience" },
      { id: "left-turn", label: "Left turn on red", sub: "traffic law" },
      { id: "left-bank", label: "Left bank", sub: "geography" },
      { id: "left-luggage", label: "Left luggage", sub: "travel" },
      { id: "copyleft", label: "Copyleft", sub: "intellectual property" },
      { id: "left-sinister", label: "Sinister (heraldry)", sub: "heraldic term" },
    ]
  },
  {
    id: "left-politics",
    label: "Left-wing politics",
    sub: "political philosophy",
    text: "Left-wing politics covers a spectrum of ideologies that aim to promote equality and challenge social hierarchies. Adherents focus on people they see as disadvantaged and seek to reduce or eliminate inequalities they consider unjustified, sometimes through deep changes to society. What counts as left-wing varies by time and place, ranging from centre-left social democrats to far-left socialists, communists, and anarchists. The term originated in the French Revolution, when deputies who sat to the left of the National Assembly president opposed the monarchy.",
    children: [
      { id: "left-socialism", label: "Socialism", sub: "economic system" },
      { id: "left-progressivism", label: "Progressivism", sub: "political movement" },
    ]
  },
  {
    id: "left-hand",
    label: "Left-handedness",
    sub: "human biology",
    text: "Left-handedness, also known as sinistrality, is the preference for using the left hand for tasks requiring skill and strength. Approximately 10% of people are left-handed. The cause of handedness is not fully understood, but genetics, prenatal hormone exposure, and cultural factors all play roles. Many tools and environments are designed for right-handed use, creating practical challenges for left-handed people. The historical association of left-handedness with misfortune is embedded in language across dozens of cultures.",
    children: [
      { id: "left-sinister", label: "Sinister (heraldry)", sub: "heraldic term" },
    ]
  },
  {
    id: "left-brain",
    label: "Left hemisphere",
    sub: "neuroscience",
    text: "The left cerebral hemisphere of the human brain controls the right side of the body. In most right-handed and many left-handed people, the left hemisphere is dominant for language, including speech production and comprehension. This lateralization of brain function means that damage to the left hemisphere often results in aphasia — difficulty producing or understanding language. The left hemisphere is also typically associated with logical reasoning, sequential processing, and analytic thought, though the strict binary of 'left brain / right brain' personalities has been largely discredited by neuroscience.",
    children: []
  },
  {
    id: "left-turn",
    label: "Left turn on red",
    sub: "traffic law",
    text: "In most countries where traffic drives on the right side of the road, turning left on a red traffic signal is generally prohibited unless a dedicated left turn signal is provided. This contrasts with right-turn-on-red laws, which are permitted in many US states. The prohibition exists because left turns cross oncoming traffic lanes, creating a greater collision risk. Some jurisdictions permit left-on-red from a one-way street onto another one-way street.",
    children: []
  },
  {
    id: "left-bank",
    label: "Left bank",
    sub: "geography",
    text: "A left bank is the side of a river that lies to an observer's left when facing downstream. In Paris, the Seine's left bank — the Rive Gauche — lies on the river's southern side and historically became associated with artists, philosophers, and intellectuals. The term carries cultural weight beyond geography: the Left Bank of Paris was home to Sartre, de Beauvoir, Hemingway, and Gertrude Stein, and came to signify a particular kind of bohemian intellectual life.",
    children: []
  },
  {
    id: "left-luggage",
    label: "Left luggage",
    sub: "travel",
    text: "Left luggage, also called luggage storage or bag storage, is a service that lets travelers temporarily leave their bags so they don't have to carry them. It is different from lost luggage. Commonly offered at airports and train stations through staffed counters or automated lockers, newer services also let travelers store bags at hotels, restaurants, and shops. The phrase 'left luggage' is primarily British English; American English uses 'baggage check' or 'storage locker.'",
    children: []
  },
  {
    id: "copyleft",
    label: "Copyleft",
    sub: "intellectual property",
    text: "Copyleft is a licensing approach that lets people use, study, modify, and share a copyrighted work, while requiring that those same freedoms carry over to any derivative versions. It is most common in software licenses such as the GNU General Public License. Unlike permissive licenses, copyleft keeps modified versions open on the same terms rather than allowing them to become proprietary. The name is a play on 'copyright,' flipping both the word and the conventional logic of intellectual property protection.",
    children: []
  },
  {
    id: "left-socialism",
    label: "Socialism",
    sub: "economic system",
    text: "Socialism is a political and economic philosophy advocating that the means of production, distribution, and exchange should be owned or regulated by the community as a whole. Socialist systems vary from democratic socialism, which operates within parliamentary systems, to revolutionary socialism. Key socialist thinkers include Karl Marx, Friedrich Engels, and Rosa Luxemburg. Modern social-democratic parties often advocate for mixed economies with strong welfare states rather than full public ownership.",
    children: []
  },
  {
    id: "left-progressivism",
    label: "Progressivism",
    sub: "political movement",
    text: "Progressivism is a political philosophy in support of social reform, human progress, and science-based approaches to governance. In the 21st century, it refers to a broadly defined movement that advocates environmental protection, workers' rights, expanded social programs, and reducing economic inequality. The term emerged in the late 19th century United States as a response to rapid industrialization, corporate power, and urban poverty. Progressive movements have historically pushed for policies later adopted as mainstream, including child labor laws, women's suffrage, and the eight-hour workday.",
    children: []
  },
  {
    id: "left-sinister",
    label: "Sinister (heraldry)",
    sub: "heraldic term",
    text: "In heraldry, sinister refers to the left side of the shield as seen from the perspective of the person holding it — which is the right side as seen by an observer facing the shield. The term comes from the Latin word for left. In classical heraldry it is a neutral directional term, but sinister has accumulated a long shadow: the same Latin root gave us the English word with its connotations of evil, a linguistic sedimentation of the historical suspicion of left-handedness across European culture.",
    children: []
  },
];

const RIGHT_DATA = [
  {
    id: "right-main",
    label: "Right",
    sub: "direction, law, politics",
    text: "Right is the direction opposite to left. In law and ethics, a right is a legal or moral entitlement — a normative rule about what is allowed or owed. In politics, the right refers to those who support tradition, hierarchy, and existing institutions. The word's dual meaning — direction and entitlement — is not coincidental: in Roman augury, signs appearing on the right were considered favorable, and dexter (right) gave English 'dexterous,' while sinister (left) gave us its opposite.",
    children: [
      { id: "right-politics", label: "Right-wing politics", sub: "political philosophy" },
      { id: "right-human", label: "Human rights", sub: "international law" },
      { id: "right-property", label: "Property rights", sub: "legal concept" },
      { id: "right-hand", label: "Right-handedness", sub: "human biology" },
      { id: "right-silence", label: "Right to silence", sub: "legal right" },
      { id: "right-of-way", label: "Right of way", sub: "law & infrastructure" },
      { id: "copyright", label: "Copyright", sub: "intellectual property" },
      { id: "right-civil", label: "Civil rights", sub: "constitutional law" },
    ]
  },
  {
    id: "right-politics",
    label: "Right-wing politics",
    sub: "political philosophy",
    text: "Right-wing politics, or rightism, is a range of ideologies that treat social hierarchies and established orders as natural, necessary, or worth preserving. These views typically draw on conservatism, tradition, religion, property rights, and authority. The right is considered the counterpart to left-wing politics on the left–right spectrum. The spectrum is not fixed: what counts as right-wing shifts across time and geography, and the same label has covered 18th-century monarchists, 20th-century fascists, and 21st-century market libertarians.",
    children: [
      { id: "right-conservatism", label: "Conservatism", sub: "political ideology" },
      { id: "right-libertarianism", label: "Libertarianism", sub: "political philosophy" },
    ]
  },
  {
    id: "right-human",
    label: "Human rights",
    sub: "international law",
    text: "Human rights are moral principles that describe certain standards of human behaviour, regularly protected as legal rights in international law. They are commonly understood as inalienable — inherent to every person simply by virtue of being human, not granted by any government and not forfeitable by any act. The Universal Declaration of Human Rights, adopted by the UN General Assembly in 1948 in the aftermath of the Second World War, is the foundational document. Its 30 articles cover civil, political, economic, social, and cultural rights.",
    children: [
      { id: "right-civil", label: "Civil rights", sub: "constitutional law" },
    ]
  },
  {
    id: "right-property",
    label: "Property rights",
    sub: "legal concept",
    text: "Property rights are the legal and social constructs that determine how a resource or good is used and owned. They encompass the right to possess, use, manage, derive income from, and transfer a thing — and to exclude others from it. The concept is foundational to liberal political economy and underpins market economies. Debates over property rights animate much of the left–right divide: the extent to which property can be owned, taxed, regulated, or redistributed is one of the most contested questions in political philosophy.",
    children: []
  },
  {
    id: "right-hand",
    label: "Right-handedness",
    sub: "human biology",
    text: "Right-handedness, or dexterity, is the preference for using the right hand for fine motor tasks. Approximately 90% of people are right-handed, making it the dominant form of handedness worldwide across all known cultures and throughout recorded history. The evolutionary origins of human right-hand preference remain debated; some researchers trace it to language lateralization in the left hemisphere. The word 'dexterous' comes from the Latin dexter, meaning right — the same root that gave us 'dexterity' and contrasts with 'sinister.'",
    children: []
  },
  {
    id: "right-silence",
    label: "Right to silence",
    sub: "legal right",
    text: "The right to silence is a legal safeguard that lets people decline to respond to questioning by police or court officials. Many legal systems worldwide recognize it, either in written law or through long-standing practice. It is closely tied to protection against self-incrimination — a person cannot be forced to give evidence against themselves. In the United States it is protected by the Fifth Amendment; in the United Kingdom, suspects must now be cautioned that while they retain this right, a court may draw inferences from their silence.",
    children: []
  },
  {
    id: "right-of-way",
    label: "Right of way",
    sub: "law & infrastructure",
    text: "A right of way is a designated path that people, vehicles, or utility lines may use to pass through an area, and also the legal entitlement that allows that passage. Physical examples include highways, railroads, canals, footpaths, and the corridors carrying power lines. In traffic law, right of way determines which driver or pedestrian has priority at an intersection. The concept sits at the intersection of property law, infrastructure planning, and everyday life — invisibly structuring most movement through space.",
    children: []
  },
  {
    id: "copyright",
    label: "Copyright",
    sub: "intellectual property",
    text: "Copyright is a form of intellectual property that gives its holder the sole legal authority to reproduce, distribute, modify, display, and perform a creative work, usually for a limited time. It protects the original expression of an idea in literary, artistic, educational, or musical works — not the underlying idea itself. After copyright expires, a work enters the public domain. The tension between copyright and free access to knowledge has intensified with the internet, producing ongoing legal and cultural disputes over digital reproduction, sampling, and remix.",
    children: []
  },
  {
    id: "right-conservatism",
    label: "Conservatism",
    sub: "political ideology",
    text: "Conservatism is a political and social philosophy that promotes retaining traditional institutions and resisting rapid change. Conservatives value continuity, social stability, established authority, and the accumulated wisdom embedded in existing customs and laws. Edmund Burke, responding to the French Revolution in 1790, is often considered the father of modern conservatism — he argued that society is a partnership between the dead, the living, and the unborn, and that inheritance matters more than abstract rights.",
    children: []
  },
  {
    id: "right-libertarianism",
    label: "Libertarianism",
    sub: "political philosophy",
    text: "Libertarianism is a political philosophy that upholds individual liberty as its central value, seeking to minimize the role of the state in people's lives. Libertarians support free markets, private property, and voluntary association, while opposing most forms of government intervention in economics and personal life. The philosophy spans a wide range: from minarchists who want a minimal state limited to courts and defense, to anarcho-capitalists who reject the state entirely. Modern libertarianism in the United States tends to combine social liberalism with classical economic liberalism.",
    children: []
  },
  {
    id: "right-civil",
    label: "Civil rights",
    sub: "constitutional law",
    text: "Civil rights are the rights of individuals to political and social freedom and equality, enforceable against the state. Civil rights laws prohibit discrimination and ensure equal treatment in voting, employment, education, housing, and public accommodations. The American Civil Rights Movement of the 1950s–60s, led by figures including Martin Luther King Jr., Rosa Parks, and John Lewis, achieved landmark legislation: the Civil Rights Act of 1964 and the Voting Rights Act of 1965. Civil rights movements have since extended the framework to gender, disability, sexual orientation, and other grounds.",
    children: []
  },
];

// Build lookup maps
const LEFT_MAP  = Object.fromEntries(LEFT_DATA.map(e => [e.id, e]));
const RIGHT_MAP = Object.fromEntries(RIGHT_DATA.map(e => [e.id, e]));

// ─── DOM REFS ──────────────────────────────────────────────────────────────

const leftIndexList    = document.getElementById('left-index-list');
const rightIndexList   = document.getElementById('right-index-list');
const leftDetailStrip  = document.getElementById('left-detail-strip');
const rightDetailStrip = document.getElementById('right-detail-strip');
const leftStage        = document.getElementById('left-detail-stage');
const rightStage       = document.getElementById('right-detail-stage');

// ─── BUILD INDEX LISTS ─────────────────────────────────────────────────────

function buildIndexList(container, data, side) {
  container.innerHTML = '';
  data.forEach(entry => {
    const btn = document.createElement('button');
    btn.className = 'index-entry';
    btn.dataset.id = entry.id;
    btn.innerHTML = `${entry.label}<br><small style="font-style:italic;font-weight:normal;font-size:0.85em;color:#666">${entry.sub}</small>`;
    btn.addEventListener('click', () => openDetail(entry.id, side));
    container.appendChild(btn);
  });
}

buildIndexList(leftIndexList,  LEFT_DATA,  'left');
buildIndexList(rightIndexList, RIGHT_DATA, 'right');

// ─── SCROLL CONTROLLERS ────────────────────────────────────────────────────
// offset >= 0: how far scrolled away from the newest col (at the spine).
// Left strip (right:0, row-reverse): translateX(+offset) reveals older cols leftward.
// Right strip (left:0, row):         translateX(-offset) reveals older cols rightward.

function makeScrollController(stage, strip, side) {
  let offset = 0;
  let isDragging = false;

  function getMaxOffset() {
    return Math.max(0, strip.scrollWidth - stage.offsetWidth);
  }

  function clampAndApply(raw) {
    const max = getMaxOffset();
    offset = Math.max(0, Math.min(max, raw));
    strip.style.transform = side === 'left'
      ? `translateX(${offset}px)`
      : `translateX(-${offset}px)`;
  }

  // Wheel
  stage.addEventListener('wheel', (e) => {
    if (strip.children.length === 0) return;
    e.preventDefault();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    // Scrolling "away from center" (left on left side, right on right side) increases offset.
    // On left: scrolling left = negative delta → increase offset → translateX positive → reveals older
    // On right: scrolling right = positive delta → increase offset → translateX negative → reveals older
    clampAndApply(side === 'left' ? offset - delta * 0.8 : offset + delta * 0.8);
  }, { passive: false });

  // Pointer drag — but NOT when clicking a button inside the strip
  stage.addEventListener('pointerdown', (e) => {
    if (strip.children.length === 0) return;
    if (e.target.closest('button')) return; // let button clicks through
    isDragging = true;
    stage.setPointerCapture(e.pointerId);
    stage._dragStartX = e.clientX;
    stage._dragStartOffset = offset;
  });

  stage.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - stage._dragStartX;
    // Drag away from spine reveals older cols
    clampAndApply(side === 'left'
      ? stage._dragStartOffset - dx
      : stage._dragStartOffset - dx);
  });

  stage.addEventListener('pointerup',     () => { isDragging = false; });
  stage.addEventListener('pointercancel', () => { isDragging = false; });

  return {
    resetToNewest() {
      offset = 0;
      strip.style.transform = 'translateX(0)';
    }
  };
}

const leftScroll  = makeScrollController(leftStage,  leftDetailStrip,  'left');
const rightScroll = makeScrollController(rightStage, rightDetailStrip, 'right');

// ─── PLACEHOLDERS ──────────────────────────────────────────────────────────

function makePlaceholder(text) {
  const p = document.createElement('div');
  p.className = 'stage-placeholder';
  p.textContent = text;
  return p;
}

const leftPlaceholder  = makePlaceholder('← click a term');
const rightPlaceholder = makePlaceholder('click a term →');
leftStage.appendChild(leftPlaceholder);
rightStage.appendChild(rightPlaceholder);

function updatePlaceholder(side) {
  const ph    = side === 'left' ? leftPlaceholder  : rightPlaceholder;
  const strip = side === 'left' ? leftDetailStrip  : rightDetailStrip;
  ph.classList.toggle('hidden', strip.children.length > 0);
}

// ─── OPEN DETAIL COLUMN ────────────────────────────────────────────────────

function openDetail(id, side) {
  const map       = side === 'left' ? LEFT_MAP        : RIGHT_MAP;
  const strip     = side === 'left' ? leftDetailStrip : rightDetailStrip;
  const scroll    = side === 'left' ? leftScroll      : rightScroll;
  const indexList = side === 'left' ? leftIndexList   : rightIndexList;

  const entry = map[id];
  if (!entry) return;

  // Mark active in index
  indexList.querySelectorAll('.index-entry').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
  });

  // ── Column shell ──
  const col = document.createElement('div');
  col.className = 'detail-col';
  col.dataset.id = id;

  // ── Header ──
  const header = document.createElement('div');
  header.className = 'detail-col-header';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'detail-col-eyebrow';
  eyebrow.textContent = side === 'left' ? '← Left' : 'Right →';

  const title = document.createElement('div');
  title.className = 'detail-col-title';
  title.textContent = entry.label;

  const subEl = document.createElement('div');
  subEl.style.cssText = 'font-style:italic;font-size:0.85em;color:#666;margin-top:0.2rem;font-family:inherit;';
  subEl.textContent = entry.sub;

  // ── Close button ──
  const closeBtn = document.createElement('button');
  closeBtn.className = 'detail-col-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '×';
  closeBtn.addEventListener('click', () => {
    col.remove();
    updatePlaceholder(side);
  });

  header.appendChild(eyebrow);
  header.appendChild(title);
  header.appendChild(subEl);
  header.appendChild(closeBtn);

  // ── Body ──
  const body = document.createElement('div');
  body.className = 'detail-col-body';

  const textEl = document.createElement('div');
  textEl.className = 'detail-text';
  textEl.innerHTML = `<p>${entry.text}</p>`;
  body.appendChild(textEl);

  if (entry.children && entry.children.length > 0) {
    const seeLabel = document.createElement('span');
    seeLabel.className = 'see-also-label';
    seeLabel.textContent = 'See also';
    body.appendChild(seeLabel);

    entry.children.forEach(child => {
      const childEntry = map[child.id];
      const subBtn = document.createElement('button');
      subBtn.className = 'sub-entry';
      subBtn.innerHTML = `${child.label} <em style="font-weight:normal;color:#666;font-size:0.9em">— ${child.sub}</em>`;

      if (childEntry) {
        subBtn.addEventListener('click', () => openDetail(child.id, side));
      } else {
        subBtn.style.opacity = '0.4';
        subBtn.style.cursor = 'default';
      }
      body.appendChild(subBtn);
    });
  }

  col.appendChild(header);
  col.appendChild(body);

  // Prepend: index 0 = nearest spine on both sides
  // (left strip: row-reverse → index 0 = rightmost = nearest spine)
  // (right strip: row → index 0 = leftmost = nearest spine)
  strip.prepend(col);
  scroll.resetToNewest();
  updatePlaceholder(side);
}