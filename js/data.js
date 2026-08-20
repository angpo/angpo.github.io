(() => {
window.AngeloSite = window.AngeloSite || {};

const siteProfile = {
  email: "angelo.porrello@unimore.it",
  links: [
    { label: "AImageLab", url: "https://aimagelab.unimore.it" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=search_authors&mauthors=Angelo+Porrello+UNIMORE" },
    { label: "UNIMORE profile", url: "https://unimore.unifind.cineca.it/get/person/096711" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-9022-8484" },
    { label: "GitHub", url: "https://github.com/angpo" },
  ],
};

const teaching = [
  { category: "Master Degree", period: "2023—ongoing", course: "Machine Learning and Deep Learning [IIM-55]", role: "M.Sc. in Artificial Intelligence, Department of Engineering “Enzo Ferrari”, UNIMORE" },
  { category: "Others", period: "2019", course: "ADBoT: Autonomous Driving and enaBling Technologies", role: "University of Trento" },
  { category: "Bachelor Degree", period: "2025", course: "Fondamenti di Informatica [INF-002R]", role: "B.Sc. in Computer Engineering, UNIMORE" },
  { category: "Bachelor Degree", period: "2025", course: "Ingegneria del Software [INF-36]", role: "B.Sc. in Computer Engineering, UNIMORE" },
  { category: "Bachelor Degree", period: "2024", course: "Strutture Dati e Algoritmi [INF-29]", role: "B.Sc. in Computer Engineering, UNIMORE" },
  { category: "Bachelor Degree", period: "2022—2024", course: "Fondamenti di Machine Learning [INFMN-028]", role: "B.Sc. in Computer Engineering, UNIMORE" },
  { category: "Doctorate Schools", period: "2025", course: "Advanced Training Strategies for Incremental and Decentralised Learning", role: "Advanced training course, Universidad de Granada" },
  { category: "Doctorate Schools", period: "2023", course: "Advanced AI approaches to Digital Humanities", role: "PhD School in Information Engineering and Computer Science, University of Trento" },
  { category: "Company Training", period: "May 2026", course: "Percorso formativo dedicato all’Artificial Intelligence", role: "Prometeia" },
  { category: "Company Training", period: "Jun 2025", course: "Machine Learning e Deep Learning", role: "Unipo - Leitha" },
  { category: "Company Training", period: "2018—2024", course: "Master in Machine Learning and Deep Learning", role: "Fondazione Democenter, six editions" },
  { category: "Company Training", period: "2022—2024", course: "Theoretical and Practical Course in Machine Learning and Deep Learning", role: "BI-REX, two editions" },
  { category: "Company Training", period: "2023—2024", course: "Intensive Master AI and ML for Smart Factory", role: "Experis S.r.l." },
  { category: "Company Training", period: "2023", course: "Theoretical and Practical Training Course on Computer Vision and Machine Learning", role: "CNH Industrial Italia S.p.A." },
  { category: "Company Training", period: "2022", course: "School in AI: Deep Learning, Vision and Language for Industry", role: "AI Academy UNIMORE" },
  { category: "Company Training", period: "2022", course: "Predictive Analytics and Machine Learning", role: "IMA S.p.A." },
  { category: "Company Training", period: "2018", course: "Training course on Artificial Intelligence", role: "Istituto Zooprofilattico Sperimentale dell’Abruzzo e del Molise" },
];

const theses = [
  { year: "in progress", sortYear: 2026, title: "Training-free Domain Adaptation through Task Analogies", student: "Fabio Bozzoli", degree: "Master’s thesis" },
  { year: "2025", sortYear: 2025, title: "How to Train Your Metamorphic Deep Neural Network", student: "Thomas Sommariva", degree: "Master’s thesis" },
  { year: "2025", sortYear: 2025, title: "Synthetic-to-Real Domain Gap in Multiple Object Tracking", student: "Francesca Morandi", degree: "Master’s thesis" },
  { year: "2024", sortYear: 2024, title: "Towards Efficient and Incremental Training of Deep Vision Transformers", student: "Lorenzo Calvano", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-06162024-205111/" },
  { year: "2024", sortYear: 2024, title: "CLIP and FLIP: an Overview and an Analysis of Bias", student: "Beatrice Calderara", degree: "Bachelor’s thesis" },
  { year: "2023", sortYear: 2023, title: "Analisi di Transformer Encoder in ambito Knowledge Distillation per la Person Re-Identification", student: "Alessandro Castellucci", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-05172023-223844/" },
  { year: "2023", sortYear: 2023, title: "Continual Zero-Shot Satellite Image Classification", student: "Federica Santarcangelo", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-03272024-094943/" },
  { year: "2022", sortYear: 2022, title: "Valutazione del catastrophic forgetting nell'apprendimento non supervisionato", student: "Vipul Kumar", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-03082022-105052/" },
  { year: "2021", sortYear: 2021, title: "Valutazione degli approcci di Continual Learning per mitigare il mode collapse nelle Reti Generative Avversarie", student: "Lorenzo Schiroli", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-11032021-000942/" },
  { year: "2021", sortYear: 2021, title: "Rilevamento delle attività anomale nel trasporto pubblico", student: "Aniello Panariello", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-11032021-132941/" },
  { year: "2019", sortYear: 2019, title: "Continual Learning via Logits Distillation", student: "Pietro Buzzega", degree: "Master’s thesis", link: "https://morethesis.unimore.it/theses/available/etd-09232019-134507/" },
];

const externalPaperLinks = {
  porrello2026dataless: "https://arxiv.org/abs/2602.17385",
  buzzega2025rethinking: "https://arxiv.org/abs/2508.21421",
  panariello2025accurate: "https://arxiv.org/abs/2509.17786",
  sommariva2026distilling: "https://arxiv.org/abs/2605.18993",
  boschini2022class: "https://arxiv.org/abs/2201.00766",
  porrello2020robust: "https://arxiv.org/abs/2007.04174",
  boschini2022transfer: "https://arxiv.org/abs/2206.00388",
  buzzega2020dark: "https://arxiv.org/abs/2004.07211",
  buzzega2021rethinking: "https://arxiv.org/abs/2010.05595",
  abati2019latent: "https://arxiv.org/abs/1807.01653",
  benaglia2024trajectory: "https://arxiv.org/abs/2405.20743",
  ning2023input: "https://arxiv.org/abs/2301.11706",
  monti2022many: "https://arxiv.org/abs/2203.04781",
  panariello2025modular: "https://arxiv.org/abs/2508.16463",
  cappellino2025dithub: "https://arxiv.org/abs/2503.09271",
  porrello2019classifying: "https://arxiv.org/abs/1902.04850",
  corsini2024self: "https://arxiv.org/abs/2401.11849",
  menabue2024semantic: "https://arxiv.org/abs/2403.06870",
  frascaroli2024clip: "https://arxiv.org/abs/2407.15793",
  millunzi2024may: "https://arxiv.org/abs/2408.14284",
  bergamini2018multi: "https://arxiv.org/abs/1902.04886",
  vincenzi2021color: "https://arxiv.org/abs/2006.12119",
  porrello2019spotting: "https://arxiv.org/abs/1911.10024",
  rinaldi2026transporting: "https://arxiv.org/abs/2602.12952",
  boschini2022continual: "https://arxiv.org/abs/2108.06552",
  bonicelli2022effectiveness: "https://arxiv.org/abs/2210.06443",
  mancusimultiple: "https://arxiv.org/abs/2411.00553",
  mancusi2023trackflow: "https://arxiv.org/abs/2308.11513",
  panariello2022consistency: "https://arxiv.org/abs/2208.05251",
  mosconi2025mask: "https://arxiv.org/abs/2407.01397",
  menabue2024attention: "https://arxiv.org/abs/2407.14249",
  bonicelli2023effectiveness: "https://arxiv.org/abs/2305.03648",
  bonicelli2023spotting: "https://arxiv.org/abs/2209.05251",
  panariello2025monocular: "https://arxiv.org/abs/2401.03191",
  rinaldi2025gradient: "https://arxiv.org/abs/2510.09658",
  rinaldi2025update: "https://arxiv.org/abs/2505.22697",
  porrello2024second: "https://arxiv.org/abs/2405.16350",
  sommariva2025train: "https://arxiv.org/abs/2505.05510",
};

Object.assign(window.AngeloSite, { siteProfile, teaching, theses, externalPaperLinks });

})();
