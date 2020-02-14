import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DelivererController from './app/controllers/DelivererController';
import PackageController from './app/controllers/PackageController';
import DelivererFeaturesController from './app/controllers/DelivererFeaturesController';

import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.get('/deliverers', DelivererController.index);
routes.post('/deliverers', DelivererController.store);
routes.put('/deliverers/:id', DelivererController.update);
routes.delete('/deliverers/:id', DelivererController.delete);

routes.get('/packages', PackageController.index);
routes.post('/packages', PackageController.store);
routes.put('/packages/:id', PackageController.update);

routes.get('/deliveryman/:id/deliveries', DelivererFeaturesController.index);
routes.post('/deliveryman/:id/deliveries', DelivererFeaturesController.update);

routes.delete('/packages/:id', PackageController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
