import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Divider,
} from "@mui/material";

// Sample image URLs (replace with your own images)
const image1 = "/zoirw.png";
const image2 = "/zoirw.png";
const image3 = "/zoirw.png";

const Vision: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          Our Vision
        </Typography>
        <Typography variant="h6" color="text.secondary">
          &quot;To be a leading institution in academic excellence and
          professional development, empowering students with quality education,
          research, and innovation to thrive in a global society.&quot;
        </Typography>
      </Box>

      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Mission & Goals
      </Typography>
      <Grid container spacing={4} justifyContent="center" mb={8}>
        {/* Goal 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, minHeight: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={image1}
              alt="Goal 1"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Academic Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We strive to provide a holistic education that focuses on both
                academic rigor and practical experience, fostering a strong
                foundation for lifelong learning.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Goal 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, minHeight: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={image2}
              alt="Goal 2"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Research & Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Encouraging research, creativity, and innovation among students
                and faculty to solve real-world problems and contribute to
                society.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Goal 3 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345, boxShadow: 3, minHeight: 500 }}>
            <CardMedia
              component="img"
              height="140"
              image={image3}
              alt="Goal 3"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Social Responsibility
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Promoting values of integrity, ethics, and social
                responsibility, shaping students to be leaders who contribute
                positively to society.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Core Values Section */}
      <Paper elevation={4} sx={{ p: 6, backgroundColor: "whitesmoke" }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Core Values
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={4}>
          {/* Value 1 */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h5" component="div">
                Integrity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We act with honesty and transparency in all our endeavors,
                promoting a culture of trust.
              </Typography>
            </Paper>
          </Grid>

          {/* Value 2 */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h5" component="div">
                Innovation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We encourage creative thinking and provide an environment that
                fosters new ideas and innovation.
              </Typography>
            </Paper>
          </Grid>

          {/* Value 3 */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Typography variant="h5" component="div">
                Inclusiveness
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We celebrate diversity and foster an inclusive environment that
                welcomes all individuals.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Vision;
