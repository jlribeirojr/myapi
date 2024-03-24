import { Role } from '@roles/entities/Roles'
import { Router } from 'express'

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const role = new Role()
  Object.assign(role, {
    name,
    createdAt: new Date(),
  })

  roles.push(role)
  return response.status(201).json(role)
})

export { rolesRouter }
