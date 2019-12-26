module.exports = {
    'check-coverage': false,
    cache: false,
    all: true,
    include: ['src/**/*.ts'],
    exclude: [
        'lib',
        'test', 
        '**/*.d.ts',
        '**/node_modules/**',
        'coverage'
    ],
    reporter: ['html', 'text-summary'],
    extension: ['.ts']
};