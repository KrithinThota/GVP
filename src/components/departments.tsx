"use client";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Mock data for departments (this can be replaced by fetching data from an API or database)
const departments = [
  {
    name: "Computer Science",
    courses: [
      {
        name: "B.Sc Computer Science",
        details:
          "A 3-year undergraduate program focused on computing, algorithms, and software development.",
      },
      {
        name: "M.Sc Computer Science",
        details:
          "A 2-year postgraduate course emphasizing advanced computing techniques, data science, and AI.",
      },
    ],
    description:
      "The Computer Science department offers undergraduate and postgraduate courses with an emphasis on modern computing technologies and programming.",
  },
  {
    name: "Physics",
    courses: [
      {
        name: "B.Sc Physics",
        details:
          "A 3-year undergraduate program offering foundational knowledge in theoretical and applied physics.",
      },
      {
        name: "M.Sc Physics",
        details:
          "A 2-year postgraduate course focusing on advanced concepts of physics and research methodologies.",
      },
    ],
    description:
      "Physics department provides a solid foundation in theoretical and applied physics, focusing on research and experimentation.",
  },
  {
    name: "Chemistry",
    courses: [
      {
        name: "B.Sc Chemistry",
        details:
          "A 3-year undergraduate program exploring organic, inorganic, and physical chemistry.",
      },
      {
        name: "M.Sc Chemistry",
        details:
          "A 2-year postgraduate course focusing on advanced chemical research and practical lab work.",
      },
    ],
    description:
      "Chemistry department offers insights into organic, inorganic, and physical chemistry with practical lab sessions.",
  },
  {
    name: "Mathematics",
    courses: [
      {
        name: "B.Sc Mathematics",
        details:
          "A 3-year undergraduate program that teaches fundamental and applied mathematics.",
      },
      {
        name: "M.Sc Mathematics",
        details:
          "A 2-year postgraduate course focusing on abstract and applied mathematical theories.",
      },
    ],
    description:
      "Mathematics department prepares students with a deep understanding of advanced mathematical concepts and applications.",
  },
  {
    name: "Commerce",
    courses: [
      {
        name: "B.Com",
        details:
          "A 3-year undergraduate program providing a broad understanding of business, finance, and accounting.",
      },
      {
        name: "M.Com",
        details:
          "A 2-year postgraduate course focusing on advanced accounting, finance, and business strategies.",
      },
    ],
    description:
      "The Commerce department offers comprehensive knowledge on business, finance, and accounting principles for students pursuing business careers.",
  },
  {
    name: "Biotechnology",
    courses: [
      {
        name: "B.Sc Biotechnology",
        details:
          "A 3-year undergraduate program combining biology and technology for scientific innovation.",
      },
      {
        name: "M.Sc Biotechnology",
        details:
          "A 2-year postgraduate course focusing on advanced biotechnological research and applications.",
      },
    ],
    description:
      "The Biotechnology department integrates biological sciences with advanced technology to promote research and applications in healthcare, agriculture, and environmental management.",
  },
];

// Custom styling using MUI's makeStyles hook
const useStyles = makeStyles({
  container: {
    marginTop: "6rem", // Increased margin-top to bring the content lower
    paddingBottom: "2rem",
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    // Ensuring all cards have the same minimum height
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer", // Added pointer cursor to indicate it's clickable
  },
  cardContent: {
    textAlign: "center",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#333",
  },
  courseList: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#555",
  },
  description: {
    fontSize: "0.95rem",
    color: "#777",
    marginTop: "0.5rem",
  },
  dialogTitle: {
    fontWeight: 600,
    textAlign: "center",
  },
  dialogCourseTitle: {
    marginTop: "1rem",
    fontWeight: 500,
  },
  dialogCourseDetails: {
    marginTop: "0.5rem",
    color: "#555",
  },
});

const Departments: React.FC = () => {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  interface Department {
    name: string;
    courses: { name: string; details: string }[];
    description: string;
  }

  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const handleCardClick = (department: Department) => {
    setSelectedDepartment(department);
    setOpenDialog(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedDepartment(null);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ color: "#444", fontWeight: 600 }}
      >
        Our Departments
      </Typography>
      <Grid container spacing={4}>
        {departments.map((department, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className={classes.card}
              onClick={() => handleCardClick(department)}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="h4" className={classes.title}>
                  {department.name}
                </Typography>
                <Box className={classes.courseList}>
                  {department.courses.map((course, idx) => (
                    <Typography key={idx}>{course.name}</Typography>
                  ))}
                </Box>
                <Typography className={classes.description}>
                  {department.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for more info */}
      {selectedDepartment && (
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
          <DialogTitle className={classes.dialogTitle}>
            {selectedDepartment.name} Courses
          </DialogTitle>
          <DialogContent>
            {selectedDepartment.courses.map(
              (course: { name: string; details: string }, index: number) => (
                <div key={index}>
                  <Typography
                    variant="h5"
                    className={classes.dialogCourseTitle}
                  >
                    {course.name}
                  </Typography>
                  <Typography className={classes.dialogCourseDetails}>
                    {course.details}
                  </Typography>
                </div>
              )
            )}
          </DialogContent>
        </Dialog>
      )}
    </Container>
  );
};

export default Departments;
