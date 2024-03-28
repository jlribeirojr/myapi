import { DataSource } from 'typeorm'
import { CreateRolesTable1711585825551 } from './migrations/1711585825551-CreateRolesTable'
import { Role } from '@roles/entities/Roles'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1711585825551],
})
