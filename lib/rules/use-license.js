/**
* @fileoverview Provide license comments!
* @author Jegors Batovs
*/

const licenseComment = `
/**
 * Kraftvaerk
 * Copyright © Kraftvaerk, Inc. All rights reserved.
 */
`;

module.exports = {
    meta: {
        docs: {
            description: 'Do not forget to provide license comments!',
            category: 'Coding standard',
            recommended: false
        },
        fixable: 'code'
    },

    create: (context) => ({
        Program(node) {
            const comments = context.getSourceCode().getAllComments();

            if (!comments.find((comment) => comment.value.includes('@license'))) {
                context.report({
                    node,
                    message: 'Provide license comments!',
                    fix: (fixer) => fixer.insertTextBefore(node, licenseComment)
                });
            }
        }
    })
};
