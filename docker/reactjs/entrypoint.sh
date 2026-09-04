#!/bin/sh
set -e

chown -R node:node /workspace/reactjs/node_modules

exec gosu node "$@"