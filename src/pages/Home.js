import { Lightning, Router } from '@lightningjs/sdk';
import LDSP from 'lng-storage';

export default class Home extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: LDSP.get('main', 'color'),
            },
            Text: {
                mount: 0.5,
                x: 960,
                y: 720,
                text: {
                    text: 'Home',
                    fontFace: 'Regular',
                    fontSize: 64,
                    textColor: 0xffffffff,
                },
            },
        };
    }

    _setup() {
        LDSP.addAction('main', 'color', this.id, this._setBackgroundColor);
    }

    _handleRight() {
        Router.navigate('other');
    }

    _setBackgroundColor = (_key, _old, color) => {
        this.tag('Background').patch({ color });
    };
}
