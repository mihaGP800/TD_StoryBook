describe('addItemForm', () => {
    it('base example, visually looks correct', async () => {
        // APIs from jest-puppeteer
        await page.setDefaultNavigationTimeout(0)
        await page.goto('http://localhost:9009/iframe.html?id=todolist--add-item-form-story&args=&viewMode=story');
        const image = await page.screenshot();

        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
