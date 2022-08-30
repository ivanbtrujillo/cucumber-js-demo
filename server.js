const { fork } = require("child_process");

const subprocess = fork(
  "./node_modules/.bin/serve",
  ["-p", "8080", "--no-port-switching"],
  {
    detached: true,
    stdio: "ignore"
  }
);

subprocess.unref();
process.exit();
