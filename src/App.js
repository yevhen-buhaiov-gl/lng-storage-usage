import { Router, Utils } from '@lightningjs/sdk'
import LS from 'lng-storage'
import Home from './pages/Home'
import OtherRoute from './pages/OtherRoute'

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  _construct() {
    LS.init([
      {
        name: 'main', // Storage name
        namespace: 'lng.main', // namespace for LocalStorage to split storage and exclude collisions
        defaultValues: [{ key: 'color', value: 0xff225cb3, external: true }], // default values object
      },
    ], true)
  }

  _setup() {
    Router.startRouter({
      home: 'home',
      routes: [
        { path: 'home', component: Home },
        { path: 'other', component: OtherRoute },
      ],
    })
  }

  static _template() {
    return super._template()
  }
}
