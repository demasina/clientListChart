import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { Header, Grid } from 'semantic-ui-react';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducers';
import { uploadClients } from './actions/actions';
import List from './components/listContainer';
import Chart from './components/Chart'
import Search from './components/search';
import './components/style.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

    componentDidMount() {
        store.dispatch(uploadClients());
    }

    render() {

        return(
            <Provider store={store}>
                <React.Fragment>
                        <Header as="h1" content="Client List" textAlign='center' />
                        <Grid centered column={1}>
                                <Chart />
                        </Grid>
                        <Search />
                    <Grid centered columns={1}>
                        <Grid.Column width={12}>
                            <List />
                        </Grid.Column>
                    </Grid>
                </React.Fragment>
            </Provider>
        )
    }
}