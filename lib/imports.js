"use strict";

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
            rootAlias: {
                type: "string",
            },
            paths: {
                type: "array",
                items: {
                    type: "string",
                },
            },
        },
        additionalProperties: false,
      },
    ],
    docs: {
      url: "https://github.com",
    },
    messages: {
      replaceToAbsolutePath: "Run autofix to replace relative imports to absolute!",
    },
  },

  create: (context) => {
    const { rootAlias, paths = [] } = context.options[0] || {};

    return {
      Program: (programNode) => {
        programNode.body.forEach(item => {
            paths.forEach(path => {
                const relativePath = `../../${path}`;
                const pathIndex = item.source.value.indexOf(relativePath)
                if (pathIndex === -1) {
                    return;
                }
                const sourceCode = context.getSourceCode();
                const startIndex = item.source.range[0] + 1;
                const endIndex = startIndex + pathIndex + relativePath.length;

                context.report({
                    messageId: "replaceToAbsolutePath",
                    loc: {
                        start: sourceCode.getLocFromIndex(startIndex),
                        end: sourceCode.getLocFromIndex(item.source.range[1]),
                    },
                    fix: (fixer) => fixer.replaceTextRange([startIndex, endIndex], `${rootAlias}/${path}` ),
                });
            })
        })
      },
    };
  },
};
