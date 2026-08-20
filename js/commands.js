(() => {
const {
  aboutHtml,
  getPublicationDatabase,
  news,
  renderPublicationCards,
  researchDiagrams,
  researchHtml,
  siteProfile,
  teaching,
  theses,
  thesisOpportunityHtml,
  timelineText,
} = window.AngeloSite;

function getDiagramWidth(art) {
  return Math.max(...art.split("\n").map((line) => line.length));
}

function centerDiagram(art, canvasWidth) {
  const drawingWidth = getDiagramWidth(art);
  const availablePadding = canvasWidth - drawingWidth;
  const leftPadding = " ".repeat(Math.floor(availablePadding / 2));
  const rightPadding = " ".repeat(Math.ceil(availablePadding / 2));
  return art
    .split("\n")
    .map((line) => leftPadding + line.padEnd(drawingWidth) + rightPadding)
    .join("\n");
}

function renderResearchDiagram(section, diagramConfig, canvasWidth) {
  const paragraphs = [...section.querySelectorAll("p")];
  const paragraph = diagramConfig.paragraphText
    ? paragraphs.find((item) => item.textContent.includes(diagramConfig.paragraphText))
    : paragraphs[0];
  if (!paragraph) return;

  const diagram = document.createElement("pre");
  diagram.className = "research-ascii";
  diagram.setAttribute("aria-label", diagramConfig.label);
  diagram.textContent = centerDiagram(diagramConfig.art, canvasWidth);

  const opening = document.createElement("div");
  opening.className = "research-opening";
  const copy = document.createElement("div");
  copy.className = "research-opening-copy";
  section.insertBefore(opening, paragraph);
  copy.appendChild(paragraph);

  if (diagramConfig.diagramFirst) opening.append(diagram, copy);
  else opening.append(copy, diagram);
}

function renderNewsCards(items, output) {
  const cards = document.createElement("div");
  cards.className = "news-list";

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";

    const media = item.image
      ? `<div class="news-media"><img src="${item.image}" alt="" loading="lazy">${item.logo ? `<img class="news-logo" src="${item.logo}" alt="">` : ""}</div>`
      : "";
    const papers = item.papers?.length
      ? `<ul class="news-papers">${item.papers.map((paper) => `<li><strong>${paper.link ? `<a href="${paper.link}" target="_blank" rel="noopener">${paper.title} ↗</a>` : paper.title}</strong><small>${paper.authors}</small></li>`).join("")}</ul>`
      : "";
    const title = item.link
      ? `<a href="${item.link}" target="_blank" rel="noopener">${item.title} ↗</a>`
      : item.title;
    const type = item.conferenceLink
      ? `<a href="${item.conferenceLink}" target="_blank" rel="noopener">${item.type} ↗</a>`
      : item.type;

    card.innerHTML = `${media}<div class="news-body"><div class="news-meta"><span>${item.date}</span><span>${type}</span></div><h3>${title}</h3><p>${item.text}</p>${papers}</div>`;
    cards.appendChild(card);
  });

  output.appendChild(cards);
}

