import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { UsersRepository } from '@users/repositories/UsersRepositoy'

import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
