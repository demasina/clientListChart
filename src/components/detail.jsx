import React, {Component} from 'react';
import { Icon, Header, Image, Grid } from 'semantic-ui-react';

class Details extends Component {

    render() {
        const { client } = this.props;
        return (
            <React.Fragment>
                <Grid columns={5} className="info_text">
                    <Grid.Column verticalAlign={"bottom"}  width={4}>
                        <Header className="full_header" as="h1">
                            {client.name.first}
                            {client.gender==="male" ? <Icon size="big" name="male"/> : <Icon size="big" name="female"/>}
                        </Header>
                        <Grid.Row><p ><span className="weight_text" >Username: </span>{client.login.username}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >Registered: </span>{client.registered.date}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >Email: </span>{client.email}</p></Grid.Row>
                    </Grid.Column>
                    <Grid.Column verticalAlign={"bottom"} width={4}>
                        <Grid.Row><p><span className="weight_text" >Adress: </span>{client.location.street}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >City: </span>{client.location.city}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >Zip Code: </span>{client.location.postcode}</p></Grid.Row>
                    </Grid.Column>
                    <Grid.Column verticalAlign={"bottom"} width={4}>
                        <Grid.Row><p><span className="weight_text" >Birthday: </span>{client.dob.date}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >Phone: </span>{client.phone}</p></Grid.Row>
                        <Grid.Row><p><span className="weight_text" >Cell: </span>{client.cell}</p></Grid.Row>
                    </Grid.Column>
                    <Grid.Column verticalAlign={"bottom"}><Image avatar size="small" src={client.picture.large} alt=""/></Grid.Column >  
                </Grid>  
            </React.Fragment>
        );
    }
};

export default Details;
