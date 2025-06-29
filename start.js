// start.js
const { spawn } = require('child_process');

function run(name, command, args) {
  const proc = spawn(command, args, {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, FORCE_COLOR: 'true' },
  });

  proc.on('close', (code) => {
    if (code !== 0) {
      console.error(`[${name}] exited with code ${code}`);
    }
  });
}

// Start backend server
run('server', 'npm', ['run', 'start:server-dev']);

// Start frontend client
run('client', 'npm', ['run', 'start:client']);
