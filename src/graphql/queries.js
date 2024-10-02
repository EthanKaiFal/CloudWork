/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($userId: ID!) {
    getUserProfile(userId: $userId) {
      userId
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $userId: ID
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserProfiles(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBike = /* GraphQL */ `
  query GetBike($bikeId: ID!) {
    getBike(bikeId: $bikeId) {
      bikeId
      brand
      model
      year
      sold
      broken
      ownershipMonths
      userId
      owner {
        userId
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
export const listBikes = /* GraphQL */ `
  query ListBikes(
    $bikeId: ID
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBikes(
      bikeId: $bikeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        bikeId
        brand
        model
        year
        sold
        broken
        ownershipMonths
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userByUserId = /* GraphQL */ `
  query UserByUserId(
    $userIdAMP: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUserId(
      userIdAMP: $userIdAMP
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bikesByUserId = /* GraphQL */ `
  query BikesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bikesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bikeId
        brand
        model
        year
        sold
        broken
        ownershipMonths
        userId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
