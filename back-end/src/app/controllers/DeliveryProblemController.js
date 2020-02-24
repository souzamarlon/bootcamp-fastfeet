import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryProblemController {
  async index(req, res) {
    const delivery_id = req.params.id;
    if (delivery_id === null || delivery_id === undefined) {
      const packageData = await DeliveryProblem.findAll();

      return res.json(packageData);
    }
    const deliveryData = await DeliveryProblem.findAll({
      where: {
        delivery_id,
      },
    });

    return res.json(deliveryData);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
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
