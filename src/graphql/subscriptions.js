/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateBrandStats = /* GraphQL */ `
  subscription OnCreateBrandStats(
    $filter: ModelSubscriptionBrandStatsFilterInput
  ) {
    onCreateBrandStats(filter: $filter) {
      brandName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBrandStats = /* GraphQL */ `
  subscription OnUpdateBrandStats(
    $filter: ModelSubscriptionBrandStatsFilterInput
  ) {
    onUpdateBrandStats(filter: $filter) {
      brandName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBrandStats = /* GraphQL */ `
  subscription OnDeleteBrandStats(
    $filter: ModelSubscriptionBrandStatsFilterInput
  ) {
    onDeleteBrandStats(filter: $filter) {
      brandName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMakeStats = /* GraphQL */ `
  subscription OnCreateMakeStats(
    $filter: ModelSubscriptionMakeStatsFilterInput
  ) {
    onCreateMakeStats(filter: $filter) {
      modelName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMakeStats = /* GraphQL */ `
  subscription OnUpdateMakeStats(
    $filter: ModelSubscriptionMakeStatsFilterInput
  ) {
    onUpdateMakeStats(filter: $filter) {
      modelName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMakeStats = /* GraphQL */ `
  subscription OnDeleteMakeStats(
    $filter: ModelSubscriptionMakeStatsFilterInput
  ) {
    onDeleteMakeStats(filter: $filter) {
      modelName
      avgSatisScore
      totalNumBikes
      numFirstBike
      numSecondBike
      numThirdPlusBike
      numBroken
      numSold
      avgOwnership
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBikeStats = /* GraphQL */ `
  subscription OnCreateBikeStats(
    $filter: ModelSubscriptionBikeStatsFilterInput
  ) {
    onCreateBikeStats(filter: $filter) {
      id
      modelName
      bikeYear
      bikeNum
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBikeStats = /* GraphQL */ `
  subscription OnUpdateBikeStats(
    $filter: ModelSubscriptionBikeStatsFilterInput
  ) {
    onUpdateBikeStats(filter: $filter) {
      id
      modelName
      bikeYear
      bikeNum
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBikeStats = /* GraphQL */ `
  subscription OnDeleteBikeStats(
    $filter: ModelSubscriptionBikeStatsFilterInput
  ) {
    onDeleteBikeStats(filter: $filter) {
      id
      modelName
      bikeYear
      bikeNum
      createdAt
      updatedAt
      __typename
    }
  }
`;
