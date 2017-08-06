import {Router} from 'express'
import {Person} from '../models/person'

const route = Router();

let teachers: Person[] = [
  {name: 'Arnav'},
  {name: 'Prateek'},
]

route.get('/', (req, res) => {
  res.send(teachers)
})

route.get('/:id/name', (req, res) => {
  res.send(teachers[parseInt(req.params.id)].name)
})

export {route}