var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
var FavsModalComponent = /** @class */ (function () {
    function FavsModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FavsModalComponent.prototype.ngOnInit = function () {
    };
    FavsModalComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    FavsModalComponent = __decorate([
        Component({
            selector: 'app-favs-modal',
            templateUrl: './favs-modal.component.html',
            styleUrls: ['./favs-modal.component.scss']
        }),
        __metadata("design:paramtypes", [MatDialogRef])
    ], FavsModalComponent);
    return FavsModalComponent;
}());
export { FavsModalComponent };
//# sourceMappingURL=favs-modal.component.js.map