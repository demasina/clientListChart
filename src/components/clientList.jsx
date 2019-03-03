import React, {Component} from 'react';
import ClientItem from './clientItem';
import { Grid } from 'semantic-ui-react'

class clientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
        this.changerOpen = this.changerOpen.bind(this);
    }

    componentDidMount() {
        this.setState({
            clients: this.props.clients
        })
    }

    changerOpen(username) {
        let arr = this.props.clients;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].login.username === username) {
                arr[i].opened = !arr[i].opened;
            } else {
                arr[i].opened = false;
            }
        }
        this.setState({
            clients: arr
        })
    }

    render() {
        let clients = this.props.clients;
        return (
            <React.Fragment>
                <Grid  textAlign={"center"} columns={7} className="user_header_wrap">
                    <Grid.Column><span> </span></Grid.Column>
                    <Grid.Column><span>Last</span></Grid.Column>
                    <Grid.Column><span>First</span></Grid.Column>
                    <Grid.Column><span>UserName</span></Grid.Column>
                    <Grid.Column><span>Phone</span></Grid.Column>
                    <Grid.Column><span>Location</span></Grid.Column>
                    <Grid.Column><span></span></Grid.Column>
                </Grid>
                {
                    clients.length> 0 ?
                    <div className="all_client_items" >
                        {
                            clients.map((client) => {
                                return (<ClientItem client={client} key={client.name.first + client.name.last} changerOpen={this.changerOpen} opened={client.opened}/> );
                            })
                        }
                    </div>
                    :
                    <div className="spinner-wrap">
                        <img src="https://i.gifer.com/7Jdz.gif" alt="gus"/>
                    </div>

                }
            </React.Fragment>
        );
    }

};

export default clientList;