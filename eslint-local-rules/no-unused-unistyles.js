/* eslint-disable no-undef */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Detect unused styles in createStyleSheet calls',
      category: 'Possible Errors',
      recommended: false,
    },
    schema: [],
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        // const filename = context.getFilename();
        // console.log(`filename: ${filename}`);

        if (
          node.init &&
          node.init.callee &&
          node.init.callee.name === 'createStyleSheet'
        ) {
          const stylesObject = node.init.arguments[0].body.properties;

          const definedStyles = stylesObject.map(
            (property) => property.key.name || property.key.value,
          );

          // console.log(definedStyles);

          const sourceCode = context.getSourceCode().getText();

          definedStyles.forEach((style) => {
            const regex = new RegExp(`styles\\.${style}\\b`, 'g');
            if (!regex.test(sourceCode)) {
              context.report({
                node,
                message: `The style "${style}" is defined but never used.`,
              });
            }
          });
        }
      },
    };
  },
};
