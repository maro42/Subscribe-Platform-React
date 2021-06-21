import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Title from '../../pages/store/product/Title';
import Options from '../../pages/store/product/Options';
import Thumbnail from '../../pages/store/product/Thumbnail';
import ServiceImage from '../../pages/store/product/ServiceImage';
import Detail from '../../pages/store/product/Detail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

type StepperType = {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  content: (step: number) => JSX.Element;
  handleNextButton: () => void;
  handleBackButton: () => void;
  handleFinushButton: () => void;
};

export default function HorizontalLinearStepper({
  steps,
  activeStep,
  setActiveStep,
  content,
  handleNextButton,
  handleBackButton,
  handleFinushButton,
}: StepperType) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            All steps completed - you&apos;re finished
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {content}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBackButton}
                className={classes.button}
              >
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNextButton}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
