import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerBike = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Bike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bikeNumber: number;
  readonly brand: string;
  readonly model: string;
  readonly year?: number | null;
  readonly sold?: boolean | null;
  readonly broken?: boolean | null;
  readonly ownershipMonths?: number | null;
  readonly score?: number | null;
  readonly userId: string;
  readonly owner?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBike = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Bike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly bikeNumber: number;
  readonly brand: string;
  readonly model: string;
  readonly year?: number | null;
  readonly sold?: boolean | null;
  readonly broken?: boolean | null;
  readonly ownershipMonths?: number | null;
  readonly score?: number | null;
  readonly userId: string;
  readonly owner: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bike = LazyLoading extends LazyLoadingDisabled ? EagerBike : LazyBike

export declare const Bike: (new (init: ModelInit<Bike>) => Bike) & {
  copyOf(source: Bike, mutator: (draft: MutableModel<Bike>) => MutableModel<Bike> | void): Bike;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIdAMP: string;
  readonly riderLevel?: string | null;
  readonly bikesOwned?: (Bike | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userIdAMP: string;
  readonly riderLevel?: string | null;
  readonly bikesOwned: AsyncCollection<Bike>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}