import { RolesRepository } from '@roles/repositories/RolesRepositoy'
import { Router } from 'express'

const rolesRouter = Router()

const rolesRepository = new RolesRepository()

rolesRouter.post('/', (request, response) => {
  const { name } = request.body
  const roleAlreadlyExists = rolesRepository.findByName(name)
  if (roleAlreadlyExists) {
    return response.status(400).json({ error: 'Role already exists' })
  }
  const role = rolesRepository.create({ name })

  return response.status(201).json(role)
})
rolesRouter.get('/', (request, response) => {
  const roles = rolesRepository.findAll()

  return response.json(roles)
})

export { rolesRouter }
