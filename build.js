var fs_extra_1 = require('fs-extra');
var ng_packagr_1 = require('ng-packagr');
var path_1 = require('path');
var rimraf = require('rimraf');
var CORE_MODULE_NAMES = ['uiroutermodule', 'routerlessmodule'];
// Rollup globals
var MODULE_NAMES = [
    'adobeanalytics',
    'appinsights',
    'baidu',
    'facebook',
    'ga',
    'ga-enhanced-ecom',
    'gtm',
    'gst',
    'hubspot',
    'kissmetrics',
    'launch',
    'mixpanel',
    'pyze',
    'piwik',
    'segment',
    'intercom',
    'woopra',
    'clicky',
    'amplitude',
    'splunk',
    'ibm-digital-analytics',
    'gosquared',
];
async;
function main() {
    // cleanup dist
    rimraf.sync(path_1.join(process.cwd(), '/dist'));
    rimraf.sync(path_1.join(process.cwd(), '/node_modules/angulartics2'));
    await;
    ng_packagr_1.ngPackagr()
        .forProject(path_1.join(process.cwd(), 'src/lib/core/package.json'))
        .build();
    // put it in node modules so the path resolves
    // proper path support eventually
    fs_extra_1.copySync(path_1.join(process.cwd(), '/dist/core'), path_1.join(process.cwd(), '/node_modules/angulartics2'));
    fs_extra_1.copySync(path_1.join(process.cwd(), '/dist/core'), path_1.join(process.cwd(), '/dist/packages-dist'));
    for (var _i = 0; _i < CORE_MODULE_NAMES.length; _i++) {
        var m = CORE_MODULE_NAMES[_i];
        await;
        ng_packagr_1.ngPackagr()
            .forProject(path_1.join(process.cwd(), "src/lib/" + m + "/package.json"))
            .build();
    }
    // build each provider
    for (var _a = 0; _a < MODULE_NAMES.length; _a++) {
        var m = MODULE_NAMES[_a];
        await;
        ng_packagr_1.ngPackagr()
            .forProject(path_1.join(process.cwd(), "src/lib/providers/" + m + "/package.json"))
            .build();
    }
    fs_extra_1.copySync('README.md', path_1.join(process.cwd(), 'dist/packages-dist/README.md'));
    fs_extra_1.copySync('LICENSE', path_1.join(process.cwd(), 'dist/packages-dist/LICENSE'));
}
main()
    .then(function () { return console.log('success'); })
    .catch(function (e) {
    console.error(e);
    process.exit(1);
});
