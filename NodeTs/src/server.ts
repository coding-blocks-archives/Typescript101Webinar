import * as express from 'express'
import {route as teacherRoute} from './routes/teachers'
import {route as studentRoute} from './routes/students'
import {Application} from 'express'
import {ExpressGA} from 'express-ga-middleware'

const app: Application = express();

const expGa = ExpressGA('UA-91824691-1')


app.get('/', expGa.event({
  category: 'myevent',
  label: 'mylabel',
  value: 10,
  action: 'action'
}), (req, res) => {
  res.send('Hello World !')
})


app.use(expGa)


app.use('/students', studentRoute)
app.use('/teachers', teacherRoute)


app.listen(2345, () => {
  console.log('Server started on http://localhost:2345/');
})