import * as Yup from 'yup';
import Queue from '../../lib/Queue';

import DeliveryProblem from '../models/DeliveryProblem';
import Package from '../models/Package';
import Deliverer from '../models/Deliverer';

import PackageCancelledMail from '../jobs/PackageCancelledMail';

class DeliveryProblemController {
  async index(req, res) {
    const delivery_id = req.params.id;
    const { page, per_page } = req.query;

    const offset = (page - 1) * per_page;
    const limit = per_page;

    // Return all the problems with offset.
    if (offset >= 0 && limit) {
      const packageData = await DeliveryProblem.findAll({
        order: [['id', 'ASC']],
        offset,
        limit,
      });

      return res.json(packageData);
    }

    // Return all the problems without offset. - Probably I will remove this return in the future.
    // if (delivery_id === null || delivery_id === undefined) {
    //   const packageData = await DeliveryProblem.findAll({
    //     order: [['id', 'ASC']],
    //   });

    //   return res.json(packageData);
    // }

    // Return the problems opened by delivery_id
    const deliveryData = await DeliveryProblem.findAll({
      order: [['id', 'ASC']],
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

    // Receive the problem detail.
    const { description } = req.body;

    // Save the problem detail.
    const deliveryCreated = await DeliveryProblem.create({
      delivery_id,
      description,
    });

    return res.json(deliveryCreated);
  }

  async delete(req, res) {
    const packageData = await Package.findByPk(req.params.id, {
      include: [
        {
          model: Deliverer,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
      ],
    });

    // console.log(packageData);

    // It will check if the package is not already delivered before cancel.
    if (packageData.end_date) {
      return res
        .status(400)
        .json({ error: 'The package is already delivered!' });
    }

    // It will save the delivery cancellation.
    packageData.canceled_at = new Date();
    await packageData.save();

    // It will send a email to deliverer when the package is cancelled!
    await Queue.add(PackageCancelledMail.key, {
      product: packageData.product,
      name: packageData.deliveryman.name,
      email: packageData.deliveryman.email,
    });

    return res.json(packageData);
  }
}

export default new DeliveryProblemController();
