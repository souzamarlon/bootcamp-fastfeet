import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async index(req, res) {
    const delivery_id = req.params.id;
    const deliveryData = await DeliveryProblem.findOne({
      where: {
        delivery_id,
      },
    });

    return res.json(deliveryData);
  }

  async store(req, res) {
    const delivery_id = req.params.id;

    const { description } = req.body;

    const deliveryCreated = await DeliveryProblem.create({
      delivery_id,
      description,
    });

    return res.json(deliveryCreated);
  }
}

export default new DeliveryProblemController();
