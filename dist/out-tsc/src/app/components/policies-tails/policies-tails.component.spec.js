import { async, TestBed } from '@angular/core/testing';
import { PoliciesTailsComponent } from './policies-tails.component';
describe('PoliciesTailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PoliciesTailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PoliciesTailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=policies-tails.component.spec.js.map