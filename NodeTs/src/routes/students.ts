import {Request, Response, Router} from 'express'
import {Person} from '../models/person'

const route = Router();

let students: Person[] = [
  {name: 'Rishabh'},
  {name: 'Bhavya'}
]

route.get('/', (req: Request, res: Response) => {
  res.send(students)
})

export {
  route
}