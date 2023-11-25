if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log("                                                                         ");
  console.warn('****************************** Warning *********************************');
  console.warn('****************** Do not use the npm or yarn command ******************');
  console.warn("************************************************************************");
  console.log("                                                                         ");
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  process.exit(1)
}
