import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import { Clock, Users, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Clock className="text-blue-500" size={40} />,
    title: 'Real-time Data',
    description: 'Get up-to-date information on crowd levels at various venues.',
  },
  {
    icon: <Users className="text-blue-500" size={40} />,
    title: 'Avoid Crowds',
    description: 'Plan your visits to enjoy attractions without the hustle and bustle.',
  },
  {
    icon: <Map className="text-blue-500" size={40} />,
    title: 'Discover Alternatives',
    description: 'Find less crowded destinations and hidden gems in the area.',
  },
];

const Features: React.FC = () => {
  return (
    <Container className="py-16">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Why Choose VacanSeek?
      </Typography>
      <Grid container spacing={4} className="mt-8">
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper elevation={3} className="p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <Typography variant="h5" component="h3" className="mt-4 mb-2">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </div>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;