'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ApexCharts with no SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SkillsGraph = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillsData = {
    labels: ['AI/ML', 'Computer Vision', 'Full Stack', 'System Design', 'DevOps'],
    values: [90, 85, 80, 75, 70]
  };

  const chartOptions = {
    chart: {
      toolbar: { show: false },
      foreColor: '#9ca3af'
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: '#1f2937',
          connectorColors: '#1f2937'
        }
      }
    },
    colors: ['#3b82f6'],
    markers: {
      size: 4,
      colors: ['#3b82f6'],
      strokeColors: '#fff',
      strokeWidth: 2
    },
    tooltip: {
      theme: 'dark'
    },
    yaxis: {
      show: false,
      max: 100
    },
    xaxis: {
      categories: skillsData.labels
    }
  };

  const series = [{
    name: 'Skill Level',
    data: skillsData.values
  }];

  if (!mounted) return (
    <div className="h-[450px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Skills</h2>
          <p className="text-gray-400 text-center mb-12">
            My expertise across different technologies
          </p>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <Chart
              options={chartOptions}
              series={series}
              type="radar"
              height={450}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGraph; 