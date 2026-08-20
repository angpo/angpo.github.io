(() => {
const { escapeHtml, externalPaperLinks } = window.AngeloSite;

let publicationDatabase = null;

function getPublicationDatabase() {
  if (publicationDatabase) return publicationDatabase;
  if (!window.PUBLICATIONS_DATABASE?.length) throw new Error("Empty publications database");
  publicationDatabase = window.PUBLICATIONS_DATABASE;
  return publicationDatabase;
}

function formatAuthors(raw) {
  return raw
    .split(/\s+and\s+/i)
    .map((author) => {
      const parts = author.split(",").map((part) => part.trim()).filter(Boolean);
      const name = parts.length > 1 ? `${parts[1]} ${parts[0]}` : author.trim();
      const safeName = escapeHtml(name);
      return /angelo\s+porrello/i.test(name) ? `<strong>${safeName}</strong>` : safeName;
    })
    .join(", ");
}

function formatVenue(venue) {
  const names = {
    icml: "International Conference on Machine Learning (ICML)",
    cvpr: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    eccv: "European Conference on Computer Vision (ECCV)",
    anips: "Advances in Neural Information Processing Systems (NeurIPS)",
    iclr: "International Conference on Learning Representations (ICLR)",
    bmvc: "British Machine Vision Conference (BMVC)",
    icpr: "International Conference on Pattern Recognition (ICPR)",
    miccai: "Medical Image Computing and Computer Assisted Intervention (MICCAI)",
    wacv: "Winter Conference on Applications of Computer Vision (WACV)",
    iciap: "International Conference on Image Analysis and Processing (ICIAP)",
    aistats: "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    eccvw: "European Conference on Computer Vision Workshops (ECCV Workshops)",
    iccv: "IEEE/CVF International Conference on Computer Vision (ICCV)",
    tpami: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
    "proceedings of the 22nd international conference on advanced visual and signal-based systems (avss)": "Proceedings of the 22nd International … Signal-Based Systems (AVSS)",
  };

  return names[venue.toLowerCase()] || venue || "Publication";
}

function formatBibtex(item) {
  let bibtex = item.bibtex.replace(/\r/g, "").trim().replace(/\n\}\s*\}\s*$/, "\n}");
  bibtex = bibtex.replace(/^(@\w+\s*\{\s*[^,\n]+),\s*/, "$1,\n");
  bibtex = bibtex.replace(/^\s*keywords\s*=\s*(?:\{[^}]*\}|[^,\n}]+),?\s*$/gim, "");
  const venue = formatVenue(item.venue);
  bibtex = bibtex.replace(
    /(\b(?:booktitle|journal)\s*=\s*)(?:\{(?:[^{}]|\{[^{}]*\})*\}|[^,\n}]+)(\s*,?)/i,
    `$1{${venue}}$2`,
  );

  return bibtex
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => (index === 0 ? line : line.replace(/,?\s*$/, ",")))
    .join("\n");
}

function showCopiedState(button) {
  button.textContent = "copied";
  setTimeout(() => {
    button.textContent = "bib";
  }, 1400);
}

function copyBibtex(item, button) {
  const bibtex = formatBibtex(item);

  navigator.clipboard?.writeText(bibtex)
    .then(() => showCopiedState(button))
    .catch(() => {
      const area = document.createElement("textarea");
      area.value = bibtex;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
      showCopiedState(button);
    });
}

function renderPublicationCards(items, output) {
  const cards = document.createElement("div");
  cards.className = "publication-list";

  const years = [...new Set(items.map((item) => item.year))].sort((a, b) => Number(b) - Number(a));
  years.forEach((year) => {
    const heading = document.createElement("h3");
    heading.className = "publication-year";
    heading.textContent = year;
    cards.appendChild(heading);

    items.filter((item) => item.year === year).forEach((item) => {
      const card = document.createElement("article");
      card.className = "publication-card";

      const query = encodeURIComponent(item.title);
      const externalUrl = externalPaperLinks[item.key] || `https://iris.unimore.it/simple-search?query=${query}`;
      const externalLabel = externalPaperLinks[item.key] ? "arXiv" : "IRIS";

      card.innerHTML = `<div class="publication-meta"><span>${formatVenue(item.venue)}</span><span class="publication-actions"><a href="${externalUrl}" target="_blank" rel="noopener" aria-label="Apri ${externalLabel}">${externalLabel} ↗</a><button type="button" aria-label="Copia BibTeX">bib</button></span></div><h4>${item.title}</h4><p>${formatAuthors(item.authors)}</p>`;
      card.querySelector("button").addEventListener("click", (event) => copyBibtex(item, event.currentTarget));
      cards.appendChild(card);
    });
  });

  output.appendChild(cards);
}

Object.assign(window.AngeloSite, { getPublicationDatabase, renderPublicationCards });

})();
