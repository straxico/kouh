import Agenda from 'agenda';
import logger from '../Utils/logger';
import { MONGODB_URI } from '../Utils/secrets';
import JobList from './jobList';

export const agenda = new Agenda({
  db: {
    address: MONGODB_URI,
    collection: "jobs",
    options: { useUnifiedTopology: true },
  },
});

//define events
// agenda.on('start', (job) => {
//   logger.info(['event Job starting', job.attrs.name]);
// });

agenda.on('complete', (job) => {
  logger.info(['......................end.........................']);
});
// agenda.on('success', (job) => {
//   logger.info(['event Job Successfully', job.attrs.name]);
// });
agenda.on('fail', (err, job) => {
  logger.error(['event Job err', job.attrs.name, err]);
});

//define jobs
agenda.define('AutoTradesJob', { lockLifetime: 10000 }, JobList.AutoTradeJob);

//define timing
(async () => {
  await agenda.start();
  //minutes
  await agenda.every('40 seconds', 'AutoTradesJob');
})();
