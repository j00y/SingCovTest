import { Policy } from 'app/dtos/policy.dto';
import { PolicyModel } from 'app/models/policy.model';

export abstract class PoliciesMapper {
    public static policyToPolicyModel(policy: Policy): PolicyModel {
        const policyModel = new PolicyModel();
        policyModel.id = policy.id;
        policyModel.name = policy.name;
        policyModel.kind = policy.kind;
        policyModel.kindImage = policy.kindImage;
        policyModel.price = policy.price;
        policyModel.brand = policy.brand;
        policyModel.brandImage = policy.brandImage;
        policyModel.favouritePolicy = false;
        return policyModel;
    }
    public static policiesCollectionToPoliciesModelCollection(policies: Policy[]): PolicyModel[] {
        return policies.map(p => this.policyToPolicyModel(p));
    }
}
