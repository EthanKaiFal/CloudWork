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
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userIdAMP
        riderLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBikes = /* GraphQL */ `
  query SyncBikes(
    $filter: ModelBikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBrandStats = /* GraphQL */ `
  query GetBrandStats($brandName: String!) {
    getBrandStats(brandName: $brandName) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBrandStats = /* GraphQL */ `
  query ListBrandStats(
    $brandName: String
    $filter: ModelBrandStatsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBrandStats(
      brandName: $brandName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBrandStats = /* GraphQL */ `
  query SyncBrandStats(
    $filter: ModelBrandStatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrandStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMakeStats = /* GraphQL */ `
  query GetMakeStats($modelName: String!) {
    getMakeStats(modelName: $modelName) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMakeStats = /* GraphQL */ `
  query ListMakeStats(
    $modelName: String
    $filter: ModelMakeStatsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMakeStats(
      modelName: $modelName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMakeStats = /* GraphQL */ `
  query SyncMakeStats(
    $filter: ModelMakeStatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMakeStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getBikeStats = /* GraphQL */ `
  query GetBikeStats($id: ID!) {
    getBikeStats(id: $id) {
      id
      modelName
      bikeYear
      bikeNum
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listBikeStats = /* GraphQL */ `
  query ListBikeStats(
    $id: ID
    $filter: ModelBikeStatsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBikeStats(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        modelName
        bikeYear
        bikeNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBikeStats = /* GraphQL */ `
  query SyncBikeStats(
    $filter: ModelBikeStatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBikeStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        modelName
        bikeYear
        bikeNum
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
