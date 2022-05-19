import { Lightning, Router } from '@lightningjs/sdk'
import LS from 'lng-storage'

export default class OtherRoute extends Lightning.Component {
  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0x00000000,
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: 'Press UP to change color of Home page',
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xffffffff,
        },
      },
    }
  }

  _handleLeft() {
    Router.navigate('home')
  }

  _handleUp() {
    LS.set(
      'main',
      'color',
      Number(`0xff${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`),
      true
    )
  }
}
