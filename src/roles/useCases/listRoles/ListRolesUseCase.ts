import { Role } from '@roles/entities/Roles'
import { RolesRepository } from '@roles/repositories/RolesRepositoy'

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}
  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
