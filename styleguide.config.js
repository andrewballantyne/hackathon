module.exports = {
  components: 'src/components/**/index.{js,jsx,ts,tsx}',
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', []).parse,
};
