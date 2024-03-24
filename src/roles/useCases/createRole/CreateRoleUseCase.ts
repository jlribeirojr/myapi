import { Role } from '@roles/entities/Roles'
import { RolesRepository } from '@roles/repositories/RolesRepositoy'
import { AppError } from '@shared/errors/AppError'

type CreateRoleDTO = {
  name: string
}
export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadlyExists = this.rolesRepository.findByName(name)
    if (roleAlreadlyExists) {
      throw new AppError('Role already exists')
    }
    return this.rolesRepository.create({ name })
  }
}
