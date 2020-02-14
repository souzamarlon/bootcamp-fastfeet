import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import Deliverer from '../app/models/Deliverer';
import Package from '../app/models/Package';
import DeliveryProblem from '../app/models/DeliveryProblem';

import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Recipient, Deliverer, File, Package, DeliveryProblem];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }

  associate() {
    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
