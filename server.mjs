// Servidor de vista previa local. El hosting final solo necesita los archivos estáticos.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg' };
const allowed = new Set(['/index.html', '/styles.css', '/script.js']);
http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const target = pathname === '/' ? '/index.html' : pathname;
    // Lista explícita: nunca exponer adjuntos privados, Git ni configuración local.
    if (!allowed.has(target) && !/^\/assets\/[a-z-]+\.jpg$/.test(target)) {
      res.writeHead(404); res.end('No encontrado'); return;
    }
    const content = await readFile(path.join(root, target));
    res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    res.end(content);
  } catch { res.writeHead(404); res.end('No encontrado'); }
}).listen(4173, '127.0.0.1', () => console.log('Demo disponible en http://localhost:4173'));
