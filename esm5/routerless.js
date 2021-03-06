import { BehaviorSubject } from 'rxjs';
var RouterlessTracking = /** @class */ (function () {
    function RouterlessTracking() {
    }
    RouterlessTracking.prototype.trackLocation = function (settings) {
        return new BehaviorSubject({ url: '/' });
    };
    RouterlessTracking.prototype.prepareExternalUrl = function (url) {
        return url;
    };
    return RouterlessTracking;
}());
export { RouterlessTracking };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVybGVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbInJvdXRlcmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQVFwRDtJQUFBO0lBT0EsQ0FBQztJQU5DLDBDQUFhLEdBQWIsVUFBYyxRQUE4QjtRQUMxQyxPQUFPLElBQUksZUFBZSxDQUFxQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCwrQ0FBa0IsR0FBbEIsVUFBbUIsR0FBVztRQUM1QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFQRCxJQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczJTZXR0aW5ncyB9IGZyb20gJy4vYW5ndWxhcnRpY3MyLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tOYXZpZ2F0aW9uRW5kIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJsZXNzVHJhY2tpbmcge1xuICB0cmFja0xvY2F0aW9uKHNldHRpbmdzOiBBbmd1bGFydGljczJTZXR0aW5ncyk6IE9ic2VydmFibGU8VHJhY2tOYXZpZ2F0aW9uRW5kPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3Q8VHJhY2tOYXZpZ2F0aW9uRW5kPih7IHVybDogJy8nIH0pO1xuICB9XG4gIHByZXBhcmVFeHRlcm5hbFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19