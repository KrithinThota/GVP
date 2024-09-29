import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import ExploreIcon from "@mui/icons-material/Explore";

const History: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Our History
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Explore the milestones and achievements that have shaped our
          university over the years.
        </Typography>
      </Box>

      {/* Timeline Section */}
      <Timeline position="alternate">
        {/* 1980: University Founded */}
        <TimelineItem position="right">
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              1980
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                University Founded
              </Typography>
              <Typography>
                Our university was established with a vision to provide quality
                education and develop a community of lifelong learners.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              1995
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ExploreIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
              University Founded
              </Typography>
              <Typography>
              Our university was established with a vision to provide quality
                education and develop a community of lifelong learners.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        {/* 1995: First Research Center */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              1995
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ExploreIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                First Research Center Established
              </Typography>
              <Typography>
                Launched our first research center, encouraging groundbreaking
                research and innovation.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* 2005: Achieved Top University Status */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              2005
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <StarIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                Achieved Top University Status
              </Typography>
              <Typography>
                Ranked among the top universities for academic excellence and
                innovation.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* 2015: Expansion of Campus */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              2015
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning">
              <GroupIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                Expansion of Campus
              </Typography>
              <Typography>
                Expanded our campus facilities to accommodate growing student
                enrollment and new programs.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* 2023: Celebrating 43 Years */}
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="text.secondary">
              2023
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info">
              <SchoolIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" component="h1">
                Celebrating 43 Years of Excellence
              </Typography>
              <Typography>
                Celebrated 43 years of educational excellence, with a continued
                commitment to shaping future leaders.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default History;
