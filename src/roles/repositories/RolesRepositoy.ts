import { Role } from '@roles/entities/Roles'
type CreateRoleDTO = {
  name: string
}

export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }
  create({ name }: CreateRoleDTO): Role {
    const role = new Role()
    Object.assign(role, {
      name,
      createdAt: new Date(),
    })

    this.roles.push(role)
    return role
  }
  findAll(): Role[] {
    return this.roles
  }
}
