import { DataSource } from 'typeorm'
import { CreateRolesTable1711585825551 } from './migrations/1711585825551-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1711585825551],
})
