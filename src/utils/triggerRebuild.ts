import express from 'express';
import axios from 'axios';

const triggerSiteRebuild = () => {
  const app = express();
  app.use(express.json());

  app.post('/webhook', async (req, res) => {
    try {
      const response = await axios.post(process.env.CI_CD_BUILD_TRIGGER_URL, {
        headers: { 'Authorization': `Bearer ${process.env.CI_CD_API_TOKEN}` }
      });

      if (response.status === 200) {
        console.log('Build triggered successfully.');
        res.status(200).send('Build triggered successfully.');
      } else {
        throw new Error('Failed to trigger build.');
      }
    } catch (error) {
      console.error('Error triggering build:', error.message);
      res.status(500).send('Error triggering build.');
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

export default triggerSiteRebuild;
