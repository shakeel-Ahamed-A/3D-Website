import { readFile, access } from 'node:fs/promises';
const files=['index.html','src/main.js','src/styles.css','src/validation.js','README.md','LICENSE','.gitignore','vite.config.js'];
const failures=[];
for (const file of files) { try { await access(file); } catch { failures.push(`Missing required file: ${file}`); } }
const html=await readFile('index.html','utf8');
for (const fragment of ['#hero','#experience','#tracks','#schedule','#details']) if (!html.includes(`href="${fragment}"`)) failures.push(`Missing navigation target: ${fragment}`);
if (/href="#"/.test(html)) failures.push('Dead placeholder href found.');
if (/C:\\Users|[A-Za-z]:\\/.test(html)) failures.push('Local machine path found in HTML.');
if (!html.includes('aria-label') || !html.includes('<main')) failures.push('Core semantic accessibility markup is missing.');
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Quality check passed: ${files.length} required files, 5 navigation targets, no dead links or local paths.`);
