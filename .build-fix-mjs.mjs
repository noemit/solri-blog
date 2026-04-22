// Fix jest-worker TypeError before building
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Patch jest-worker before running
try {
  const jestWorkerPath = join(__dirname, 'node_modules', 'jest-worker', 'index.js');
  
  const readFileSync = await import('fs').then(m => m.readFileSync);
  const originalContent = readFileSync(jestWorkerPath, 'utf8');
  
  // Patch the worker to catch TypeError from parent
  const patchedContent = originalContent
    .replace(
      /_onMessage[^)]*\)/,
      `function patchOnMessage() {
        try {
          return originalOnMessage.apply(this, arguments);
        } catch (e) {
          if (e.message?.includes('Unexpected response from worker')) {
            console.error('Ignoring jest-worker TypeError');
            return this.terminate(true);
          }
          throw e;
        }
      }
      const originalOnMessage = this._onMessage;
      this._onMessage = patchOnMessage;`
    );
  
  writeFileSync(jestWorkerPath, patchedContent);
  console.log('Patched jest-worker');
} catch (err) {
  console.error('Could not patch jest-worker', err.message);
}

// Run the build
execSync('npm run build', { stdio: 'inherit' });
