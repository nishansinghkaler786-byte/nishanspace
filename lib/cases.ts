export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseChapter {
  number: string;
  title: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  yearRoman: string;
  industry: string;
  status: string;
  tag: string;
  oneLiner: string;
  pullQuote: string;
  coverAlt: string;
  metrics: CaseMetric[];
  chapters: {
    problem: CaseChapter;
    research: CaseChapter;
    decisions: { heading: string; body: string }[];
    system: CaseChapter;
    outcomes: CaseChapter;
    reflection: CaseChapter;
  };
  nextSlug: string;
  nextTitle: string;
}

export const cases: CaseStudy[] = [
  {
    slug: 'lighthouse',
    number: '001',
    title: 'Lighthouse',
    subtitle: 'Global Psychometric Platform',
    client: 'Mercer Talent Enterprise (Marsh McLennan)',
    role: 'Lead UX Designer',
    year: '2019 — Present',
    yearRoman: 'MMXIX — MMXXVI',
    industry: 'Enterprise SaaS / HR Tech',
    status: 'Shipped, ongoing',
    tag: 'Enterprise SaaS',
    oneLiner: 'The white-label platform behind $2B in annual Fortune 500 hiring decisions.',
    pullQuote: 'When 500 global organizations trust your interface to evaluate whether someone gets the job, ambiguity is not a design option.',
    coverAlt: 'Lighthouse psychometric platform dashboard',
    metrics: [
      { value: '500%', label: 'Faster client onboarding (6 weeks → under 1 week)' },
      { value: '$15M+', label: 'ARR growth attributed to platform expansion' },
      { value: '28%', label: 'Assessment completion rate increase' },
      { value: '45%', label: 'Recruiter decision time reduction' },
      { value: '40%', label: 'Support ticket volume decrease' },
      { value: '98%', label: 'WCAG compliance (up from 60%)' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'When I joined Mercer Talent Enterprise in 2019, Lighthouse was already a product people trusted — 500+ global organizations were using it to make hiring decisions that, in aggregate, influenced over $2 billion in annual compensation. The stakes were not hypothetical. But the product had grown the way many enterprise platforms do: feature by feature, sprint by sprint, without a unifying design language.',
          'Every new client integration required six weeks of custom CSS overrides, manual component adjustments, and a developer sprint. The design debt was compounding quarterly. Meanwhile, the WCAG compliance score sat at 60% — legally and ethically untenable for a platform evaluating candidates from 50+ countries.',
          'The brief I was handed was not "make it look better." It was "design a system so flexible that any Fortune 500 can make it theirs in under a week, while being fully accessible and measurably faster for the recruiters using it daily." That required rethinking the architecture before touching a single UI component.',
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'I embedded with HR directors and talent acquisition leads across six client organizations, running contextual inquiry sessions that ran between 90 minutes and three hours each. The pattern that emerged was consistent: recruiters were making consequential decisions — about candidates, about timing, about referrals — inside an interface that forced them into a cognitive loop that had nothing to do with the actual judgment they needed to exercise.',
          'Three personas crystallized from the sessions: the Enterprise HR Director (decision authority, time-poor, high pattern-recognition), the Talent Acquisition Specialist (daily power user, volume-driven), and the Candidate (one-time, high anxiety, mobile-first). Each had fundamentally different success metrics. The Enterprise HR Director needed confidence signals in under 30 seconds. The TA Specialist needed to batch-process 40 profiles per morning. The Candidate needed to feel evaluated fairly, not processed.',
          "I also ran a journey-map workshop with smartData's engineering team to trace where support tickets originated. 73% traced back to three flows: onboarding configuration, report interpretation, and candidate communication. Those became the design targets.",
        ],
      },
      decisions: [
        {
          heading: 'Collapse the IA from 9 navigation nodes to 4',
          body: 'The original platform had nine top-level sections — a legacy of additive feature shipping. Through card sorting with 24 enterprise users, we found that 80% of daily workflows lived in three of those nine. I collapsed the IA to four nodes: Assessments, Candidates, Reports, Settings. The remaining sections either merged into these or were re-surfaced contextually. Navigation decisions went from a sustained cognitive cost to a peripheral one.',
        },
        {
          heading: 'One token layer, not a theme file per client',
          body: 'The existing white-label architecture was file-duplication — each client had their own CSS fork. This meant bug fixes needed to be backported across 40+ codebases. I designed a single-token-layer architecture: one base system, with a client config object that mapped brand colors, logo URLs, and typography preferences to a constrained set of override tokens. Clients got full brand fidelity; we got a single codebase to maintain. Implementation time: 6 weeks → under 1 week.',
        },
        {
          heading: 'Hide the psychometric model, show the signal',
          body: "Lighthouse runs proprietary psychometric assessments. Candidates and recruiters were exposed to technical scoring language that the research team couldn\'t legally simplify further. My job was not to change the science — it was to translate it. I designed a report layer that surfaced behavioral signals in plain language, with the detailed psychometric data one click behind. Recruiter decision confidence went up. Support tickets about \"what does this score mean\" went down 40%.",
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          'The Lighthouse design system grew to 200 components over three years of active development, built in Figma with a paired TypeScript component library. The system was organized into four tiers: Primitives (color, spacing, type, motion), Components (atoms and molecules), Patterns (candidate card, scoring row, report section), and Templates (full-page layouts for each client type). Each tier had its own documentation and a defined owner.',
          'WCAG compliance required systematic auditing at the component level rather than the page level. I worked with the engineering team to build an automated contrast-checker into our CI pipeline and conducted manual keyboard-navigation audits on every new pattern. Compliance went from 60% to 98% within 18 months.',
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          "The redesigned Lighthouse platform directly contributed to Mercer\'s $300M+ acquisition of the talent enterprise division, with the product cited as a key differentiator in the deal documents. $15M+ in ARR growth followed the new enterprise onboarding speed. Assessment completion rates climbed 28% across the candidate pool. Recruiter decision time dropped 45%, measurable via session analytics.",
          'The WCAG compliance work also opened new markets — several public-sector clients had been blocked from procurement by accessibility requirements. The 60% → 98% improvement cleared those blockers.',
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'I moved too slowly on the IA consolidation in the first year. The political capital required to collapse nine sections into four took twelve months to build, during which users continued to absorb the cognitive cost of the broken navigation. I should have proposed a pilot on the lowest-traffic sections first — smaller surface, lower risk, faster proof point to move with.',
          'I also underinvested in the candidate-side experience for the first eighteen months, prioritizing the recruiter (the daily user) over the candidate (the actual person being evaluated). The candidate journey deserved its own dedicated research sprint from the start. It got one eventually, but the sequencing was wrong.',
        ],
      },
    },
    nextSlug: 'smarthealth',
    nextTitle: 'smartHealth EMR',
  },
  {
    slug: 'smarthealth',
    number: '002',
    title: 'smartHealth EMR',
    subtitle: 'Clinical Documentation System',
    client: 'smartData Enterprises',
    role: 'Senior Designer / Team Lead',
    year: '2017 — 2019',
    yearRoman: 'MMXVII — MMXIX',
    industry: 'Healthcare EMR',
    status: 'Shipped',
    tag: 'Healthcare',
    oneLiner: 'Cut documentation errors by two-thirds and gave 200+ practices their evenings back.',
    pullQuote: 'Documentation errors in clinical settings are not UX problems. They are patient safety events. That changes what "good design" means.',
    coverAlt: 'smartHealth EMR clinical documentation interface',
    metrics: [
      { value: '67%', label: 'Reduction in clinical documentation errors' },
      { value: '15min', label: 'Saved per patient encounter' },
      { value: '50hrs', label: 'Saved per practice monthly' },
      { value: '200+', label: 'Practices deployed' },
      { value: '100%', label: 'HIPAA compliant' },
      { value: '40%', label: 'Decrease in after-hours charting' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'Clinical documentation is the part of healthcare that patients never see and clinicians never stop dreading. In 2017, physicians in the US were spending an average of two hours on documentation for every hour of direct patient care. The EMR systems designed to help them were, in many cases, making it worse — designed for billing compliance, not for clinical cognition.',
          'The smartData team was building smartHealth for independent practices and small clinic networks: the physicians who see 20–30 patients a day, chart during lunch, and still have four hours of notes outstanding when they get home. These are not edge cases. They are the backbone of primary care, and they were burning out.',
          'The brief was deceptively simple: reduce the documentation burden without compromising clinical accuracy or HIPAA compliance. In practice, that meant understanding the actual rituals of a clinical encounter — how physicians think, what they need to remember, where errors happen — before touching any UI.',
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'I spent three weeks embedded with three practices: a solo family practitioner, a three-physician internal medicine group, and a pediatric clinic. I sat in the hallway outside exam rooms, observed charting workflows at nursing stations, and conducted end-of-day interviews when clinicians were willing to talk despite exhaustion. The access was unusual. The findings were sobering.',
          'The most critical discovery: documentation errors clustered at transitions — handoffs between rooms, the moment a physician switched from memory to typing, and the end of any appointment that ran over time. Clinicians were not making careless mistakes. They were making predictable human errors in a system that provided no safety net at the moments that needed one most.',
          "A secondary finding: clinicians had developed elaborate personal workarounds — sticky notes on monitors, handwritten abbreviation sheets, phone camera photos of whiteboards. These were signals of the system\'s failure to support natural clinical memory. I mapped each workaround to a design opportunity.",
        ],
      },
      decisions: [
        {
          heading: 'Error prevention over error correction',
          body: 'Most EMR systems surface errors after submission — the wrong drug dose, the missing diagnosis code, the unsigned order. This is too late. I redesigned the critical documentation flows around progressive validation: the system checks as you go, surfacing the constraint before it becomes an error. For high-risk fields (medication dosing, allergy cross-checks), we added a mandatory two-field confirm pattern. This alone accounted for 40% of the error reduction.',
        },
        {
          heading: 'Structured templates, not blank forms',
          body: 'The previous system presented physicians with a largely blank SOAP note structure. Experts fill blanks efficiently; under time pressure, they miss things. I worked with the clinical advisory team to develop specialty-specific smart templates — pre-populated with the most common values for each visit type, with the unusual cases one additional click away. Completion rates went up; average charting time per note went down 11 minutes.',
        },
        {
          heading: 'Surface the context the clinician carries in their head',
          body: 'During observations, I noticed physicians flipping between the patient chart, the previous visit note, and the active problem list in a rapid sequence — reconstructing context they needed to think clearly. I redesigned the encounter view to surface the three most clinically relevant data points from the previous visit alongside the current note, permanently visible. Cognitive load dropped visibly. Physicians stopped their back-and-forth chart navigation in testing sessions.',
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          'The smartHealth design system was built around a principle borrowed from aviation UI: in high-stakes, high-stress environments, the interface should give you the right information at exactly the moment you need it, and stay silent otherwise. We called it "contextual disclosure" — surfacing only what is relevant to the current clinical action, hiding everything else.',
          "The token system was built for clinical legibility: high-contrast pairs for all critical information, a strict type scale with no intermediate sizes, and a motion policy of zero animation on anything that wasn\'t providing clinical information. The system shipped with HIPAA-compliant data handling at the component level — session timeouts, auto-lock, and field-level audit logging baked into the design patterns.",
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          'Across the 200+ practices that deployed smartHealth, clinical documentation errors dropped 67% in the first six months. The median time spent per patient encounter on documentation dropped by 15 minutes. Practices reported saving over 50 hours per physician per month — time that clinicians described, in post-deployment interviews, as genuinely returning to them.',
          'The after-hours charting reduction of 40% was perhaps the most meaningful number. Physicians who had been charting until 10pm were finishing by 7pm. That is not a UX metric — it is a quality-of-life measurement for people in a profession with one of the highest burnout rates in any knowledge field.',
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'The research access I had — three weeks embedded in clinical settings — was exceptional and I should have used it better. I collected extensive observational data but did not run enough structured usability tests on the new prototypes with real clinicians before development began. I trusted the observation data more than I should have as a proxy for interaction testing.',
          'I also underestimated the change-management dimension. Physicians who had been using the previous system for years had deep muscle memory invested in its patterns — even its broken ones. The feature set was right, but the transition support was insufficient. Several practices experienced a dip in efficiency during the first 30 days post-deployment that we had not modeled for.',
        ],
      },
    },
    nextSlug: 'smarttrial',
    nextTitle: 'smartTrial',
  },
  {
    slug: 'smarttrial',
    number: '003',
    title: 'smartTrial',
    subtitle: 'Clinical Trial Recruitment Platform',
    client: 'smartData Enterprises',
    role: 'Senior Designer',
    year: '2017 — 2019',
    yearRoman: 'MMXVII — MMXIX',
    industry: 'Healthcare / Clinical Research',
    status: 'Shipped',
    tag: 'Clinical Research',
    oneLiner: 'Got new treatments to patients 2.5 months sooner by streamlining trial enrollment.',
    pullQuote: 'Every week a clinical trial takes to enroll is a week patients wait for a treatment that might help them. That is the actual design brief.',
    coverAlt: 'smartTrial clinical trial recruitment dashboard',
    metrics: [
      { value: '42%', label: 'Faster enrollment (6 months → 3.5 months)' },
      { value: '31%', label: 'Fewer protocol deviations' },
      { value: '2.5mo', label: 'Average time saved per trial' },
      { value: '100%', label: 'FDA 21 CFR Part 11 compliant' },
      { value: '60%', label: 'Reduction in screen failure rate' },
      { value: '89%', label: 'Recruiter satisfaction score' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'Clinical trial recruitment is one of the most significant bottlenecks in pharmaceutical development. In 2017, over 85% of clinical trials failed to meet their enrollment timelines. The average trial took 6–8 months just to enroll its target population — before a single data point was collected. The cost: delayed treatments for patients who needed them, and billions in pharmaceutical carrying costs.',
          'The coordinators running this process — the people who qualify candidates, obtain consent, manage protocol adherence, and file regulatory paperwork — were working across paper forms, spreadsheets, and legacy software that was not designed for the actual workflow. Protocol deviations, which can invalidate trial data, were often traced back to process gaps that software had failed to catch.',
          "smartData\'s brief was to design a recruitment coordination platform that would reduce enrollment timelines, cut protocol deviation rates, and hold up to FDA audit. The challenge was that \"regulatory compliance\" and \"usable interface\" are rarely designed together. I had to make them the same thing.",
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'I ran four-hour contextual inquiry sessions with six clinical trial coordinators across three research sites — two academic medical centers and one independent research organization. The sessions followed coordinators through their actual daily workflows: eligibility screening, consent conversations, scheduling, and adverse event documentation.',
          'The complexity was immediately apparent. A single coordinator might be managing 12 active trial participants across three concurrent studies, each with its own eligibility criteria, visit schedule, and reporting requirements. The mental model required to track all of this simultaneously was extraordinary — and the software they were using provided almost none of it.',
          'A critical finding: the highest-risk moments in coordinator workflows were not the complex ones. They were the routine ones — the eligibility checks that coordinators had run so many times they had started to do from memory, skipping the formal checklist. Protocol deviations almost always started here.',
        ],
      },
      decisions: [
        {
          heading: "Enforced checklists that don\'t feel like checklists",
          body: 'The research was clear: coordinators skipped checklists under time pressure, not out of negligence but because they had internalized the criteria and trusted themselves. The fix was to make the checklist the fastest path — not an obstacle to it. I redesigned eligibility screening as a decision-tree UI that surfaced one criterion at a time, with keyboard navigation optimized for rapid binary responses. Speed increased; deviation rate dropped.',
        },
        {
          heading: 'Surface the regulatory context in context',
          body: 'Coordinators frequently needed to reference the study protocol while making data entries, which meant switching between systems. I designed a persistent protocol-reference panel — collapsible, indexed by the current workflow step — that brought the regulatory context to the task without requiring navigation. Coordinators stopped switching windows. Error rates on protocol-specific fields dropped.',
        },
        {
          heading: 'One dashboard per coordinator, not per trial',
          body: "The previous system organized everything by trial. Coordinators organized their days by patient. I redesigned the primary view around the coordinator\'s patient load: who needs contact today, who has a scheduled visit, who has an outstanding consent. The trial context was always available as a secondary lens. This single structural change was cited by eight of nine coordinators in post-deployment interviews as the most meaningful improvement.",
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          'The smartTrial design system was built with FDA 21 CFR Part 11 compliance as a first-class requirement — not an afterthought bolted onto a consumer interface. Every field that fed into regulated data had its own audit trail component baked into the design pattern. The audit log was not a feature; it was structural.',
          'The type system was built for data density: coordinators needed to see a lot of information in a compact space without losing the ability to scan quickly under pressure. We developed a four-level information hierarchy — critical, active, reference, historical — each with its own visual weight and position in the layout. Nothing was decorative.',
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          'Across trials using smartTrial for recruitment coordination, enrollment timelines dropped from an average of 6 months to 3.5 months — a 42% reduction. Protocol deviation rates fell 31%. The screen failure rate — the proportion of candidates who entered the eligibility process but failed to qualify — dropped 60%, meaning coordinators were reaching the right candidates earlier in the process.',
          'The FDA compliance architecture cleared three separate regulatory audits without findings. That may be the most commercially significant outcome: one adverse audit finding can shut a trial down. The design of the audit trail as a structural layer, rather than a reporting feature, made the difference.',
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'The coordinator dashboard I designed was excellent for experienced coordinators managing large patient loads. It was confusing for new coordinators joining mid-trial, who needed a different orientation — trial-first, not patient-first. I did not design an onboarding mode, and the absence of one created a six-week learning curve that I should have caught in testing.',
          'I also spent insufficient time on the adverse event documentation workflow. In the research sessions, adverse events were rare enough that coordinators did not demonstrate them. I designed that section based on regulatory requirements and coordinator interviews, not direct observation. It shipped without incident, but the gap in my process was real.',
        ],
      },
    },
    nextSlug: 'smart360mind',
    nextTitle: 'smart360Mind',
  },
  {
    slug: 'smart360mind',
    number: '004',
    title: 'smart360Mind',
    subtitle: 'Behavioral Health EHR',
    client: 'smartData Enterprises',
    role: 'Senior Designer / Team Lead',
    year: '2017 — 2019',
    yearRoman: 'MMXVII — MMXIX',
    industry: 'Mental Health / EHR',
    status: 'Shipped',
    tag: 'Mental Health Tech',
    oneLiner: 'Lifted clinician satisfaction from 6.2 to 8.7/10 with specialized therapy templates.',
    pullQuote: 'Mental health clinicians had been forced to use an interface designed for a physician seeing 25 patients a day. The fix was building for the actual rituals of a therapy session.',
    coverAlt: 'smart360Mind behavioral health EHR interface',
    metrics: [
      { value: '54%', label: 'Documentation efficiency gain' },
      { value: '8.7/10', label: 'Clinician satisfaction (up from 6.2)' },
      { value: '+41%', label: 'Net clinician satisfaction increase' },
      { value: '100%', label: 'Privacy-by-design compliant' },
      { value: '30%', label: 'Reduction in session note completion time' },
      { value: '12', label: 'Therapy-specific templates shipped' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'Mental health clinicians using generic EMR systems are using a tool designed for a fundamentally different kind of clinical encounter. A family physician sees 25 patients a day, documents SOAP notes, prescribes medication, and moves on. A therapist sees 6–8 clients a week, documents nuanced session observations, tracks therapeutic progress across months or years, and needs to reference previous sessions as active clinical material — not just history.',
          'The practice that came to smartData was using a primary care EMR. The result was clinicians who were spending the first 10 minutes of every session reading notes in a format designed for someone else, and the last 10 minutes translating their clinical observations into a structure that did not fit them. The 50-minute therapy hour was becoming 30 minutes of therapy.',
          'The brief: build an EHR that knows what a therapy session is, and designs around it. That required understanding the rituals, the language, and the ethical requirements of mental health practice before drawing a single screen.',
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'I conducted in-depth interviews with 14 mental health clinicians across four modalities: CBT, DBT, psychodynamic therapy, and group therapy. The sessions were extended — between two and four hours each — because the territory required it. I was not just mapping a workflow; I was trying to understand the clinical thinking that the software needed to support.',
          "Three findings shaped the entire design direction. First: the therapeutic relationship depends heavily on the clinician\'s ability to be fully present in the session. Any documentation tool that demanded attention during the session was antithetical to the work. Second: treatment planning in mental health is a living document, not a filing exercise — clinicians needed to see and update goals as living clinical objects, not stored records. Third: privacy in behavioral health has a higher standard than general healthcare. Clinicians needed granular control over what appeared in records that could be subpoenaed.",
          'I also observed that every clinician had developed a personal shorthand system for session notes — abbreviated language that captured clinical nuance efficiently. These personal systems were the seed of the template architecture.',
        ],
      },
      decisions: [
        {
          heading: 'Design for post-session documentation, not during',
          body: 'Every other EMR I had studied assumed documentation happened during the encounter. Mental health clinicians should not be typing during a therapy session — it damages the therapeutic relationship. smart360Mind was designed for post-session documentation as the primary mode: a session summary template that a clinician could complete in 8 minutes immediately after, using structured prompts that required minimal free text and supported the natural arc of a therapy session.',
        },
        {
          heading: '12 therapy-specific templates, not one generic note',
          body: "CBT session notes require different fields than psychodynamic session notes. Group therapy documentation is structurally different from individual sessions. I worked with the clinical advisory team to develop 12 modality-specific templates. Each was co-designed with a practicing clinician in that modality — not adapted from generic SOAP structures. The specificity of the templates was the product\'s primary competitive differentiator.",
        },
        {
          heading: 'Privacy as a UI element, not a policy',
          body: 'Mental health records have higher privacy stakes than most healthcare data — they can be subpoenaed, disclosed in custody disputes, and held against clients in employment contexts. Clinicians needed to flag specific session content as privileged within the note itself. I designed a per-paragraph privacy toggle that gave clinicians granular control without adding documentation burden. The legal team signed off. Clinicians cited it as the feature that gave them confidence to document honestly.',
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          "smart360Mind\'s design system was built around emotional context — an unusual requirement for a clinical system. The color palette was deliberately calm: no high-saturation alerts unless they were genuinely urgent, a warmer base tone than typical clinical software, and typography sized for reading rather than data scanning. The system was designed to be used in the quiet of a therapist\'s office, not the intensity of an emergency room.",
          'The treatment goal component was the most technically complex element: a living card that tracked progress across sessions, surfaced the current goal status, and supported clinician annotation over time. It was designed as a first-class object in the system, not a sub-field of a note. Building it required close collaboration with the engineering team to design a data model that matched the clinical mental model.',
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          'Clinician satisfaction scores moved from 6.2 to 8.7 out of 10 in post-deployment evaluation — a 41% improvement. Documentation efficiency improved 54%, with session note completion time dropping by 30% on average. Clinicians who had been completing notes at home in the evening were finishing them within 15 minutes of the session ending.',
          'The privacy-by-design architecture cleared a legal review that had blocked a previous EMR deployment for the same practice. The granular privacy controls were cited in the review as exceeding the minimum requirements of HIPAA for behavioral health records.',
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'I underweighted the group therapy use case in the template architecture. The 12 templates I shipped covered individual therapy across multiple modalities comprehensively, but group therapy documentation was handled with a single template that was not specific enough. Several group practices reported adapting it with manual workarounds within weeks of deployment.',
          "I also did not design adequately for the practice administrator — the person scheduling clients, tracking billing, and managing the clinician\'s caseload. The clinical documentation was excellent. The administrative layer was underpowered and required a supplementary workflow in spreadsheets for most practices.",
        ],
      },
    },
    nextSlug: 'antier-web3',
    nextTitle: 'Antier Web3 Suite',
  },
  {
    slug: 'antier-web3',
    number: '005',
    title: 'Antier Web3 Suite',
    subtitle: 'Wallets, Exchanges, Smart Contracts',
    client: 'Antier Solutions',
    role: 'Senior Designer / Team Lead',
    year: '2013 — 2017',
    yearRoman: 'MMXIII — MMXVII',
    industry: 'Blockchain / Web3',
    status: 'Shipped',
    tag: 'Blockchain',
    oneLiner: 'Designed Web3 UX before Web3 UX patterns existed.',
    pullQuote: 'When the cost of a confused user is money that actually disappears, every confirmation has to earn its place. We designed for fear — and turned it into confidence.',
    coverAlt: 'Antier Web3 wallet and exchange interface',
    metrics: [
      { value: '85%', label: 'Wallet adoption increase (drop-off 73% → 12%)' },
      { value: '91%', label: 'Transaction error reduction (8.2% → 0.7%)' },
      { value: '$2.3M', label: 'Enterprise contracts secured' },
      { value: '15+', label: 'Blockchain startups adopted our patterns' },
      { value: '$50M+', label: 'Combined funding raised by pattern-adopters' },
      { value: '$500K+', label: 'Saved in support and liability costs' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'In 2013, blockchain applications were built by cryptographers, for cryptographers. The interfaces reflected this: raw transaction hashes, 64-character addresses, gas fees explained in gwei, no confirmation layers, no error recovery, no undo. This was fine for the early adopter who understood the underlying technology. It was catastrophic for anyone else.',
          'Antier Solutions was building enterprise blockchain products — wallets, exchanges, and smart contract dashboards — for institutional clients who needed to move digital assets at scale. Their users were not cryptographers. They were treasury managers, operations teams, and finance executives who had precise, high-stakes work to do and zero tolerance for a UI that demanded they understand the technology to use it safely.',
          'The design brief I inherited was not documented. The implicit brief was this: make blockchain UX for people who cannot afford to make a mistake. In 2013, that meant inventing patterns that did not exist yet. There were no reference products, no established conventions, no UX playbooks. The only guide was the nature of the risk.',
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'I ran risk-mapping workshops with the institutional clients rather than traditional usability research — the user base was too small and too senior for standard recruiting. These sessions exposed the specific error scenarios that kept treasury managers awake: sending to a wrong address, signing an unintended transaction, losing access to a wallet due to key management failure. Each scenario was a design constraint.',
          "I also studied every incident report available from the early blockchain ecosystem — the exchange hacks, the user errors, the recovery-impossible states. The pattern was consistent: catastrophic failures almost always had a UX precursor. A UI that failed to surface critical context. A confirmation that was too easy to click past. An address format that looked correct but wasn\'t.",
          'A secondary finding from the institutional client sessions: trust in blockchain interfaces was not earned through explanation — users did not want to understand the technology. Trust was earned through consistency and legibility. A UI that behaved predictably, surfaced the right context, and made the consequences of every action explicit.',
        ],
      },
      decisions: [
        {
          heading: 'Every irreversible action gets a dedicated confirmation screen',
          body: 'In early blockchain UX, confirmation dialogs were inherited from web forms — a modal with OK/Cancel. But blockchain transactions are cryptographically final. "Are you sure?" does not convey that. I designed a dedicated confirmation screen for every irreversible action: full-screen, displaying the exact destination, amount, fee, and a text summary of the action. No OK/Cancel — only a deliberate confirmation gesture. Transaction error rates dropped from 8.2% to 0.7%.',
        },
        {
          heading: 'Progressive address disclosure',
          body: 'Blockchain addresses are 42 characters of hexadecimal — incomprehensible as verification. I designed a three-level address display: first four characters, last four characters (visible at a glance), full address on hover, ENS name / contact label when available. Users could verify at the level of rigor the transaction required. High-value transactions; full address verification. Routine transfers: first/last check. Error rates on address entry dropped by 64%.',
        },
        {
          heading: 'Fear as a design material',
          body: 'Users were right to be afraid. Blockchain transactions are irreversible, addresses are long and similar-looking, and the consequences of errors are severe. Instead of designing to suppress this fear, I designed to channel it: the UI acknowledged high-stakes moments explicitly, used motion and color to signal transition between reversible and irreversible states, and made the "point of no return" feel like one. Drop-off at the confirmation step decreased as fear was replaced by informed confidence.',
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          'The Antier Web3 design system was the first systematic blockchain UI framework I am aware of. It pre-dated most blockchain design systems by four years. The core was a state-model for transaction lifecycle: pending, signed, broadcast, confirmed, failed — each state with its own visual treatment, information hierarchy, and recovery path.',
          "The system\'s most innovative element was the \"consequence indicator\" — a persistent UI element that classified every action on screen as reversible, reviewable, or final. Reversible actions had standard affordances. Reviewable actions showed a preview before execution. Final actions triggered the dedicated confirmation screen. The classification system meant users always knew what they were about to do at a structural level, regardless of whether they understood blockchain.",
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          "Wallet adoption rates went from 27% (73% drop-off before first transaction) to 88% (12% drop-off). Transaction error rates fell from 8.2% to 0.7% — a 91% reduction. The enterprise contracts secured on the strength of the UX work totaled $2.3M in Antier\'s first year deploying the system.",
          "The patterns we developed at Antier were adopted by 15+ blockchain startups that went on to raise a combined $50M+. Some patterns appeared in MetaMask\'s UX improvements years later. The estimated cost avoidance in error-related support and liability was $500K+. In a domain where errors are permanent, that number represents actual user harm prevented.",
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'The system I designed was excellent for power users and institutional clients. I did not adequately solve for first-time users — the person encountering a blockchain wallet for the first time. The onboarding flow was functional but not confidence-building. Given what we now know about crypto adoption curves, that gap was significant.',
          'I also did not design for mobile-first. The institutional context of 2013–2017 enterprise blockchain was desktop-dominant, and I built accordingly. By 2019, mobile blockchain usage had outpaced desktop. The patterns were sound but the implementation context was wrong, and I should have anticipated the shift earlier.',
        ],
      },
    },
    nextSlug: 'ai-interfaces',
    nextTitle: 'AI/ML Interfaces',
  },
  {
    slug: 'ai-interfaces',
    number: '006',
    title: 'AI/ML Interfaces',
    subtitle: 'Explainable AI for Healthcare',
    client: 'smartData Enterprises',
    role: 'Senior Designer / Team Lead',
    year: '2017 — 2019',
    yearRoman: 'MMXVII — MMXIX',
    industry: 'AI/ML / Healthcare',
    status: 'Shipped',
    tag: 'AI/ML',
    oneLiner: 'Made black-box AI legible to the doctors who had to trust it.',
    pullQuote: 'A model with 94% accuracy is useless if the physician cannot tell whether this case is in the 94% or the 6%. That is the explainability problem.',
    coverAlt: 'AI/ML explainability dashboard for healthcare',
    metrics: [
      { value: '38%', label: 'AI model trust improvement (physician surveys)' },
      { value: '22%', label: 'False-positive rejection rate decrease' },
      { value: '3', label: 'Distinct AI products designed (emotion, coding, wound)' },
      { value: '91%', label: 'Physician confidence score in AI recommendation context' },
      { value: '60%', label: 'Reduction in time-to-decision with AI assist' },
      { value: '100%', label: 'Transparent decision visualization' },
    ],
    chapters: {
      problem: {
        number: '01',
        title: 'The Problem',
        body: [
          'Three AI products, one problem: how do you design interfaces for AI recommendations when the people using those interfaces cannot see inside the model? Healthcare AI in 2017 was entering clinical settings faster than clinicians could evaluate it. Facial emotion recognition for behavioral health screening. Automated medical coding for EMR billing. Wound assessment AI for care planning. Each had strong model performance — and each was being rejected by physicians who could not tell when to trust it.',
          'The rejection was not irrational. A physician who cannot interrogate a recommendation cannot take clinical responsibility for it. And in healthcare, clinical responsibility is the fundamental obligation. If the AI says a wound is healing and the physician cannot evaluate that claim, the physician is not using a tool — they are abdicating judgment to a system they cannot audit.',
          'My brief, across all three products, was the same: make the AI legible to its user. Not to explain the model — but to give clinicians the right information to make an informed decision about whether to accept or reject the recommendation.',
        ],
      },
      research: {
        number: '02',
        title: 'The Research',
        body: [
          'For each AI product, I ran a separate research sprint with the clinicians who would use it: behavioral health professionals for the emotion recognition tool, medical billers and coders for the coding assistant, and wound care nurses for the wound assessment system. The specialization mattered — the information each group needed to evaluate an AI recommendation was completely different.',
          'The most significant finding was consistent across all three groups: clinicians did not want probability scores. A "94% confident" label increased their anxiety rather than reducing it — they did not know what "94% confident" meant in the context of their specific patient. What they wanted was the evidence the model had used: which features drove this recommendation, and how this case compared to similar cases the model had seen.',
          'A secondary finding: rejection of AI recommendations was not correlated with the model being wrong — it was correlated with insufficient explanation. Clinicians were rejecting recommendations they should have accepted because they did not have enough information to feel safe accepting them. The UX was generating clinical conservatism that the model did not warrant.',
        ],
      },
      decisions: [
        {
          heading: 'Show the evidence, not the confidence',
          body: 'Rather than displaying a probability percentage, I designed an "evidence panel" for each recommendation: the specific data points the model had flagged as significant, displayed in clinical language the physician already used. For wound assessment: the surface area measurement, the tissue composition reading, the comparison to previous assessments. For medical coding: the clinical documentation phrases that triggered each code, with the source sentence highlighted. Clinicians could evaluate the evidence, not just the output.',
        },
        {
          heading: 'Comparison to cases, not to statistics',
          body: "Clinicians think in cases, not in probabilities. I designed a \"similar cases\" panel that surfaced anonymized comparable cases from the model\'s training data — what it looked like when this recommendation was correct, what it looked like when the recommendation was wrong. Clinicians could situate their current patient in a reference set they understood. False-positive rejection rates dropped 22% in the first three months post-deployment.",
        },
        {
          heading: 'Make rejection as informative as acceptance',
          body: 'Most AI interfaces treated rejection as a dead end: the clinician dismissed the recommendation and the system moved on. I designed rejection as a data collection opportunity — when a clinician rejected a recommendation, the system asked a single, optional question: "What did you see that the AI missed?" These responses fed directly to the model team as labeled training data. Clinicians who rejected recommendations started feeling heard rather than overridden. Trust scores went up.',
        },
      ],
      system: {
        number: '04',
        title: 'The System',
        body: [
          'The explainable AI design system was built around a single principle: no recommendation without a reason, no reason without evidence. Every AI output was structured as a three-layer disclosure: the recommendation (surfaced immediately), the evidence (one click), and the model context (two clicks). Clinicians could engage at the level of depth the clinical moment required.',
          'The visual language for AI recommendations was deliberately distinct from the rest of the interface — a specific container style, a specific motion pattern for loading states, and a specific color indicating AI origin versus clinical documentation. Clinicians needed to know, at a glance, whether they were looking at a human judgment or a model output.',
        ],
      },
      outcomes: {
        number: '05',
        title: 'The Outcomes',
        body: [
          'Physician trust in AI recommendations improved 38% across all three products, measured by post-deployment physician surveys. False-positive rejection rates dropped 22% — meaning AI recommendations that were correct were being accepted at a higher rate. Time-to-decision with AI assist dropped 60%, as clinicians spent less time uncertainty-managing and more time deciding.',
          "The \"make rejection informative\" design generated labeled training data that the model team described as the highest-quality feedback signal they had received. It created a feedback loop between clinical judgment and model improvement that had not previously existed. The design of the interface was, inadvertently, also the design of the model\'s learning mechanism.",
        ],
      },
      reflection: {
        number: '06',
        title: "What I'd Do Differently",
        body: [
          'I designed three separate explainability systems for three different AI products, each tailored to its clinical context. In retrospect, I should have invested in a shared explainability framework at the start — a consistent design pattern for AI recommendation disclosure that could be specialized per domain rather than rebuilt each time. The patterns I developed were similar enough that the redundancy was wasteful.',
          'I also underestimated the importance of designing for model failure states explicitly. The systems I designed handled rejection well, but they did not adequately design for the case where the AI was confidently wrong. When model confidence and clinical judgment diverged sharply, clinicians needed a clearer signal that this divergence was significant. That edge case deserved more design attention than it received.',
        ],
      },
    },
    nextSlug: 'lighthouse',
    nextTitle: 'Lighthouse',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
