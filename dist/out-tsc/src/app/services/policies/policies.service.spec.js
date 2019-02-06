import { TestBed } from '@angular/core/testing';
import { PoliciesService } from './policies.service';
describe('PoliciesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PoliciesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=policies.service.spec.js.map