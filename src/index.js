import Header from './components/Header'
import Button from './components/Button'

const header = Header('Quiz App', 'May the best win!')
document.body.append(header)

const button = Button('Click me!')
const button2 = Button('Hold me')
document.body.append(button)
document.body.append(button2)
