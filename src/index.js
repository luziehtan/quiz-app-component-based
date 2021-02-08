import createElement from '../../lib/createElement'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Navigation from './components/Navigation/Navigation'

const { el: headerEl, setText: setHeaderText } = Header(
  'Quiz App',
  'May the best win!'
)

const navigation = Navigation(onNavigate)

function onNavigate(text) {
  console.log(text)
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  Card('Foo bar?', 'Bar baz!'),
  navigation
)

setHeaderText('Create', 'a new card')

document.body.append(grid)
