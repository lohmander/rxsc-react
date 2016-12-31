# RxSC-React

This library provides a simple function to connect a React components state to
the RxSC state container.

## Installation

With npm

```sh
$ npm install --save rxcs-react
```

With yarn

```sh
$ yarn add rxcs-react
```

## Usage

```javascript
import React, { Component } from 'react';
import { connect } from 'rxsc-react';

import container from './myContainer';


class MyComponent extends Component {

    render() {
        let { count, actions$ } = this.props;

        return (
            <div>
                <div>{count}</div>
                <button onClick={() => actions$.increment(1)}>+</button>
                <button onClick={() => actions$.decrement(1)}>-</button>
            </div>
        );
    }
}

export default connect(container)(MyComponent);
```

You can also pass a second argument to connect with a mapping function which
will further reduce the state before it is passed to the component.

```javascript
// ...

export default connect(
    container,
    state => ({ ...state, double: state.count * 2 })
)(MyComponent)
```
