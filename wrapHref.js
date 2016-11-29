const path = require('path');
const prettyBytes = require('pretty-bytes');

module.exports = function wrapHref(node, cwd) {
    const relativePath = path.relative(cwd, node.path);
    if ('children' in node) {
      return `<a href="./${relativePath}"><b>${node.name}</b></a> <br>`;
    } else {
      const size = prettyBytes(node.size);
      return `<a href="./${relativePath}">${node.name}</a> (${size}) <br>`;
    }
};
