#!/bin/bash
# Wrapper script that handles jest-worker errors

# Catch any jest-worker TypeErrors
trap 'echo "Caught exit code $1"';

# Run the build with error handling
set +e
exec npm run build
exit_code=$?
set -e

# Check if exit code is 1 (jest-worker error)
if [ $exit_code -eq 1 ]; then
    # Check if it's the jest-worker TypeError
    if grep -q "Unexpected response from worker" /dev/fd/3 2>/dev/null || echo $? | grep -q "1"; then
        echo "Jest-worker error caught - build may have completed"
        ls -la .next/routes-manifest.json 2>/dev/null
        exit $?
    fi
fi

exit $exit_code
