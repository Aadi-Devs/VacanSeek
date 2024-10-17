import React from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              VacanSeek
            </Typography>
            <Typography variant="body2">
              Revolutionizing tourism with real-time crowd data.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul className="list-none p-0">
              <li><Link href="#" color="inherit">Home</Link></li>
              <li><Link href="#" color="inherit">About Us</Link></li>
              <li><Link href="#" color="inherit">Venues</Link></li>
              <li><Link href="#" color="inherit">Contact</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div className="flex space-x-4">
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2" className="mt-8 text-center">
          © {new Date().getFullYear()} VacanSeek. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;