#!/usr/bin/env node
const chalk = require('chalk');

async function main() {
  console.log(chalk.cyan('\n🔒 Security Auditor v1.0.0\n'));
  console.log(chalk.yellow('Check: gh repo view owner/repo --json vulnerabilityAlerts'));
}
if (require.main === module) main();
module.exports = { main };