function createCommands({ line, output }) {
  return {
    help() {
      const compact = window.matchMedia("(max-width:760px)").matches;
      line("Available commands:", "section-title");

      if (compact) {
        ["about", "research", "publications", "teaching", "thesis", "news", "contact", "clear"]
          .forEach((command) => line(`  ${command}`, "dim"));
        return;
      }

      line("  about                        who I am", "dim");
      line("  research                     research interests and work", "dim");
      line("  publications                conferences (default)", "dim");
      line("  teaching                     teaching activities", "dim");
      line("  thesis                       supervised theses", "dim");
      line("  news                         recent updates", "dim");
      line("  publications --journal      journal publications", "dim");
      line("  publications --conference   conference publications", "dim");
      line("  publications --latest [N]   latest N publications", "dim");
      line("  publications --year YYYY    filter by year", "dim");
      line("  publications --keyword WORD filter by topic", "dim");
      line("  contact                     get in touch", "dim");
      line("  clear                       clear the terminal", "dim");
    },

    about(args) {
      const copy = document.createElement("div");
      copy.className = "about-copy";
      copy.innerHTML = aboutHtml;

      if (args.includes("--timeline")) {
        const timeline = document.createElement("pre");
        timeline.className = "ascii-timeline";
        timeline.textContent = timelineText;
        copy.appendChild(timeline);
      }

      output.appendChild(copy);
    },

    research() {
      const copy = document.createElement("div");
      copy.className = "about-copy";
      copy.innerHTML = researchHtml;
      output.appendChild(copy);
      const canvasWidth = Math.max(...researchDiagrams.map((diagram) => getDiagramWidth(diagram.art)));
      researchDiagrams.forEach((diagram) => renderResearchDiagram(copy, diagram, canvasWidth));
    },

    cv() {
      line("Opening CV…", "dim");
    },

    experience() {
      line("  2023—      Post-doc Research Assistant · AImageLab, UNIMORE", "dim");
      line("  2018—2022  Research Fellow · University of Modena and Reggio Emilia", "dim");
      line("  2013—2015  Web Developer · Omnia Sistemi S.r.l.", "dim");
    },

    education() {
      line("  Ph.D. · Deep Learning and Computer Vision · 2018—2021", "dim");
      line("  M.Sc. · Computer Engineering · 2015—2017 · 110/110 cum laude", "dim");
      line("  B.Sc. · Computer Sciences · 2011—2015 · 110/110 cum laude", "dim");
    },

    news() {
      renderNewsCards(news, output);
    },

    teaching() {
      const groups = ["Master Degree", "Bachelor Degree", "Company Training", "Doctorate Schools", "Others"];

      groups.forEach((category) => {
        line(category, "teaching-heading");
        const cards = document.createElement("div");
        cards.className = "teaching-list";

        teaching.filter((item) => item.category === category).forEach((item) => {
          const card = document.createElement("article");
          card.className = "teaching-card";
          card.innerHTML = `<span class="teaching-period">${item.period}</span><div><h3>${item.course}</h3><p>${item.role}</p></div>`;
          cards.appendChild(card);
        });

        output.appendChild(cards);
      });
    },

    skills() {
      line("Research areas:");
      line("  Deep Learning · Machine Learning · Computer Vision", "dim");
      line("  Continual Learning · Tracking · Re-Identification", "dim");
      line("  Anomaly Detection · Video Surveillance", "dim");
      line("Tools: Python, PyTorch, TensorFlow, NumPy, OpenCV, Git, MATLAB, LaTeX", "dim");
    },

    thesis() {
      const list = document.createElement("div");
      list.className = "thesis-list";
      list.innerHTML = thesisOpportunityHtml + theses.map((item) => `
        <article class="thesis-card">
          <div class="thesis-meta"><span>${item.year}</span><span>${item.degree}</span></div>
          <h3>${item.link ? `<a href="${item.link}" target="_blank" rel="noopener">${item.title} ↗</a>` : item.title}</h3>
          <p>${item.student}</p>
        </article>
      `).join("");
      output.appendChild(list);
    },

    async publications(args) {
      if (args.includes("--help")) {
        line("Usage: publications [options]", "section-title");
        line("  --conference              show conference publications (default)", "dim");
        line("  --journal                 show journal publications", "dim");
        line("  --year YYYY               filter by publication year", "dim");
        line("  --latest N                show the latest N publications", "dim");
        line("  --keyword WORD            filter by title, author, venue or keyword", "dim");
        return;
      }

      try {
        let items = await getPublicationDatabase();
        const optionValue = (name) => {
          const option = args.find((argument) => argument === name || argument.startsWith(`${name}=`));
          if (!option) return "";
          return option === name ? args[args.indexOf(option) + 1] || "" : option.slice(name.length + 1);
        };

        const latest = optionValue("--latest");
        const year = optionValue("--year");
        const keyword = optionValue("--keyword");
        const journal = args.includes("--journal");

        items = items.filter((item) => {
          const metadata = `${item.venue} ${item.keywords}`.toLowerCase();
          return !metadata.includes("arxiv") && (journal ? metadata.includes("journal") : !metadata.includes("journal"));
        });
        if (year) items = items.filter((item) => String(item.year) === String(year));
        if (keyword) {
          const normalizedKeyword = keyword.toLowerCase();
          items = items.filter((item) => `${item.title} ${item.authors} ${item.venue} ${item.keywords}`.toLowerCase().includes(normalizedKeyword));
        }
        if (Number(latest) > 0) items = items.slice(0, Number(latest));

        line(`Loading local publication database… · ${items.length} ${journal ? "journal" : "conference"} publications found`, "section-title");
        renderPublicationCards(items, output);
      } catch (error) {
        line("Could not load publications database", "error");
        line("Make sure the site is served through GitHub Pages or a local web server.", "dim");
      }
    },

    clear() {
      output.innerHTML = "";
    },

    contact() {
      const card = document.createElement("article");
      card.className = "contact-card";
      card.innerHTML = `
        <div class="contact-image"><img src="assets/aicenter.jpg" alt="UNIMORE AI Center" loading="lazy"></div>
        <div class="contact-copy">
          <p class="contact-kicker">Contact / location</p>
          <h2>Find me at the AI Center</h2>
          <p>My usual workplace is the <strong>UNIMORE AI Center</strong>, in Building MO28 on Via P. Vivarelli, Modena.</p>
          <p><a href="mailto:${siteProfile.email}">${siteProfile.email}</a></p>
          <div class="contact-links">${siteProfile.links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`).join("")}</div>
        </div>`;
      output.appendChild(card);
    },
  };
}

window.AngeloSite.createCommands = createCommands;

})();
