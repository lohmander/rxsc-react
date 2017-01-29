import React from 'react';

export function connect(container, stateMap = state => state) {
    return component => React.createClass({
        getInitialState: function() {
            return stateMap(container.getInitialState());
        },

        componentWillMount: function() {
            this.subscriber = container
                .getObservable()
                .map(stateMap)
                .subscribe(state => this.setState(state))
        },

        componentWillUnmount: function() {
            this.subscriber.unsubscribe();
        },

        render: function() {
            return React.createElement(
                component,
                { ...this.props, ...this.state, actions$: container.actions$ },
            );
        },
    });
}
