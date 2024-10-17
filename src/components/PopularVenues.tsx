import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const venues = [
  {
    name: 'Louvre Museum',
    image: 'https://images.unsplash.com/photo-1565099824688-e93eb20fe622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    crowdLevel: 'Moderate',
  },
  {
    name: 'Eiffel Tower',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    crowdLevel: 'High',
  },
  {
    name: 'Colosseum',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    crowdLevel: 'Low',
  },
];

const PopularVenues: React.FC = () => {
  return (
    <Container className="py-16">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Popular Venues
      </Typography>
      <Grid container spacing={4} className="mt-8">
        {venues.map((venue, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={venue.image}
                  alt={venue.name}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {venue.name}
                  </Typography>
                  <Chip
                    label={`Crowd Level: ${venue.crowdLevel}`}
                    color={venue.crowdLevel === 'Low' ? 'success' : venue.crowdLevel === 'Moderate' ? 'warning' : 'error'}
                    size="small"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularVenues;