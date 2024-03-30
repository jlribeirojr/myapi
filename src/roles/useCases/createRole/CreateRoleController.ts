import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const createRoleUseCase = container.resolve(CreateRoleUseCase)
    const role = await createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
