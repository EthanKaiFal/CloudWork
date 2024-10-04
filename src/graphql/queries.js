/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $id: ID
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
  query GetBike($id: ID!) {
    getBike(id: $id) {
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
export const listBikes = /* GraphQL */ `
  query ListBikes(
    $id: ID
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBikes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        id
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
