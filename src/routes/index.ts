import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import faqsRouter from './faqs.routes';
import userfullinkRouter from './userfullink.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/faqs', faqsRouter);
routes.use('/user-ful-links', userfullinkRouter);

export default routes;
