// components/Courses.tsx
"use client";

import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

// Mock data for courses organized by departments
const departments = [
  {
    name: "Computer Science",
    courses: [
      {
        name: "B.Sc Computer Science",
        duration: "3 Years",
        eligibility: "10+2 with Physics, Chemistry, and Mathematics",
        fees: "₹1,50,000 per annum",
        syllabus:
          "Introduction to Programming, Data Structures, Algorithms, Operating Systems, Databases, Networking, Software Engineering, AI & Machine Learning.",
        careerProspects:
          "Software Developer, Data Scientist, Systems Analyst, AI Specialist, Network Administrator.",
      },
      {
        name: "M.Sc Computer Science",
        duration: "2 Years",
        eligibility: "B.Sc in Computer Science or related field",
        fees: "₹1,00,000 per annum",
        syllabus:
          "Advanced Algorithms, Distributed Systems, Data Mining, Cyber Security, Cloud Computing, Advanced AI & Machine Learning, Research Methodologies.",
        careerProspects:
          "Senior Software Engineer, Research Scientist, IT Consultant, Machine Learning Engineer, Project Manager.",
      },
      {
        name: "Diploma in Web Development",
        duration: "1 Year",
        eligibility: "10+2 in any stream with basic computer knowledge",
        fees: "₹50,000 per annum",
        syllabus:
          "HTML, CSS, JavaScript, Frontend Frameworks, Backend Technologies, Databases, Web Hosting, Responsive Design.",
        careerProspects:
          "Web Developer, Full Stack Developer, Frontend Developer, UI/UX Designer.",
      },
    ],
  },
  {
    name: "Physics",
    courses: [
      {
        name: "B.Sc Physics",
        duration: "3 Years",
        eligibility: "10+2 with Physics and Mathematics",
        fees: "₹1,20,000 per annum",
        syllabus:
          "Classical Mechanics, Electromagnetism, Quantum Physics, Thermodynamics, Optics, Nuclear Physics, Experimental Physics.",
        careerProspects:
          "Research Scientist, Physics Teacher, Laboratory Technician, Technical Consultant, R&D Specialist.",
      },
      {
        name: "M.Sc Physics",
        duration: "2 Years",
        eligibility: "B.Sc in Physics or related field",
        fees: "₹90,000 per annum",
        syllabus:
          "Advanced Quantum Mechanics, Particle Physics, Condensed Matter Physics, Astrophysics, Computational Physics, Experimental Techniques.",
        careerProspects:
          "Senior Researcher, University Lecturer, Astrophysicist, Quantum Computing Specialist, R&D Manager.",
      },
      {
        name: "Diploma in Astrophysics",
        duration: "1 Year",
        eligibility: "10+2 with Physics and Mathematics",
        fees: "₹60,000 per annum",
        syllabus:
          "Stellar Dynamics, Cosmology, Space-Time Physics, Gravitational Theory, Computational Astrophysics, Observational Techniques.",
        careerProspects:
          "Astrophysicist, Space Scientist, Research Assistant, Astronomy Technician.",
      },
    ],
  },
  {
    name: "Chemistry",
    courses: [
      {
        name: "B.Sc Chemistry",
        duration: "3 Years",
        eligibility: "10+2 with Chemistry and Mathematics/Biology",
        fees: "₹1,30,000 per annum",
        syllabus:
          "Organic Chemistry, Inorganic Chemistry, Physical Chemistry, Analytical Chemistry, Biochemistry, Laboratory Techniques, Chemical Thermodynamics.",
        careerProspects:
          "Chemist, Pharmaceutical Scientist, Quality Control Analyst, Research Associate, Chemical Engineer.",
      },
      {
        name: "M.Sc Chemistry",
        duration: "2 Years",
        eligibility: "B.Sc in Chemistry or related field",
        fees: "₹85,000 per annum",
        syllabus:
          "Advanced Organic Synthesis, Polymer Chemistry, Environmental Chemistry, Spectroscopy, Medicinal Chemistry, Research Methodologies.",
        careerProspects:
          "Senior Chemist, Research Scientist, Product Development Specialist, Environmental Consultant, University Lecturer.",
      },
      {
        name: "Diploma in Industrial Chemistry",
        duration: "1 Year",
        eligibility: "10+2 with Chemistry",
        fees: "₹55,000 per annum",
        syllabus:
          "Chemical Processes, Industrial Materials, Environmental Impact, Safety Standards, Process Optimization, Quality Control.",
        careerProspects:
          "Process Engineer, Industrial Chemist, Safety Officer, Quality Control Technician.",
      },
    ],
  },
  {
    name: "Mathematics",
    courses: [
      {
        name: "B.Sc Mathematics",
        duration: "3 Years",
        eligibility: "10+2 with Mathematics",
        fees: "₹1,00,000 per annum",
        syllabus:
          "Calculus, Algebra, Linear Algebra, Differential Equations, Probability, Statistics, Numerical Methods, Mathematical Modeling.",
        careerProspects:
          "Data Analyst, Actuary, Financial Analyst, Statistician, Operations Research Analyst.",
      },
      {
        name: "M.Sc Mathematics",
        duration: "2 Years",
        eligibility: "B.Sc in Mathematics or related field",
        fees: "₹75,000 per annum",
        syllabus:
          "Real Analysis, Complex Analysis, Abstract Algebra, Topology, Applied Mathematics, Mathematical Logic, Research Methodologies.",
        careerProspects:
          "Mathematician, University Lecturer, Research Analyst, Cryptographer, Quantitative Analyst.",
      },
      {
        name: "Diploma in Data Science",
        duration: "1 Year",
        eligibility: "B.Sc in Mathematics, Statistics or related field",
        fees: "₹80,000 per annum",
        syllabus:
          "Data Analysis, Probability Theory, Machine Learning, Predictive Modeling, Big Data, Data Visualization.",
        careerProspects:
          "Data Scientist, Data Analyst, Machine Learning Engineer, Business Intelligence Analyst.",
      },
    ],
  },
  {
    name: "Commerce",
    courses: [
      {
        name: "B.Com",
        duration: "3 Years",
        eligibility: "10+2 with Commerce stream",
        fees: "₹80,000 per annum",
        syllabus:
          "Accounting, Economics, Business Law, Taxation, Finance, Marketing, Business Mathematics, Auditing.",
        careerProspects:
          "Accountant, Financial Analyst, Tax Consultant, Auditor, Business Manager.",
      },
      {
        name: "M.Com",
        duration: "2 Years",
        eligibility: "B.Com or related field",
        fees: "₹70,000 per annum",
        syllabus:
          "Advanced Accounting, Corporate Finance, Strategic Management, Business Research Methods, International Business, Financial Markets, Investment Management.",
        careerProspects:
          "Senior Accountant, Finance Manager, Investment Analyst, Business Consultant, University Lecturer.",
      },
      {
        name: "Diploma in Financial Management",
        duration: "1 Year",
        eligibility: "B.Com or related field",
        fees: "₹60,000 per annum",
        syllabus:
          "Financial Planning, Budgeting, Investment Strategies, Risk Management, Corporate Finance, Financial Regulations.",
        careerProspects:
          "Financial Planner, Investment Consultant, Risk Manager, Finance Analyst.",
      },
    ],
  },
  {
    name: "Biotechnology",
    courses: [
      {
        name: "B.Sc Biotechnology",
        duration: "3 Years",
        eligibility: "10+2 with Biology and Chemistry",
        fees: "₹1,40,000 per annum",
        syllabus:
          "Molecular Biology, Genetics, Microbiology, Bioprocess Engineering, Bioinformatics, Cell Biology, Environmental Biotechnology.",
        careerProspects:
          "Biotechnologist, Research Scientist, Quality Control Analyst, Bioinformatics Specialist, Pharmaceutical Developer.",
      },
      {
        name: "M.Sc Biotechnology",
        duration: "2 Years",
        eligibility: "B.Sc in Biotechnology or related field",
        fees: "₹95,000 per annum",
        syllabus:
          "Advanced Molecular Techniques, Genetic Engineering, Biostatistics, Proteomics, Metabolic Engineering, Industrial Biotechnology, Research Methodologies.",
        careerProspects:
          "Senior Biotechnologist, Research & Development Manager, Clinical Researcher, Bioinformatics Analyst, University Lecturer.",
      },
      {
        name: "Diploma in Bioinformatics",
        duration: "1 Year",
        eligibility: "B.Sc in Biotechnology or related field",
        fees: "₹70,000 per annum",
        syllabus:
          "Genomic Data Analysis, Proteomics, Computational Biology, Molecular Dynamics, Biological Databases, Programming for Bioinformatics.",
        careerProspects:
          "Bioinformatics Analyst, Genomics Researcher, Data Scientist, Computational Biologist.",
      },
    ],
  },
];

