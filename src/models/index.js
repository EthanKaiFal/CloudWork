// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bike, UserProfile } = initSchema(schema);

export {
  Bike,
  UserProfile
};