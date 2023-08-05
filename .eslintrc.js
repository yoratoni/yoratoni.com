module.exports = {
    plugins: [
        "react",
        "@typescript-eslint",
        "import"
    ],
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    settings: {
        "react": {
            "createClass": "createReactClass",      // Regex for Component Factory to use,
            "pragma": "React",                      // Pragma to use, default to "React"
            "fragment": "Fragment",                 // Fragment to use (may be a property of <pragma>), default to "Fragment"
            "version": "detect",                    // React version. "detect" automatically picks the version you have installed.
            "flowVersion": "0.53"                   // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {
                "property": "freeze",
                "object": "Object"
            },
            {
                "property": "myFavoriteWrapper"
            },
            // for rules that check exact prop wrappers
            {
                "property": "forbidExtraProps",
                "exact": true
            }
        ],
        "componentWrapperFunctions": [
            // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
            "observer",
            {
                "property": "styled"
            },
            {
                "property": "observer",
                "object": "Mobx"
            },
            {
                "property": "observer",
                "object": "<pragma>"
            }
        ],
        "formComponents": [
            // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
            "CustomForm",
            {
                "name": "Form",
                "formAttribute": "endpoint"
            }
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {
                "name": "Link",
                "linkAttribute": "to"
            }
        ],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
                "project": "./tsconfig.json"
            }
        }
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "sort-imports": [
            "warn",
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
                allowSeparatedGroups: true
            }
        ],
        "import/no-unresolved": "error",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown"
                ],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                }
            }
        ],
        "import/no-useless-path-segments": [
            "warn",
            {
                noUselessIndex: true
            }
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "import/newline-after-import": [
            "warn",
            {
                count: 2
            }
        ]
    }
};