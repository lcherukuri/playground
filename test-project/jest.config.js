module.exports = {
    transformIgnorePatterns: [
        'node_modules/(?!(lcherukuri-logger)).+\\.js$'
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    coverageDirectory: 'coverage'
};
