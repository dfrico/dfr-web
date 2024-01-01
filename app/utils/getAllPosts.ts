const ignoreKeys = ['WIP', '/blog'];

function importAll(r: __WebpackModuleApi.RequireContext) {
  return r
    .keys()
    .filter((path) => !ignoreKeys.some((key) => path.includes(key)))
    .reverse()
    .map((fileName) => ({
      link: fileName.substr(1).replace(/\/page\.mdx$/, ''),
      module: r(fileName),
    }));
}

export default importAll(require.context('../(pages)/blog', true, /\.mdx$/));
