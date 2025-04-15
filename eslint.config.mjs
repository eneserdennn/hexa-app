import pluginJs from '@eslint/js';
import hookSort from 'eslint-plugin-hooks';
import importPlugin from 'eslint-plugin-import';
import importNewlines from 'eslint-plugin-import-newlines';
import localRules from 'eslint-plugin-local-rules';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: true,
        navigator: true,
        window: true,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['./eslint-local-rules'],
        },
      },
    },
  },
  {
    plugins: {
      'react-native': pluginReactNative,
      'simple-import-sort': simpleImportSort,
      'import-newlines': importNewlines,
      'import': importPlugin,
      'hooks': hookSort,
      'local-rules': localRules,
    },
  },
  {
    ignores: [
      '.expo/*',
      'node_modules/*',
      'android/*',
      'ios/*',
      'metro.config.js',
      'expo-env.d.ts',
    ],
  },
  {
    rules: {
      // alert & console kullanımı
      // TODO 'no-console': 2,
      'no-alert': 2,
      // multi boşluk bırakma
      'no-multi-spaces': 2,
      // virgül sonrası boşluk zorunlu öncesi boşluk yok
      'comma-spacing': ['error', { before: false, after: true }],
      // key: sonrası boşluk
      'key-spacing': ['error', { beforeColon: false }],
      // satır öncesi ve sonrası gereksiz boşluk bırakmayı engelle
      'no-trailing-spaces': 2,
      // ; kullanımı
      'semi': ['error', 'always'],
      // obje virgül sonrası boşluk Pressable,View => Pressable, View
      'object-curly-spacing': [2, 'always'],
      // birden fazla boş satır engelle
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      // () => {} functions
      'func-style': 2,
      // 2 space indent
      'indent': ['error', 2],
      // sadece tek tırnak kullanımı
      'quotes': ['error', 'single'],
      // sayfa sonuna satır eklenmesi zorunlu
      'eol-last': 2,
      // çok satırlı objelerin sonuna virgül
      'comma-dangle': ['error', 'always-multiline'],
      // bloklar arası boşluklar
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', { functions: 'always', keywords: 'always', classes: 'always' }],

      // react jsx-indent düzenle
      'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
      // obje içi boşluk {eslint} => { eslint }
      'react/jsx-curly-spacing': [2, { when: 'never', children: { when: 'always' } }],
      // line başına maksimum 1 prop
      'react/jsx-max-props-per-line': ['error', { maximum: { single: 1, multi: 1 } }],
      // multi proplar yeni satırda olsun
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      // childi tek satıra indir
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      // prop için gereksiz {} kullanımını engelle
      'react/jsx-curly-brace-presence': ['error', { 'props': 'never' }],
      // yeni satırda kapat
      'react/jsx-closing-tag-location': 2,
      // parentler yeni satırda olsun
      'react/jsx-wrap-multilines': [
        2,
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          return: 'parens-new-line',
        },
      ],

      // tüm renkler palette olmalı
      'react-native/no-color-literals': 2,
      // inline stil kullanımı
      'react-native/no-inline-styles': 2,
      // kullanılmayan stilleri göster
      'react-native/no-unused-styles': 2,

      // TODO
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-explicit-any': 1,

      // prop için tek tırnak
      'jsx-quotes': ['error', 'prefer-single'],

      // import sıralama
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // react - react native - other imports
            ['^react$', '^react-native$', '^@?\\w'],
            // @ imports
            ['^(@|components)(/.*|$)'],
            // parent imports
            ['^@?\\w'],
          ],
        },
      ],
      'simple-import-sort/exports': 1,
      /*
      'simple-import-sort/exports': [
        'error',
        {
          groups: [
            ['^export \\* from'],
            ['^export {'],
          ],
        },
      ],
      */

      // import izinleri
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: 'react-native', importNames: ['ActivityIndicator'], message: 'Please use `Loading` instead.' },
            { name: 'react-native', importNames: ['SafeAreaView'], message: 'Please use `CustomSafeAreaView` instead.' },
            { name: 'react-native', importNames: ['Image'], message: 'Please use `expo-image` instead.' },
            {
              name: 'react-native',
              importNames: ['Text'],
              message: 'Please use `CustomText` instead.',
            },
            { name: 'react-native', importNames: ['Button'], message: 'Please use `CustomButton` instead.' },
            {
              name: 'react',
              importNames: ['useTransition'],
              message: 'Please import useTranslation from `react-i18next` instead.',
            },
            {
              name: 'react-native-gesture-handler',
              importNames: ['FlatList', 'ScrollView', 'TextInput', 'TouchableOpacity', 'TouchableHighlight', 'TouchableWithoutFeedback', 'TouchableNativeFeedback'],
              message: 'Please import it from `react-native` instead.',
            },
            { name: 'expo-router', importNames: ['useFocusEffect'], message: 'Please use `@react-navigation/native` instead.' },
            { name: 'expo-router', importNames: ['router'], message: 'Please use `useRouter` for navigation.' },
          ],
          patterns: ['@/*/*'],
        },
      ],

      // hook sıralama
      'hooks/sort': [
        2,
        {
          'groups': [
            'useLocalSearchParams',
            'useRouter',
            'useStyles',
            'useTranslation',
            'useModal',
            'showPopupMessage',

            // Stores
            'useUserStore',

            'useReducer',
            'useContext',
            'useDispatch',

            'useState',
            'useRef',

            'useCallback',
            'useEffect',
            'useFocusEffect',
          ],
        },
      ],

      // importları yeni satıra ayır
      'import-newlines/enforce': ['error', { items: 3 }],

      // dublicate importlara izin verme
      'import/no-duplicates': 'error',

      // local rule ??
      'local-rules/no-unused-unistyles': 'error',
      // 'local-rules/no-raw-strings': 'error',
    },
  },
];
