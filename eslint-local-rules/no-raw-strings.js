/* eslint-disable no-undef */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Do not allow raw strings; use the t function instead',
      recommended: true,
    },
    schema: [],
    messages: {
      noRawString: 'Avoid using raw strings. Use the t() function for localization.',
    },
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === 'string') {
          context.report({
            node,
            messageId: 'noRawString',
          });
        }
      },
    };
  },
};
