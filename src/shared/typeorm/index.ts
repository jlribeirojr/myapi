import { DataSource } from 'typeorm'
import { CreateRolesTable1711585825551 } from './migrations/1711585825551-CreateRolesTable'
import { Role } from '@roles/entities/Roles'
import { CreateUsersTable1711833230356 } from './migrations/1711833230356-CreateUsersTable'
import { AddRoleIdToUsersTable1711833809316 } from './migrations/1711833809316-AddRoleIdToUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1711585825551,
    CreateUsersTable1711833230356,
    AddRoleIdToUsersTable1711833809316,
  ],
})
