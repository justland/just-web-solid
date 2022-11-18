/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  customTitle: '@just-web for Solid',
  customTitleLink: 'https://github.com/justland/just-web-solid',
  entryPointStrategy: 'packages',
  entryPoints: [
    'components/headlessui'
  ],
  out: 'docs'
}
