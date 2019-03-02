import React, { Component } from 'react';
import store from './store';
import { bindActionCreators } from 'redux';

const connect = (storeBindingsCreator, actionsBindingsCreator) => {
    const boundActions = bindActionCreators(actionsBindingsCreator, store.dispatch);
    return ComponentToConnect => {
        class Connect extends Component {
            constructor(props) {
                super(props);
                this.storeBindings = storeBindingsCreator(store.getState());

                store.subscribe(() => {
                    this.storeBindings = storeBindingsCreator(store.getState());
                    this.forceUpdate();
                });
            }

            render() {
                return <ComponentToConnect {...this.storeBindings} {...boundActions} />;
            }
        }
        return Connect;
    };
};

export default connect;
