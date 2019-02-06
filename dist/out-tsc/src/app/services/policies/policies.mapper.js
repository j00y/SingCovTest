import { PolicyModel } from 'app/models/policy.model';
var PoliciesMapper = /** @class */ (function () {
    function PoliciesMapper() {
    }
    PoliciesMapper.policyToPolicyModel = function (policy) {
        var policyModel = new PolicyModel();
        policyModel.id = policy.id;
        policyModel.name = policy.name;
        policyModel.kind = policy.kind;
        policyModel.kindImage = policy.kindImage;
        policyModel.price = policy.price;
        policyModel.brand = policy.brand;
        policyModel.brandImage = policy.brandImage;
        policyModel.favouritePolicy = false;
        return policyModel;
    };
    PoliciesMapper.policiesCollectionToPoliciesModelCollection = function (policies) {
        var _this = this;
        return policies.map(function (p) { return _this.policyToPolicyModel(p); });
    };
    return PoliciesMapper;
}());
export { PoliciesMapper };
//# sourceMappingURL=policies.mapper.js.map