class SelectScreen {
    get selectItem() {
        return $('//android.widget.TextView[@content-desc="Accessibility"]');
    }
    get selectSubItem() {
        return $('//android.widget.TextView[@content-desc="Accessibility Node Provider"]');
    }
    
    get searchElement() {
        return $('//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]');
    }
    
}

module.exports = new SelectScreen();
