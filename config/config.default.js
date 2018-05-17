'use strict';

/**
 * egg-extra-loader default config
 * @member Config#extraLoader
 * @property {String} SOME_KEY - some description
 */
exports.extraLoader = {
    base: 'app',
    toBind: ['app','ctx'],
    defaultOptions: {
        call: false
    },
    bindings: []
};
