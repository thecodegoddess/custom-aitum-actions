/* eslint-disable sort-keys */
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {

    'arrow-body-style': [
      0,
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'arrow-parens': [
      2,
      'always',
    ],
    'callback-return': [
      2,
    ],
    'class-methods-use-this': [
      0,
    ],
    curly: [
      2,
      'all',
    ],

    'function-paren-newline': [
      0,
      'consistent',
    ],
    'func-names': [
      0,
    ],
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'global-require': [
      0,
    ],
    'handle-callback-err': [
      2,
      'err',
    ],
    'implicit-arrow-linebreak': [
      0,
      'beside',
    ],
    // 'import/default': [
    //   2,
    // ],
    // 'import/extensions': [
    //   'error',
    //   'never',
    // ],
    // 'import/first': [
    //   0,
    // ],
    // 'import/named': [
    //   2,
    // ],
    // 'import/namespace': [
    //   2,
    // ],
    // 'import/no-dynamic-require': [
    //   0,
    // ],
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: true,
    //   },
    // ],
    // 'import/no-cycle': [
    //   0,
    //   {
    //     maxDepth: '∞',
    //     ignoreExternal: false,
    //   },
    // ],
    // 'import/no-named-as-default': [
    //   0,
    // ],
    // 'import/no-unresolved': [
    //   2,
    //   {
    //     caseSensitive: true,
    //     caseSensitiveStrict: false,
    //   },
    // ],
    // 'import/order': [
    //   0,
    //   {
    //     groups: [
    //       [
    //         'builtin',
    //         'external',
    //         'internal',
    //       ],
    //     ],
    //     warnOnUnassignedImports: false,
    //   },
    // ],

    'lines-between-class-members': [
      0,
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: false,
      },
    ],
    'max-classes-per-file': [
      0,
      1,
    ],
    'newline-before-return': [
      2,
    ],
    'no-mixed-requires': [
      2,
      false,
    ],
    'no-invalid-this': [
      0,
    ],
    'no-console': [
      1,
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'no-return-assign': [
      0,
      'always',
    ],
    'no-underscore-dangle': [
      0,
      {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: true,
      },
    ],
    'object-curly-newline': [
      0,
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'operator-linebreak': [
      0,
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    'prefer-destructuring': [
      0,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-object-spread': [
      0,
    ],
    'semi-style': [
      0,
      'last',
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'constructor-super': [
      'error',
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-class-assign': [
      'error',
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-const-assign': [
      'error',
    ],
    'no-dupe-class-members': [
      'error',
    ],
    'no-duplicate-imports': [
      'off',
    ],
    'no-new-symbol': [
      'error',
    ],
    'no-restricted-exports': [
      'off',
      {
        restrictedNamedExports: [
          'default',
          'then',
        ],
      },
    ],
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],
    'no-this-before-super': [
      'error',
    ],
    'no-useless-computed-key': [
      'error',
    ],
    'no-useless-constructor': [
      'error',
    ],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': [
      'error',
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': [
      'error',
    ],
    'prefer-reflect': [
      'off',
    ],
    'prefer-rest-params': [
      'error',
    ],
    'prefer-spread': [
      'error',
    ],
    'prefer-template': [
      'error',
    ],
    'require-yield': [
      'error',
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],
    'symbol-description': [
      'error',
    ],
    'template-curly-spacing': [
      'error',
    ],
    'yield-star-spacing': [
      'error',
      'after',
    ],
    'init-declarations': [
      'off',
    ],
    'no-catch-shadow': [
      'off',
    ],
    'no-delete-var': [
      'error',
    ],
    'no-label-var': [
      'error',
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    'no-shadow': [
      'error',
    ],
    'no-shadow-restricted-names': [
      'error',
    ],
    'no-undef': [
      'error',
    ],
    'no-undef-init': [
      'error',
    ],
    'no-undefined': [
      'off',
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'array-bracket-newline': [
      'off',
      'consistent',
    ],
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      },
    ],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'consistent-this': [
      'off',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'function-call-argument-newline': [
      'off',
      'consistent',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],
    'id-blacklist': [
      'off',
    ],
    'id-denylist': [
      'off',
    ],
    'id-length': [
      'off',
    ],
    'id-match': [
      'off',
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        offsetTernaryExpressions: false,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'lines-around-comment': [
      'off',
    ],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'max-depth': [
      'off',
      4,
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': [
      'off',
    ],
    'max-params': [
      'off',
      3,
    ],
    'max-statements': [
      'off',
      10,
    ],
    'max-statements-per-line': [
      'off',
      {
        max: 1,
      },
    ],
    'multiline-comment-style': [
      'off',
      'starred-block',
    ],
    'multiline-ternary': [
      'off',
      'never',
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        properties: true,
      },
    ],
    'new-parens': [
      'error',
    ],
    'newline-after-var': [
      'off',
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-array-constructor': [
      'error',
    ],
    'no-bitwise': [
      'error',
    ],
    'no-continue': [
      'error',
    ],
    'no-inline-comments': [
      'off',
    ],
    'no-lonely-if': [
      'error',
    ],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '%',
            '**',
          ],
          [
            '%',
            '+',
          ],
          [
            '%',
            '-',
          ],
          [
            '%',
            '*',
          ],
          [
            '%',
            '/',
          ],
          [
            '/',
            '*',
          ],
          [
            '&',
            '|',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
          ],
          [
            '&&',
            '||',
          ],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-spaces-and-tabs': [
      'error',
    ],
    'no-multi-assign': [
      'error',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'no-negated-condition': [
      'off',
    ],
    'no-nested-ternary': [
      'error',
    ],
    'no-new-object': [
      'error',
    ],
    'no-plusplus': [
      'error',
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-spaced-func': [
      'error',
    ],
    'no-tabs': [
      'error',
    ],
    'no-ternary': [
      'off',
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'one-var': [
      'error',
      'never',
    ],
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'prefer-exponentiation-operator': [
      'off',
    ],
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'require-jsdoc': [
      'off',
    ],
    semi: [
      'error',
      'always',
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    'sort-vars': [
      'off',
    ],
    'space-before-blocks': [
      'error',
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            '/',
          ],
        },
        block: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            ':',
            '::',
          ],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'template-tag-spacing': [
      'error',
      'never',
    ],
    'unicode-bom': [
      'error',
      'never',
    ],
    'wrap-regex': [
      'off',
    ],
    'no-buffer-constructor': [
      'error',
    ],
    'no-new-require': [
      'error',
    ],
    'no-path-concat': [
      'error',
    ],
    'no-process-env': [
      'off',
    ],
    'no-process-exit': [
      'off',
    ],
    'no-restricted-modules': [
      'off',
    ],
    'no-sync': [
      'off',
    ],
    'for-direction': [
      'error',
    ],
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'no-async-promise-executor': [
      'error',
    ],
    'no-await-in-loop': [
      'error',
    ],
    'no-compare-neg-zero': [
      'error',
    ],
    'no-cond-assign': [
      'error',
      'always',
    ],
    'no-constant-condition': [
      'warn',
    ],
    'no-control-regex': [
      'error',
    ],
    'no-debugger': [
      'error',
    ],
    'no-dupe-args': [
      'error',
    ],
    'no-dupe-else-if': [
      'off',
    ],
    'no-dupe-keys': [
      'error',
    ],
    'no-duplicate-case': [
      'error',
    ],
    'no-empty': [
      'error',
    ],
    'no-empty-character-class': [
      'error',
    ],
    'no-ex-assign': [
      'error',
    ],
    'no-extra-boolean-cast': [
      'error',
    ],
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],
    'no-extra-semi': [
      'error',
    ],
    'no-func-assign': [
      'error',
    ],
    'no-import-assign': [
      'off',
    ],
    'no-inner-declarations': [
      'error',
    ],
    'no-invalid-regexp': [
      'error',
    ],
    'no-irregular-whitespace': [
      'error',
    ],
    'no-loss-of-precision': [
      'off',
    ],
    'no-misleading-character-class': [
      'error',
    ],
    'no-obj-calls': [
      'error',
    ],
    'no-promise-executor-return': [
      'off',
    ],
    'no-prototype-builtins': [
      'error',
    ],
    'no-regex-spaces': [
      'error',
    ],
    'no-setter-return': [
      'off',
    ],
    'no-sparse-arrays': [
      'error',
    ],
    'no-template-curly-in-string': [
      'error',
    ],
    'no-unexpected-multiline': [
      'error',
    ],
    'no-unreachable': [
      'error',
    ],
    'no-unreachable-loop': [
      'off',
      {
        ignore: [],
      },
    ],
    'no-unsafe-finally': [
      'error',
    ],
    'no-unsafe-negation': [
      'error',
    ],
    'no-useless-backreference': [
      'off',
    ],
    'no-negated-in-lhs': [
      'off',
    ],
    'require-atomic-updates': [
      'off',
    ],
    'use-isnan': [
      'error',
    ],
    'valid-jsdoc': [
      'off',
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'accessor-pairs': [
      'off',
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
        checkForEach: false,
      },
    ],
    'block-scoped-var': [
      'error',
    ],
    complexity: [
      'off',
      11,
    ],
    'consistent-return': [
      'error',
    ],
    'default-case': [
      'error',
      {
        commentPattern: '^no default$',
      },
    ],
    'default-case-last': [
      'off',
    ],
    'default-param-last': [
      'off',
    ],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    'dot-location': [
      'error',
      'property',
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'grouped-accessor-pairs': [
      'off',
    ],
    'guard-for-in': [
      'error',
    ],
    'no-alert': [
      'warn',
    ],
    'no-caller': [
      'error',
    ],
    'no-case-declarations': [
      'error',
    ],
    'no-constructor-return': [
      'off',
    ],
    'no-div-regex': [
      'off',
    ],
    'no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      },
    ],
    'no-empty-pattern': [
      'error',
    ],
    'no-eq-null': [
      'off',
    ],
    'no-eval': [
      'error',
    ],
    'no-extend-native': [
      'error',
    ],
    'no-extra-bind': [
      'error',
    ],
    'no-extra-label': [
      'error',
    ],
    'no-fallthrough': [
      'error',
    ],
    'no-floating-decimal': [
      'error',
    ],
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],
    'no-native-reassign': [
      'off',
    ],
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'no-implicit-globals': [
      'off',
    ],
    'no-implied-eval': [
      'error',
    ],
    'no-iterator': [
      'error',
    ],
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': [
      'error',
    ],
    'no-loop-func': [
      'error',
    ],
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    'no-multi-str': [
      'error',
    ],
    'no-new': [
      'error',
    ],
    'no-new-func': [
      'error',
    ],
    'no-new-wrappers': [
      'error',
    ],
    'no-octal': [
      'error',
    ],
    'no-octal-escape': [
      'error',
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'no-proto': [
      'error',
    ],
    'no-redeclare': [
      'error',
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-await': [
      'error',
    ],
    'no-script-url': [
      'error',
    ],
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': [
      'error',
    ],
    'no-sequences': [
      'error',
    ],
    'no-throw-literal': [
      'error',
    ],
    'no-unmodified-loop-condition': [
      'off',
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false,
      },
    ],
    'no-unused-labels': [
      'error',
    ],
    'no-useless-call': [
      'off',
    ],
    'no-useless-catch': [
      'error',
    ],
    'no-useless-concat': [
      'error',
    ],
    'no-useless-escape': [
      'error',
    ],
    'no-useless-return': [
      'error',
    ],
    'no-void': [
      'error',
    ],
    'no-warning-comments': [
      'off',
      {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
      },
    ],
    'no-with': [
      'error',
    ],
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-named-capture-group': [
      'off',
    ],
    'prefer-regex-literals': [
      'off',
    ],
    radix: [
      'error',
    ],
    'require-await': [
      'off',
    ],
    'require-unicode-regexp': [
      'off',
    ],
    'vars-on-top': [
      'error',
    ],
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    yoda: [
      'error',
    ],

  },
};
