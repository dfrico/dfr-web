/**
 * Project copy, shared by the current home page ("Selected work") and the
 * redesign preview's Lab section.
 */

export type Project = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export const thesis: Project = {
  title:
    'A Comparative Evaluation of Serverless Vector Databases for RAG workloads',
  description:
    'Master thesis comparing serverless vector databases for latency, cost and scalability.',
  date: '2026',
  url: 'https://github.com/dfrico/serverless-vector-search-benchmark',
};

export const thrml: Project = {
  title: 'Wildfire simulation using THRML',
  description:
    'A spatio-temporal wildfire model using Potts-model dynamics and block Gibbs sampling.',
  date: '2025',
  url: 'https://0xdf4.com/thrml.html',
};

export const plummer: Project = {
  title: 'Monte Carlo Simulations of a Plummer Distribution',
  description:
    'Academic. The probability density distribution of stars within a globular cluster. Sampling and visualizing data.',
  date: '2025',
  url: '#',
};
