import React from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from 'material-kit-react/components/Card/Card';
import CardHeader from 'material-kit-react/components/Card/CardHeader';
import CardBody from 'material-kit-react/components/Card/CardBody';


const styles = theme => ({
    cardheader: {
        backgroundColor: 'silver',
        fontSize: '30px',
        color: 'black',
        textAlign: 'center',
    },
    cardbody: {
        color: 'darkgray'
    },
    cardtext: {
        height: '260px',
        overflow: 'scroll',
        fontSize: '30px',
    },
});

class EventsCard extends React.Component {
    componentDidMount() {
        this.props.init();
    }
    render() {
    const { classes } = this.props;

    {
        this.props.events.reverse().map((event, index) => {
        return(
            <p key={index}>{event}</p>
            )
            }
        )
    }

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader className={classes.cardheader} style={{height: '50px', paddingTop: '20px'}}>EVENTS</CardHeader>
                    <CardBody className={classes.cardbody}>
                    <div className={classes.cardtext}>

                    </div>
                    </CardBody>
                </Card>
            </div>
        );

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        events: state.app.events
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    init: () => {
    },
    }
}

const EventsCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(EventsCard))
export default EventsCardContainer;