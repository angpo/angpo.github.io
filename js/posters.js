(() => {
window.AngeloSite = window.AngeloSite || {};

const conferences = {
  aistats: "International Conference on Artificial Intelligence and Statistics",
  bmvc: "British Machine Vision Conference",
  cvpr: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
  eccv: "European Conference on Computer Vision",
  iccv: "IEEE/CVF International Conference on Computer Vision",
  iclr: "International Conference on Learning Representations",
  icml: "International Conference on Machine Learning",
  icpr: "International Conference on Pattern Recognition",
  miccai: "International Conference on Medical Image Computing and Computer-Assisted Intervention",
  neurips: "Conference on Neural Information Processing Systems",
  wacv: "IEEE/CVF Winter Conference on Applications of Computer Vision",
};

const posterFiles = [
  ["delta", "icml", 2026, 1400, 700],
  ["theseus", "icml", 2026, 1400, 700],
  ["gradfix", "iclr", 2026, 1400, 663],
  ["tak", "iclr", 2026, 1400, 663],
  ["core", "neurips", 2025, 1400, 696],
  ["dithub", "neurips", 2025, 1400, 700],
  ["transplant", "miccai", 2025, 1400, 1980],
  ["transfusion", "icml", 2025, 1400, 838],
  ["second", "iclr", 2025, 1400, 692],
  ["continualbias", "wacv", 2025, 1400, 699],
  ["pasta", "neurips", 2024, 1400, 700],
  ["corsini", "neurips", 2024, 1400, 715],
  ["starprompt", "eccv", 2024, 1400, 700],
  ["cgil", "bmvc", 2024, 1400, 1979],
  ["maythe", "bmvc", 2024, 1400, 1979],
  ["clusterix", "wacv", 2024, 1400, 1400],
  ["trackflow", "iccv", 2023, 1400, 816],
  ["dasmil", "miccai", 2023, 1400, 1951],
  ["traj", "cvpr", 2022, 1400, 700],
  ["twf", "eccv", 2022, 1400, 991],
  ["lipschitz", "neurips", 2022, 1400, 700],
  ["bagof", "icpr", 2020, 1400, 990],
  ["der", "neurips", 2020, 1400, 1979],
  ["lsa", "cvpr", 2019, 1400, 685],
  ["grafi", "aistats", 2019, 1400, 1979],
];

const posters = posterFiles.map(([id, acronym, year, width, height]) => {
  const basename = `${id}_${acronym}_${year}`;
  return {
    id,
    acronym: acronym.toUpperCase(),
    conference: conferences[acronym],
    year,
    width,
    height,
    preview: `assets/posters/${basename}.jpg`,
    pdf: `posters/${basename}.pdf`,
  };
});

window.AngeloSite.posters = posters;

})();
