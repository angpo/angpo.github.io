(() => {
const { createCommands, escapeHtml } = window.AngeloSite;

const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const tabsElement = document.querySelector("#terminal-tabs");
const themeToggle = document.querySelector("#theme-toggle");

const permanentTabs = new Set(["help"]);
const tabs = new Map([
  ["help", { label: "home", command: "help", html: "", initialized: true }],
  ["about", { label: "about.md", command: "about --timeline", html: "", initialized: false }],
]);
const MAX_TABS = 2;
const firstTab = "help";
const routeAliases = { home: firstTab, terminal: firstTab, pubs: "publications" };
const routedCommands = new Set([firstTab, "about", "research", "publications", "teaching", "thesis", "news", "contact"]);
let activeTab = firstTab;

function line(text = "", className = "") {
  const element = document.createElement("div");
  element.className = `terminal-line ${className}`;
  element.textContent = text;
  output.appendChild(element);
}

function commandLine(value) {
  const element = document.createElement("div");
  element.className = "terminal-line command";
  element.innerHTML = `<span class="prompt">guest@angelo:~$</span>${escapeHtml(value)}`;
  output.appendChild(element);
}

const commands = createCommands({ line, output });

function saveTab() {
  const tab = tabs.get(activeTab);
  if (tab) tab.html = output.innerHTML;
}

function routeForTab(key) {
  return key === firstTab ? "home" : key;
}

function commandFromHash() {
  let route;
  try {
    route = decodeURIComponent(window.location.hash.slice(1)).toLowerCase();
  } catch (error) {
    return null;
  }
  const command = routeAliases[route] || route;
  return routedCommands.has(command) ? command : null;
}

function updateHeaderState(key) {
  document.querySelectorAll(".header-menu [data-command]").forEach((link) => {
    if (link.dataset.command === key) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function navigateToTab(key) {
  const hash = `#${routeForTab(key)}`;
  if (window.location.hash === hash) {
    syncRoute();
  } else {
    window.location.hash = hash;
  }
}

function renderTabs() {
  tabsElement.innerHTML = "";

  tabs.forEach((tab, key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "terminal-tab";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(key === activeTab));
    button.innerHTML = `<span>${tab.label}</span>${key === firstTab ? "" : `<span class="tab-close" role="button" aria-label="Chiudi ${tab.label}">×</span>`}`;
    button.addEventListener("click", (event) => {
      if (event.target.classList.contains("tab-close")) {
        event.stopPropagation();
        closeTab(key);
      } else {
        navigateToTab(key);
      }
    });
    tabsElement.appendChild(button);
  });
}

function focusTerminalTop() {
  const body = document.querySelector("#terminal-body");
  const terminalWindow = document.querySelector(".terminal-window");
  body.scrollTop = 0;
  body.scrollLeft = 0;
  const top = terminalWindow.getBoundingClientRect().top + window.scrollY - 8;
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

function focusCommandOutput() {
  const body = document.querySelector("#terminal-body");
  const commandElements = output.querySelectorAll(".terminal-line.command");
  const command = commandElements[commandElements.length - 1];
  const target = command?.nextElementSibling || command;
  if (!command) return;

  const bodyRect = body.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  body.scrollTop = Math.max(0, body.scrollTop + targetRect.top - bodyRect.top - 12);
  body.scrollLeft = 0;
  const top = target.getBoundingClientRect().top + window.scrollY - 8;
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

function activateTab(key) {
  if (!tabs.has(key)) return;

  saveTab();
  activeTab = key;
  const tab = tabs.get(key);
  const firstOpen = !tab.initialized;
  const refresh = key === "news";
  output.innerHTML = refresh ? "" : tab.html;

  if (firstOpen || refresh) {
    tab.initialized = true;
    run(tab.command);
  }

  renderTabs();
  updateHeaderState(key);
  const resetPosition = () => focusTerminalTop();
  requestAnimationFrame(resetPosition);
  setTimeout(resetPosition, 80);
  setTimeout(resetPosition, 260);

  if (window.innerWidth > 760) input.focus({ preventScroll: true });
  else input.blur();
}

function openTab(command) {
  if (tabs.has(command)) {
    activateTab(command);
    return;
  }

  saveTab();
  if (tabs.size >= MAX_TABS) {
    const oldest = [...tabs.keys()].find((key) => !permanentTabs.has(key));
    if (oldest) tabs.delete(oldest);
  }

  const label = command === "publications"
    ? "publications.log"
    : command === "news"
      ? "news.log"
      : `${command}.md`;
  tabs.set(command, { label, command, html: "", initialized: false });
  activateTab(command);
}

function closeTab(key) {
  if (key === firstTab || !tabs.has(key) || tabs.size === 1) return;

  const keys = [...tabs.keys()];
  const index = keys.indexOf(key);
  tabs.delete(key);

  if (activeTab === key) {
    const remaining = [...tabs.keys()];
    activeTab = remaining[Math.max(0, Math.min(index - 1, remaining.length - 1))];
  }

  output.innerHTML = tabs.get(activeTab).html;
  renderTabs();
  updateHeaderState(activeTab);
  window.history.replaceState(null, "", `#${routeForTab(activeTab)}`);
  input.focus();
}

function syncRoute() {
  const command = commandFromHash();
  if (!command) {
    window.history.replaceState(null, "", "#home");
    activateTab(firstTab);
    return;
  }

  if (command === firstTab) activateTab(firstTab);
  else openTab(command);
}

function run(raw) {
  const value = raw.trim();
  if (!value) return;

  commandLine(value);
  const parts = value.toLowerCase().split(/\s+/);
  const name = parts.shift();

  if (name === "pubs") {
    commands.publications(parts);
  } else if (commands[name]) {
    commands[name](parts);
  } else {
    line(`command not found: ${name}`, "error");
    line('Type "help" to see available commands.', "dim");
  }
}

function welcome() {
  commandLine("research --current");
  line("CURRENT FOCUS", "section-title");
  line("  model plurality");
  line("  ├─ model merging & task arithmetic", "dim");
  line("  ├─ training for model compositionality", "dim");
  line("  └─ continual & federated learning", "dim");
  line("RECENT WORK", "section-title");
  line("  ICML 2026 · 2 papers", "dim");
  line("  ICLR 2026 · 2 papers", "dim");
  line("  AVSS 2026 · oral presentation", "dim");
  line("AVAILABLE COMMANDS", "section-title");
  line("  about · research · publications · teaching", "dim");
  line("  thesis · news · contact · help · clear", "dim");
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("angelo-theme");
  if (savedTheme === "night") document.body.classList.add("night");
  const night = document.body.classList.contains("night");
  themeToggle.textContent = night ? "day" : "night";
  themeToggle.setAttribute("aria-pressed", String(night));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  run(input.value);
  input.value = "";
  saveTab();
  requestAnimationFrame(focusCommandOutput);
  setTimeout(focusCommandOutput, 120);
  setTimeout(focusCommandOutput, 500);
});

document.querySelectorAll(".header-menu [data-command]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.dataset.command === "clear") {
      commands.clear();
      input.focus();
    } else {
      navigateToTab(link.dataset.command);
    }
  });
});

window.addEventListener("hashchange", syncRoute);

themeToggle.addEventListener("click", () => {
  const night = document.body.classList.toggle("night");
  localStorage.setItem("angelo-theme", night ? "night" : "day");
  themeToggle.textContent = night ? "day" : "night";
  themeToggle.setAttribute("aria-pressed", String(night));
});

setInterval(() => {
  document.querySelector("#clock").textContent = new Date().toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });
}, 1000);

initializeTheme();
welcome();
renderTabs();
if (window.location.hash) syncRoute();
else updateHeaderState(firstTab);

})();
