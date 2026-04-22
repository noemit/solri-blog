#!/bin/bash
# Postinstall script to patch Next.js jest-worker

NEXT_JEST_WORKER="/c/Users/Noemi/sol-ri/node_modules/next/dist/compiled/jest-worker"
NODE_JEST_WORKER="/c/Users/Noemi/sol-ri/node_modules/jest-worker"

if [ -d "$NEXT_JEST_WORKER" ] && [ -z -f "$NEXT_JEST_WORKER/index.js.bak" ]; then
  echo "Patching jest-worker to handle TypeErrors..."
  
  # Create symlink from next's jest-worker to the installed jest-worker
  # This won't work because next's jest-worker is compiled
  
  # Instead, let's patch the _onMessage function to catch errors
  if [ -f "$NODE_JEST_WORKER/build/index.js" ]; then
    # Copy and patch the jest-worker build
    cp "$NODE_JEST_WORKER/build/index.js" "$NEXT_JEST_WORKER/index_backup.js"
    grep -q "Unexpected response from worker" "$NEXT_JEST_WORKER/index.js" && \
    sed -i 's/throw new TypeError("Unexpected response from worker: "+e\[0\])/console.error("Jest-worker caught error:", e); return this._onProcessEnd(e, null)/g' "$NEXT_JEST_WORKER/index.js"
  fi
fi
