import React, {Component} from 'react';
import Details from './detail';
import { Image, Grid, Icon } from 'semantic-ui-react';
import './style.css';

class Item extends Component {

    render() {
        const {client, changerOpen} = this.props;

        return (
            <React.Fragment>
                <div onClick={() => {changerOpen(client.login.username)}} className={`${!client.opened ? "clientRow" : "clientRow"}`}>
                <Grid  textAlign={"center"} columns={7} >
                    <Grid.Column ><Image avatar size="tiny" src={client.picture.large} alt=""/></Grid.Column >  
                    <Grid.Column >{client.name.last}</Grid.Column >
                    <Grid.Column >{client.name.first}</Grid.Column >
                    <Grid.Column >{client.login.username}</Grid.Column >
                    <Grid.Column >{client.phone}</Grid.Column >
                    <Grid.Column >{client.location.state}</Grid.Column >
                    {client.opened && client ? 
                        <Grid.Column ><Icon name="minus" size="large" /></Grid.Column >
                        :
                        <Grid.Column ><Icon name="plus" size="large" /></Grid.Column >
                    }
                    
                    </Grid>
                {client.opened && client ? 
                    <div className="info_block" >
                        <Details client={client}/>
                    </div>
                    :
                    null
                }
                
                </div>
            </React.Fragment>
        );
    }

};

export default Item;