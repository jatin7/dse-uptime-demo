import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '90%',
        marginTop: '10px',
        marginLeft: '110px'
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

const stepperStyle = {
    padding: '6px',
}

function getSteps() {
    return ['Action One Goes Here', 'Action Two Goes Here', 'Action Three Goes Here', 'Action Four Goes Here', 'Action Five Goes Here'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
        return 'describing action one here...';
        case 1:
        return 'describing action two here...';
        case 2:
        return 'describing action three here...';
        case 3:
        return 'describing action four here...';
        case 4:
        return 'describing action five here...';
        default:
        return 'Unknown stepIndex';
    }
}

class StepperBar extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
        activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
        activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
        activeStep: 0,
        });
    };

    render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
        <div className={classes.root}>
            <Stepper container='true' spacing={24} activeStep={activeStep} style={stepperStyle} alternativeLabel>
                {steps.map(label => {
                    return (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    );
                })}
            </Stepper>
            <div>
                {this.state.activeStep === steps.length ? (
                    <div>
                    {/* <Typography className={classes.instructions}>Node Rerouting Completed</Typography> */}
                    <Button onClick={this.handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
                        <div>
                            <Button
                            disabled={activeStep === 0}
                            onClick={this.handleBack}
                            className={classes.backButton}
                            >
                            Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        );
    }
}

StepperBar.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(StepperBar);