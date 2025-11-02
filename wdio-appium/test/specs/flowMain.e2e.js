const SelectScreen = require('../screenObjects/select.screen');

describe('Flow Tests', () => {
    it('Select an item from list and verify text', async () => {
        await SelectScreen.selectItem.click();
        await SelectScreen.selectSubItem.click();
        await expect(SelectScreen.searchElement).toHaveText(
      "Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."
    );
    
    });
});