// Custom styling using MUI's makeStyles hook
const useStyles = makeStyles({
  container: {
    marginTop: "6rem",
    paddingBottom: "4rem",
  },
  header: {
    marginBottom: "2rem",
    color: "#444",
    fontWeight: 600,
  },
  accordion: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
    borderRadius: "8px",
    "&:before": {
      display: "none",
    },
  },
  accordionSummary: {
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    minHeight: "56px !important",
    "& .MuiAccordionSummary-content": {
      margin: "12px 0",
    },
  },
  accordionDetails: {
    padding: "1rem 2rem",
  },
  courseCard: {
    backgroundColor: "#fafafa",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "1rem",
    height: "100%",
  },
  courseName: {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "#333",
    marginBottom: "0.5rem",
  },
  courseDetail: {
    fontSize: "0.95rem",
    color: "#555",
    marginBottom: "0.3rem",
  },
  divider: {
    margin: "1rem 0",
  },
});

const Courses: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h3" align="center" className={classes.header}>
        Courses Offered
      </Typography>
      {departments.map((department, deptIndex) => (
        <Accordion key={deptIndex} className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${deptIndex}-content`}
            id={`panel${deptIndex}-header`}
            className={classes.accordionSummary}
          >
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              {department.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Grid container spacing={3}>
              {department.courses.map((course, courseIndex) => (
                <Grid item xs={12} sm={6} md={4} key={courseIndex}>
                  <Card className={classes.courseCard}>
                    <CardContent>
                      <Typography className={classes.courseName}>
                        {course.name}
                      </Typography>
                      <Divider className={classes.divider} />
                      <Box>
                        <Typography className={classes.courseDetail}>
                          <strong>Duration:</strong> {course.duration}
                        </Typography>
                        <Typography className={classes.courseDetail}>
                          <strong>Eligibility:</strong> {course.eligibility}
                        </Typography>
                        <Typography className={classes.courseDetail}>
                          <strong>Fees:</strong> {course.fees}
                        </Typography>
                        <Typography className={classes.courseDetail}>
                          <strong>Syllabus Overview:</strong> {course.syllabus}
                        </Typography>
                        <Typography className={classes.courseDetail}>
                          <strong>Career Prospects:</strong>{" "}
                          {course.careerProspects}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Courses;
