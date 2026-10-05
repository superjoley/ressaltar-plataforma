const fs = require('fs');
const path = require('path');

const dir = 'src/components/landing/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Section.tsx') || f.endsWith('Preview.tsx') || f === 'Hero.tsx' || f === 'FinalCTA.tsx');

files.forEach(file => {
  if (file === 'ChaosSection.tsx') return; // Handled manually earlier

  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Add 'use client'
  if (!content.includes("'use client'") && !content.includes('"use client"')) {
    content = "'use client';\n" + content;
  }
  
  // Add import
  if (!content.includes("from 'framer-motion'") && !content.includes('from "framer-motion"')) {
    content = content.replace(/(import .*from 'react';?\n)/, "$1import { motion } from 'framer-motion';\n");
  }

  // Replace <section
  if (content.includes('<section ') && !content.includes('<motion.section ')) {
     content = content.replace(/<section /, `<motion.section \n      initial={{ opacity: 0, y: 40 }}\n      whileInView={{ opacity: 1, y: 0 }}\n      viewport={{ once: true, margin: "-100px" }}\n      transition={{ duration: 0.8, ease: "easeOut" }}\n      `);
     content = content.replace(/<\/section>/g, '</motion.section>');
  }

  fs.writeFileSync(path.join(dir, file), content);
});

console.log('Added framer-motion basic scroll animations to ' + files.length + ' files.');
