import { RolesRepository } from '@roles/repositories/RolesRepositoy'
import { ShowRoleUseCase } from './ShowRoleUseCase'
import { ShowRoleController } from './ShowroleController'

const rolesRepository = RolesRepository.getInstance()
const showRoleUseCase = new ShowRoleUseCase(rolesRepository)
export const showRolesController = new ShowRoleController(showRoleUseCase)
