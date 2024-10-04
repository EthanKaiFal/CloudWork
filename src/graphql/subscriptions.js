/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
      id
      userIdAMP
      riderLevel
      bikesOwned {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
      id
      userIdAMP
      riderLevel
      bikesOwned {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
      id
      userIdAMP
      riderLevel
      bikesOwned {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBike = /* GraphQL */ `
  subscription OnCreateBike($filter: ModelSubscriptionBikeFilterInput) {
    onCreateBike(filter: $filter) {
      id
      bikeNumber
      brand
      model
      year
      sold
      broken
      ownershipMonths
      score
      userId
      owner {
        id
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBike = /* GraphQL */ `
  subscription OnUpdateBike($filter: ModelSubscriptionBikeFilterInput) {
    onUpdateBike(filter: $filter) {
      id
      bikeNumber
      brand
      model
      year
      sold
      broken
      ownershipMonths
      score
      userId
      owner {
        id
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBike = /* GraphQL */ `
  subscription OnDeleteBike($filter: ModelSubscriptionBikeFilterInput) {
    onDeleteBike(filter: $filter) {
      id
      bikeNumber
      brand
      model
      year
      sold
      broken
      ownershipMonths
      score
      userId
      owner {
        id
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
