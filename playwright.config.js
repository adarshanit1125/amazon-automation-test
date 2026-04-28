// playwright.config.js
module.exports = {
    testDir: './tests',
    fullyParallel: true,
    workers: 2,
    timeout: 60000,
    use: {
        headless: false
    }
};