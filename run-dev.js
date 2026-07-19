#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const projectRoot = __dirname;
const nextBin = path.join(projectRoot, 'node_modules', 'next', 'dist', 'bin', 'next');

console.log('Starting Next.js dev server from:', projectRoot);

const child = spawn('node', [nextBin, 'dev', '--port', '3000'], {
  cwd: projectRoot,
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code);
});
