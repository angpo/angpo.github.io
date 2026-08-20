(() => {
const aboutHtml = `<p><strong>Angelo Porrello</strong> is a <strong>Tenure-Track Assistant Professor (RTT)</strong> at the Department of Engineering “Enzo Ferrari” of the University of Modena and Reggio Emilia. He has been a member of the <a href="https://aimagelab.unimore.it" target="_blank" rel="noopener">AImageLab</a> research group since 2018 and is also affiliated with the <a href="https://ellis.eu/person/angelo-porrello" target="_blank" rel="noopener">European Laboratory for Learning and Intelligent Systems (ELLIS)</a>, the <a href="https://www.economia.unimore.it/it/ricerca/centri-di-ricerca/airi-artificial-intelligence-research-and-innovation-center" target="_blank" rel="noopener">Artificial Intelligence Research and Innovation Center (AIRI)</a> at UNIMORE, the <a href="https://www.thecvf.com/" target="_blank" rel="noopener">Computer Vision Foundation (CVF)</a>, and the <a href="https://www.cvpl.it/about-nuovo/" target="_blank" rel="noopener">Italian Association for Computer Vision, Pattern Recognition and Machine Learning (CVPL)</a>.</p><p>He holds a Ph.D. in Information and Communication Technologies and a Master’s degree in Computer Engineering, cum laude, from the University of Modena and Reggio Emilia. He has also obtained the Italian National Scientific Qualification for Associate Professor in the fields <strong>01/B1</strong> (Computer Science) and <strong>09/H1</strong> (Information Processing Systems).</p><p>He has authored more than <strong>50 peer-reviewed scientific publications</strong> in leading international journals and conferences. His academic record has received several distinctions, including the <strong>Best Ph.D. Thesis Award</strong> from the Department of Engineering “Enzo Ferrari” in 2022, an <strong>ICLR Spotlight Paper</strong> recognition in 2025, and an <strong>Honorable Mention</strong> at ICIAP 2025.</p><p>Since 2018, he has developed a sustained teaching profile, delivering more than <strong>230 hours of university-level teaching</strong> across Master’s and Bachelor’s programmes. He has taught for several years in Machine Learning and Deep Learning, and has also delivered doctoral and advanced training courses at the University of Trento and the Universidad de Granada. In addition, he has provided more than <strong>200 hours of professional training</strong> to companies, competence centres, and public institutions.</p><p>He has participated in <strong>eight funded national and international projects</strong>, supported by programmes including PRIN, Horizon Europe, the European Space Agency, and the Italian Ministry of Health. He has served as Principal Investigator for two departmental research grants and has held scientific or technical responsibility in technology-transfer collaborations with companies including <strong>ENI S.p.A.</strong> and <strong>SEW-EURODRIVE</strong>. He is also the inventor of an industrial patent granted in 2019 for segmentation models in intelligent farming applications.</p><p>His academic service includes reviewing for leading international conferences, serving as Guest Editor for an international Q1 journal, and evaluating doctoral and postdoctoral programmes. He is a member of the ICT doctoral faculty board at UNIMORE, contributes to the organisation and monitoring of the international doctoral school. He has supervised or co-supervised doctoral candidates and advised more than ten Bachelor’s and Master’s degree theses.</p>`;

const timelineText = `$ timeline --since 2018

2018  │  degree.master                  Computer Engineering · UNIMORE
      │
2022  │  degree.phd                     PhD dissertation · UNIMORE
      │
2022  │  award.best_phd                 Best Ph.D. Thesis Award · UNIMORE
      │
2023  │  role.postdoc                   AImageLab · UNIMORE
      │
2026  └─ role.rtt_tenure_track          UNIMORE

$ status --current
active`;

const researchHtml = `<p>Angelo Porrello’s early work focused primarily on <strong>continual learning</strong>: giving neural networks the ability to learn continuously from evolving data while mitigating <strong>catastrophic forgetting</strong>. The practical goal is to update a model without repeatedly training it from scratch or retaining its entire historical dataset.</p><p>He co-authored <a href="https://arxiv.org/abs/2004.07211" target="_blank" rel="noopener"><em>Dark Experience Replay</em></a> (<strong>NeurIPS 2020</strong>), a continual-learning baseline, and co-developed <a href="https://github.com/aimagelab/mammoth" target="_blank" rel="noopener">Mammoth</a>, an open-source framework for benchmarking and reproducible evaluation of continual-learning methods. A substantial part of this work investigated <em>rehearsal strategies</em>, which retain a subset of previous data and replay it while learning new tasks.</p><p>His focus subsequently moved towards <strong>modular deep learning</strong>. Rather than treating an AI model as a monolithic entity in which all knowledge is entangled in one parameter set, this perspective distributes capabilities across modules specialised for different tasks and composes them at run time. In particular, his work on <strong>model merging</strong> and <strong>task arithmetic</strong> studies how independently trained models can be recombined into a single system.</p><p>He has developed geometric and mathematical models that encourage composability by design, including fine-tuning procedures informed by <a href="https://arxiv.org/abs/2405.16350" target="_blank" rel="noopener">second-order regularisation</a>. The practical objective is to make specialised AI systems easier to extend, adapt, and reuse without rebuilding them from scratch. He also organised the <a href="https://iciap25modularityworkshop.github.io" target="_blank" rel="noopener"><em>Breaking the Monolith: 1st Workshop on Advances in Modular Deep Learning</em></a>, held in conjunction with ICIAP 2025 in Rome.</p><p>These ideas also have a natural application in <strong>federated learning</strong>: model merging and task arithmetic can support collaboration among institutions that cannot share raw data, but can exchange models or task-specific updates. This makes it possible to combine complementary knowledge while keeping each organisation’s data local.</p><p>Within this modular deep learning line of work, he has also investigated <strong>linearized fine-tuning</strong> (<a href="https://arxiv.org/abs/2602.17385" target="_blank" rel="noopener">1</a>, <a href="https://arxiv.org/abs/2605.18993" target="_blank" rel="noopener">2</a>), a training regime based on the <strong>first-order Taylor expansion</strong> of a pre-trained model. For the linearized model, this expansion is the model definition and the following relation is exact:</p><div class="research-formula" aria-label="First-order Taylor expansion for linearized fine-tuning">f(x; θ + Δθ) = f(x; θ) + J(x; θ)Δθ</div><p>In simple terms, the adapted model is represented exactly as the original model plus a locally linear correction. This makes training dynamics easier to study and can support composability, efficient adaptation, and targeted unlearning of previously acquired capabilities.</p><p>He is also actively working on <strong>model re-basin</strong> (<a href="https://arxiv.org/abs/2505.22697" target="_blank" rel="noopener">1</a>, <a href="https://arxiv.org/abs/2510.09658" target="_blank" rel="noopener">2</a>, <a href="https://arxiv.org/abs/2602.12952" target="_blank" rel="noopener">3</a>): transferring a fine-tuning from one pre-trained model to another without full retraining. This can allow organisations to preserve an existing specialisation when a new base-model release becomes available, reducing both the computational cost and operational friction of keeping deployed models up to date.</p><p>Across these directions, he has applied these methods to a broad set of <strong>Computer Vision</strong> problems, including image classification, human, animal, and vehicle re-identification, object detection, multiple-object tracking, video analytics, and human-behaviour analysis. He has also worked extensively on anomaly detection for intelligent video-surveillance systems, public-transport scenarios, and industrial condition monitoring, linking methodological advances to practical systems that need to operate reliably over time.</p>`;

const researchDiagrams = [
  {
    paragraphText: null,
    label: "Continual learning diagram",
    art: `CONTINUAL LEARNING

      time --------------------------------------->

 f(x; θ) -> +--------+ --> +--------+ --> +--------+
            | Task A |     | Task B |     | Task C |
            +--------+     +--------+     +--------+
                ^              ^              ^
                |              |              |
             memory         memory         memory`,
    diagramFirst: false,
  },
  {
    paragraphText: "In particular, his work on model merging",
    label: "Model merging diagram",
    art: `MODEL MERGING

+--------+
| Task A | θ_A ----+
+--------+         |
                   |
+--------+         +--->+---------+     +-------+
| Task B | θ_B ----+--->|  MERGE  |---->| A+B+C |
+--------+         +--->+---------+     +-------+
                   |
+--------+         |
| Task C | θ_C ----+
+--------+`,
    diagramFirst: false,
  },
  {
    paragraphText: "model re-basin",
    label: "Model re-basin diagram",
    art: `MODEL RE-BASIN

+---------+   +---------------+
| Base θ1 |-->| Base θ1+Skill |
+---------+   +---------------+
                    |
                    v
               +---------+   +----------+   +---------------+
               | Base θ2 |-->| RE-BASIN |-->| Base θ2+Skill |
               +---------+   +----------+   +---------------+`,
    diagramFirst: false,
  },
];


const thesisOpportunityHtml = `<section class="thesis-opportunity"><p class="thesis-opportunity-kicker">Thesis Opportunities for Students</p><h2>Explore a research idea</h2><p>Thesis projects are available for Bachelor’s and Master’s students interested in <strong>Computer Vision</strong>, <strong>continual learning</strong>, <strong>modular deep learning</strong>, <strong>model merging</strong>, <strong>task arithmetic</strong>, <strong>federated learning</strong>, and related topics in efficient and decentralized AI.</p><p>Projects can evolve into PhD positions, research contracts, or collaborations with industry partners, depending on the idea and the student’s interests.</p><p>The available topics are shared upon request. To discuss an existing project or propose a new idea, <a href="mailto:angelo.porrello@unimore.it">send me an email ↗</a>.</p></section><p class="thesis-intro">Theses supervised or co-supervised by Angelo Porrello, ordered from the most recent to the earliest.</p>`;

Object.assign(window.AngeloSite, { aboutHtml, timelineText, researchHtml, researchDiagrams, thesisOpportunityHtml });
})();
