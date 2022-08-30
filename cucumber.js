
// cucumber.js
let args = [
  'features/**/*.feature',                // Specify our feature files
  '--require-module ts-node/register',    // Load TypeScript module
  '--require features/**/*.steps.ts',     // Load step definitions
  '--format progress-bar',                // Load custom formatter
  '--format @cucumber/pretty-formatter',  // Load custom formatter
  '--publish-quiet'                       // Only output JSON  
].join(' ');

module.exports = {
  default: args
};
