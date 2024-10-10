/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBike = /* GraphQL */ `
  mutation CreateBike(
    $input: CreateBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    createBike(input: $input, condition: $condition) {
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
export const updateBike = /* GraphQL */ `
  mutation UpdateBike(
    $input: UpdateBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    updateBike(input: $input, condition: $condition) {
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
export const deleteBike = /* GraphQL */ `
  mutation DeleteBike(
    $input: DeleteBikeInput!
    $condition: ModelBikeConditionInput
  ) {
    deleteBike(input: $input, condition: $condition) {
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
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createBrandStats = /* GraphQL */ `
  mutation CreateBrandStats(
    $input: CreateBrandStatsInput!
    $condition: ModelBrandStatsConditionInput
  ) {
    createBrandStats(input: $input, condition: $condition) {
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
export const updateBrandStats = /* GraphQL */ `
  mutation UpdateBrandStats(
    $input: UpdateBrandStatsInput!
    $condition: ModelBrandStatsConditionInput
  ) {
    updateBrandStats(input: $input, condition: $condition) {
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
export const deleteBrandStats = /* GraphQL */ `
  mutation DeleteBrandStats(
    $input: DeleteBrandStatsInput!
    $condition: ModelBrandStatsConditionInput
  ) {
    deleteBrandStats(input: $input, condition: $condition) {
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
export const createMakeStats = /* GraphQL */ `
  mutation CreateMakeStats(
    $input: CreateMakeStatsInput!
    $condition: ModelMakeStatsConditionInput
  ) {
    createMakeStats(input: $input, condition: $condition) {
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
export const updateMakeStats = /* GraphQL */ `
  mutation UpdateMakeStats(
    $input: UpdateMakeStatsInput!
    $condition: ModelMakeStatsConditionInput
  ) {
    updateMakeStats(input: $input, condition: $condition) {
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
export const deleteMakeStats = /* GraphQL */ `
  mutation DeleteMakeStats(
    $input: DeleteMakeStatsInput!
    $condition: ModelMakeStatsConditionInput
  ) {
    deleteMakeStats(input: $input, condition: $condition) {
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
export const createBikeStats = /* GraphQL */ `
  mutation CreateBikeStats(
    $input: CreateBikeStatsInput!
    $condition: ModelBikeStatsConditionInput
  ) {
    createBikeStats(input: $input, condition: $condition) {
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
export const updateBikeStats = /* GraphQL */ `
  mutation UpdateBikeStats(
    $input: UpdateBikeStatsInput!
    $condition: ModelBikeStatsConditionInput
  ) {
    updateBikeStats(input: $input, condition: $condition) {
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
export const deleteBikeStats = /* GraphQL */ `
  mutation DeleteBikeStats(
    $input: DeleteBikeStatsInput!
    $condition: ModelBikeStatsConditionInput
  ) {
    deleteBikeStats(input: $input, condition: $condition) {
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
