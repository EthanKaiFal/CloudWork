// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bike, UserProfile, brandStats, makeStats, bikeStats } = initSchema(schema);

export {
  Bike,
  UserProfile,
  brandStats,
  makeStats,
  bikeStats
};