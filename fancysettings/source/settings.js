window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.report_bug.addEvent("action", function () {
            window.open("https://github.com/wittman/goldenviewfriendfeedimagezoom/issues/new");
        });
        settings.manifest.extension_page.addEvent("action", function () {
            window.open("https://chrome.google.com/webstore/detail/TODO");
        });
        settings.manifest.developer_page.addEvent("action", function () {
            window.open("http://friendfeed.com/micahwittman");
        });
    });
});