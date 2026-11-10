import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function casePhotoApiPlugin(): Plugin {
  return {
    name: 'case-photo-api',
    configureServer(server) {
      // Serve /cases/* dynamically from /cases or /public/cases
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/cases/')) {
          const filename = path.basename(req.url.split('?')[0]);
          const localCasesPath = path.join(process.cwd(), 'cases', filename);
          const publicCasesPath = path.join(process.cwd(), 'public', 'cases', filename);
          const targetFile = fs.existsSync(localCasesPath)
            ? localCasesPath
            : fs.existsSync(publicCasesPath)
            ? publicCasesPath
            : null;

          if (targetFile) {
            res.setHeader('Content-Type', 'image/jpeg');
            return fs.createReadStream(targetFile).pipe(res);
          }
        }
        next();
      });

      server.middlewares.use('/api/save-case-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { filename, base64Data } = JSON.parse(body);
              if (!filename || !base64Data) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Missing filename or base64Data' }));
                return;
              }
              const safeName = path.basename(filename);
              const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(cleanBase64, 'base64');

              const publicCasesDir = path.join(process.cwd(), 'public', 'cases');
              if (!fs.existsSync(publicCasesDir)) {
                fs.mkdirSync(publicCasesDir, { recursive: true });
              }
              fs.writeFileSync(path.join(publicCasesDir, safeName), buffer);

              const distCasesDir = path.join(process.cwd(), 'dist', 'cases');
              if (fs.existsSync(distCasesDir)) {
                fs.writeFileSync(path.join(distCasesDir, safeName), buffer);
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, filename: safeName, timestamp: Date.now() }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), casePhotoApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
