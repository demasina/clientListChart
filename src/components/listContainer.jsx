import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientList from './clientList';

class ListContainer extends Component {
    constructor(props) {
        super(props);

        this.filteredClients = props.clients;
    }
    componentWillReceiveProps(nextProps) {
        this.filteredClients = this.filter(nextProps.clients, nextProps.search);
    }

    filter(clients, search) {
        if (!search) {
            return clients;
        }
        const filteredClients = clients.filter((client) => {
            let arrClient = [];
            let clientName = client.name.first; 
            for (let key in clientName) {
                arrClient = [...arrClient, ...Object.values(clientName[key])];
            }
            let str = arrClient.join('');
            arrClient = [];
            arrClient.push(str)
            return arrClient.some((item) => item.toLowerCase().includes(search));
        });
        return filteredClients;
    };

    render() {

        return (
            <div>
                <div className="table_list" >
                    <ClientList clients={this.filteredClients}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clients: state.clientsState,
        search: state.searchState
    }
};

export default connect(mapStateToProps)(ListContainer);