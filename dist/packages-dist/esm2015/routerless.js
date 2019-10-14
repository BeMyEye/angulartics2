import { BehaviorSubject } from 'rxjs';
export class RouterlessTracking {
    trackLocation(settings) {
        return new BehaviorSubject({ url: '/' });
    }
    prepareExternalUrl(url) {
        return url;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVybGVzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ0aWNzMi8iLCJzb3VyY2VzIjpbInJvdXRlcmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBZSxNQUFNLE1BQU0sQ0FBQztBQVFwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLGFBQWEsQ0FBQyxRQUE4QjtRQUMxQyxPQUFPLElBQUksZUFBZSxDQUFxQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxHQUFXO1FBQzVCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbmd1bGFydGljczJTZXR0aW5ncyB9IGZyb20gJy4vYW5ndWxhcnRpY3MyLWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tOYXZpZ2F0aW9uRW5kIHtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJsZXNzVHJhY2tpbmcge1xuICB0cmFja0xvY2F0aW9uKHNldHRpbmdzOiBBbmd1bGFydGljczJTZXR0aW5ncyk6IE9ic2VydmFibGU8VHJhY2tOYXZpZ2F0aW9uRW5kPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3Q8VHJhY2tOYXZpZ2F0aW9uRW5kPih7IHVybDogJy8nIH0pO1xuICB9XG4gIHByZXBhcmVFeHRlcm5hbFVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19