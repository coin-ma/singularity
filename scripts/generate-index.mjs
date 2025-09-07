#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, 'projects');
const INDEX_FILE = path.join(ROOT, 'index.html');

function titleCase(name) {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

async function listProjects() {
  let entries = [];
  try {
    const dirents = await fs.readdir(PROJECTS_DIR, { withFileTypes: true });
    for (const d of dirents) {
      if (!d.isDirectory()) continue;
      if (d.name.startsWith('.')) continue;
      const indexPath = path.join(PROJECTS_DIR, d.name, 'index.html');
      try {
        await fs.access(indexPath);
        entries.push(d.name);
      } catch {}
    }
  } catch (e) {
    // No projects dir yet
  }
  // Manual fallback if nothing found
  if (entries.length === 0) entries = ['piano'];
  // Dedupe and sort
  entries = Array.from(new Set(entries)).sort((a, b) => a.localeCompare(b));
  return entries;
}

function cardFor(name) {
  const pretty = titleCase(name);
  const emoji = name.includes('piano') ? '🎹' : '🧩';
  const desc = name.includes('piano') ? 'Ear trainer game' : 'Project';
  const href = `projects/${name}/index.html`;
  return `  <li><a class="card" href="${href}"><span class="emoji">${emoji}</span><span class="meta"><span class="title">${pretty}</span><span class="desc">${desc}</span></span></a></li>`;
}

async function generate() {
  const projects = await listProjects();
  const listHtml = projects.map(cardFor).join('\n');
  let html = await fs.readFile(INDEX_FILE, 'utf8');
  const start = '<!-- PROJECTS:START -->';
  const end = '<!-- PROJECTS:END -->';
  const startIdx = html.indexOf(start);
  const endIdx = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.error('Markers not found in index.html.');
    process.exit(1);
  }
  const before = html.slice(0, startIdx + start.length);
  const after = html.slice(endIdx);
  html = `${before}\n${listHtml}\n${after}`;
  await fs.writeFile(INDEX_FILE, html, 'utf8');
  console.log(`Generated project list with ${projects.length} item(s).`);
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});

