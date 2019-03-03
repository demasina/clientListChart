import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button, Modal} from 'semantic-ui-react'
import {Pie} from 'react-chartjs-2';

class Chart extends Component {
    checkGender(clients) {
        let arr = clients;
                let males = 0;
                let females = 0;
                for(let i = 0; i < arr.length; i++) {
                    arr[i].opened = false;
                    males = arr[i].gender === "male" ? males + 1 : males;
                    females = arr[i].gender === "female" ? females + 1 : females;
                }
                return [males, females]

    }
    render() {
        const data = {
            labels: ['Male', 'Female'],
            datasets: [{
                data: this.checkGender(this.props.clients),
                backgroundColor: ['#f4e4a4', '#ff6e6e']
            }]
        };
            return (
                <div className="chart">
                    <Modal  trigger={<Button inverted color='red'>Chart</Button>} >
                        <Modal.Header>Gender of Users</Modal.Header>
                        <Pie data={data} />
                    </Modal>
                </div>

        );
    }

};
const mapStateToProps = (state) => {
    return {
        clients: state.clientsState,
    }
};

export default connect(mapStateToProps)(Chart);