/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Angulartics2 } from 'angulartics2';
import * as i0 from "@angular/core";
import * as i1 from "angulartics2";
export class Angulartics2BaiduAnalytics {
    /**
     * @param {?} angulartics2
     */
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
        if (typeof _hmt === 'undefined') {
            _hmt = [];
        }
        else {
            _hmt.push(['_setAutoPageview', false]);
        }
        this.angulartics2.setUsername
            .subscribe((x) => this.setUsername(x));
        this.angulartics2.setUserProperties
            .subscribe((x) => this.setUserProperties(x));
    }
    /**
     * @return {?}
     */
    startTracking() {
        this.angulartics2.pageTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.pageTrack(x.path));
        this.angulartics2.eventTrack
            .pipe(this.angulartics2.filterDeveloperMode())
            .subscribe((x) => this.eventTrack(x.action, x.properties));
    }
    /**
     * Page Track in Baidu Analytics
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
     * @param {?} path Required url 'path'
     *
     * @return {?}
     */
    pageTrack(path) {
        if (typeof _hmt !== 'undefined' && _hmt) {
            _hmt.push(['_trackPageview', path]);
        }
    }
    /**
     * Track Event in Baidu Analytics
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
     * @param {?} action Name associated with the event
     * @param {?} properties Comprised of:
     *  - 'category' (string)
     *  - 'opt_label' (string)
     *  - 'opt_value' (string)
     *
     * @return {?}
     */
    eventTrack(action, properties) {
        // baidu analytics requires category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
            properties.opt_label = 'default';
            properties.opt_value = 'default';
        }
        if (typeof _hmt !== 'undefined' && _hmt) {
            _hmt.push([
                '_trackEvent',
                properties.category,
                action,
                properties.opt_label,
                properties.opt_value,
            ]);
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUsername(userId) {
        // set default custom variables name to 'identity' and 'value'
        _hmt.push(['_setCustomVar', 1, 'identity', userId]);
    }
    /**
     * @param {?} properties
     * @return {?}
     */
    setUserProperties(properties) {
        _hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
    }
}
Angulartics2BaiduAnalytics.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
Angulartics2BaiduAnalytics.ctorParameters = () => [
    { type: Angulartics2 }
];
/** @nocollapse */ Angulartics2BaiduAnalytics.ngInjectableDef = i0.defineInjectable({ factory: function Angulartics2BaiduAnalytics_Factory() { return new Angulartics2BaiduAnalytics(i0.inject(i1.Angulartics2)); }, token: Angulartics2BaiduAnalytics, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    Angulartics2BaiduAnalytics.prototype.angulartics2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFpZHUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvYmFpZHUvIiwic291cmNlcyI6WyJiYWlkdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFNNUMsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUNyQyxZQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUM1QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUMvQixJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ1g7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXO2FBQzFCLFNBQVMsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCO2FBQ2hDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVM7YUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM3QyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDN0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7Ozs7O0lBU0QsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztJQWFELFVBQVUsQ0FBQyxNQUFjLEVBQUUsVUFBZTtRQUN4QyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDOUIsVUFBVSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7WUFDOUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDakMsVUFBVSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDbEM7UUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixhQUFhO2dCQUNiLFVBQVUsQ0FBQyxRQUFRO2dCQUNuQixNQUFNO2dCQUNOLFVBQVUsQ0FBQyxTQUFTO2dCQUNwQixVQUFVLENBQUMsU0FBUzthQUNyQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDeEIsOERBQThEO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsVUFBZTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBMUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFMekIsWUFBWTs7Ozs7Ozs7SUFPUCxrREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5cblxuZGVjbGFyZSB2YXIgX2htdDogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkJhaWR1QW5hbHl0aWNzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMikge1xuICAgIGlmICh0eXBlb2YgX2htdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIF9obXQgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2htdC5wdXNoKFsnX3NldEF1dG9QYWdldmlldycsIGZhbHNlXSk7XG4gICAgfVxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lXG4gICAgICAuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcbiAgfVxuXG4gIHN0YXJ0VHJhY2tpbmcoKTogdm9pZCB7XG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrXG4gICAgICAucGlwZSh0aGlzLmFuZ3VsYXJ0aWNzMi5maWx0ZXJEZXZlbG9wZXJNb2RlKCkpXG4gICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhZ2UgVHJhY2sgaW4gQmFpZHUgQW5hbHl0aWNzXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIFJlcXVpcmVkIHVybCAncGF0aCdcbiAgICpcbiAgICogQGxpbmsgaHR0cDovL3RvbmdqaS5iYWlkdS5jb20vb3Blbi9hcGkvbW9yZT9wPXJlZl90cmFja1BhZ2V2aWV3XG4gICAqL1xuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBfaG10ICE9PSAndW5kZWZpbmVkJyAmJiBfaG10KSB7XG4gICAgICBfaG10LnB1c2goWydfdHJhY2tQYWdldmlldycsIHBhdGhdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2sgRXZlbnQgaW4gQmFpZHUgQW5hbHl0aWNzXG4gICAqXG4gICAqIEBwYXJhbSBhY3Rpb24gTmFtZSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZjpcbiAgICogIC0gJ2NhdGVnb3J5JyAoc3RyaW5nKVxuICAgKiAgLSAnb3B0X2xhYmVsJyAoc3RyaW5nKVxuICAgKiAgLSAnb3B0X3ZhbHVlJyAoc3RyaW5nKVxuICAgKlxuICAgKiBAbGluayBodHRwOi8vdG9uZ2ppLmJhaWR1LmNvbS9vcGVuL2FwaS9tb3JlP3A9cmVmX3RyYWNrRXZlbnRcbiAgICovXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xuICAgIC8vIGJhaWR1IGFuYWx5dGljcyByZXF1aXJlcyBjYXRlZ29yeVxuICAgIGlmICghcHJvcGVydGllcyB8fCAhcHJvcGVydGllcy5jYXRlZ29yeSkge1xuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5ID0gJ0V2ZW50JztcbiAgICAgIHByb3BlcnRpZXMub3B0X2xhYmVsID0gJ2RlZmF1bHQnO1xuICAgICAgcHJvcGVydGllcy5vcHRfdmFsdWUgPSAnZGVmYXVsdCc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfaG10ICE9PSAndW5kZWZpbmVkJyAmJiBfaG10KSB7XG4gICAgICBfaG10LnB1c2goW1xuICAgICAgICAnX3RyYWNrRXZlbnQnLFxuICAgICAgICBwcm9wZXJ0aWVzLmNhdGVnb3J5LFxuICAgICAgICBhY3Rpb24sXG4gICAgICAgIHByb3BlcnRpZXMub3B0X2xhYmVsLFxuICAgICAgICBwcm9wZXJ0aWVzLm9wdF92YWx1ZSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgLy8gc2V0IGRlZmF1bHQgY3VzdG9tIHZhcmlhYmxlcyBuYW1lIHRvICdpZGVudGl0eScgYW5kICd2YWx1ZSdcbiAgICBfaG10LnB1c2goWydfc2V0Q3VzdG9tVmFyJywgMSwgJ2lkZW50aXR5JywgdXNlcklkXSk7XG4gIH1cblxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcbiAgICBfaG10LnB1c2goWydfc2V0Q3VzdG9tVmFyJywgMiwgJ3VzZXInLCBKU09OLnN0cmluZ2lmeShwcm9wZXJ0aWVzKV0pO1xuICB9XG59XG4iXX0=