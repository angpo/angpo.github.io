(() => {
window.AngeloSite = window.AngeloSite || {};

window.AngeloSite.escapeHtml = function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
};

})();
