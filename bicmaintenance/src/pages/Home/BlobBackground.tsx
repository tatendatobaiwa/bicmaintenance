import React from 'react';
import { motion } from 'framer-motion';

const BlobBackground: React.FC = () => {
  return (
    <div className="blob-container">
      <motion.div
        className="blob"
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ['50%', '40%', '50%'],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
      <motion.div
        className="blob"
        animate={{
          scale: [1, 1.3, 1],
          borderRadius: ['50%', '30%', '50%'],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </div>
  );
};

export default BlobBackground;