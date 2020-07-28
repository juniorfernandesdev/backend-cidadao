import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import faqsRouter from './faqs.routes';
import userfullinkRouter from './userfullink.routes';
import category from './categories.routes';
import categoriesRouter from './categoriesOptions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/faqs', faqsRouter);
routes.use('/user-ful-links', userfullinkRouter);
routes.use('/categories', category);
routes.use('/categories-options', categoriesRouter);

export default routes;
