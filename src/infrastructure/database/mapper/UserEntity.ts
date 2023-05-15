import { EntitySchema } from 'typeorm';

import { User } from 'domain/models/User';

import { BaseEntity } from './BaseEntity';


export const UserEntity = new EntitySchema<User>({
  name: 'User',
  tableName: 'users',
  target: User,
  columns: {
    ...BaseEntity,
    firstName: {
      type: String,
      length: 100,
    },
    email: {
      type: String,
      length: 100,
    },
    lastName: {
      type: String,
      length: 100,
    },
   
    password:{
      type: String,
      length: 100
    }
  },
  orderBy: {
    createdAt: 'ASC',
  },
  relations: {
    
  },
  indices: [
    {
      name: 'IDX_USERS',
      unique: true,
      columns: ['firtsName', 'email'],
    },
  ],
  uniques: [
    {
      name: 'UNIQUE_USERS',
      columns: ['email'],
    },
  ],
});
