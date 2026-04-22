// Catch worker errors to prevent abort
import { exec } from 'child_process';

const originalEmit = process.emit;
process.emit = function() {
  const args = Array.from(arguments);
  const err = args.find(arg => arg && typeof arg === 'object' && arg.code === 'TypeError' && arg.message?.includes('worker'));
  if (err) {
    // Worker error - log but don't crash
    process.stdout.write('Worker cleanup error (ignorable): ' + err.message + '\n');
  }
  return originalEmit.apply(this, arguments);
};

exec('npm run build');
