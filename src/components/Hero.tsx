import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient text-white py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Discover the Perfect Time to Visit
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Real-time crowd data for museums, public buildings, and tourist attractions
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="mt-6"
          >
            Start Exploring
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;