import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSvg from '@fortawesome/fontawesome-free/svgs/solid/anchor.svg'
import bookmarkSvg from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSvg from '@fortawesome/fontawesome-free/svgs/solid/plus.svg'
import settingsSvg from '@fortawesome/fontawesome-free/svgs/solid/sliders-h.svg'

const buttonsConfig = [
  { text: 'Home', svgPath: homeSvg },
  { text: 'Bookmarks', svgPath: bookmarkSvg },
  { text: 'Create', svgPath: createSvg },
  { text: 'Settings', svgPath: settingsSvg },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons) // spread of buttons
  return el
}
