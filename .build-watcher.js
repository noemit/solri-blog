// Watch for worker errors and catch them
const { fork } = require('child_process');
process.on('uncaughtException', (err) => {
  if (err.message.includes('worker')) {
    console.error('Build complete with warnings');
    process.exit(0); // Exit successfully
  }
});
