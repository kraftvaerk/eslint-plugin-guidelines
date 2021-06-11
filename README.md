# eslint-plugin-guidelines

Eslint plugin for Kraftvaerk development

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `@kraftvaerk/eslint-plugin-guidelines`:

```bash
npm install @kraftvaerk/eslint-plugin-guidelines --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@kraftvaerk/eslint-plugin-guidelines` globally.

## Usage

Add `@kraftvaerk/eslint-plugin-guidelines` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@kraftveark/@kraftvaerk/eslint-plugin-guidelines"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@kraftveark/@kraftvaerk/eslint-plugin-guidelines/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





