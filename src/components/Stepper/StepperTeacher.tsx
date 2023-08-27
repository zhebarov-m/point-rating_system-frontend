import * as React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TeacherData from "../data/TeacherData";
import SubjectsData from "../data/SubjectsData";
import VerifiedIcon from "@mui/icons-material/Verified";

const steps = ["Выберите учителя", "Выберите дисциплину", "Привяжите предмет"];

export default function StepperTeacher() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [selectedTeacher, setSelectedTeacher] = React.useState<Number | null>(
    null
  );


  const handleTeacherSelection = (teacherId: number) => {
    //колбэк для вытаскивания из TeacherData инфу о выбранном учителе
    setSelectedTeacher(teacherId);
  };


  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ margin: "0 auto", width: "700px", height:'600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              fontSize: '30px',
              fontWeight: 500
            }}
          >
            <VerifiedIcon color="primary" sx={{fontSize: '60px'}} />
            <p>Привязка успешно выполнена!</p>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Новая привязка</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            {activeStep === 0 ? (
              <TeacherData onTeacherSelect={handleTeacherSelection} />
            ) : activeStep === 1 ? (
              <SubjectsData onTeacherSelect={handleTeacherSelection} />
            ) : (
              ""
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}
            <Button onClick={handleNext} disabled={selectedTeacher === null}>
              {activeStep === steps.length - 1 ? "Завершить" : "Далее"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
