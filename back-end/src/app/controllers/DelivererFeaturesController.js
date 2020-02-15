import * as Yup from 'yup';

import { startOfToday, endOfDay, getHours, parseISO } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Op } from 'sequelize';
import Package from '../models/Package';

class DelivererFeaturesController {
  async index(req, res) {
    const deliverymanId = req.params.id;

    const deliverymanData = await Package.findAll({
      where: {
        deliveryman_id: deliverymanId,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(deliverymanData);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
      signature_id: Yup.number(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const packageId = req.params.id;

    const { start_date, end_date, signature_id } = req.body;

    // GetHours is
    if (
      getHours(parseISO(start_date)) <= 8 ||
      getHours(parseISO(start_date)) >= 18
    ) {
      return res.status(400).json({
        error: 'Horário não permitido para realizar a retirada.',
      });
    }

    const packageData = await Package.findByPk(packageId);

    // Getting how many pickups the delivery man did in the same day.
    // I am using the Brazilian UTC.
    const pickup = await Package.findAll({
      where: {
        deliveryman_id: packageData.deliveryman_id,
        start_date: {
          [Op.between]: [
            // zonedTimeToUtc(startOfToday(new Date()), 'America/Brasília'),
            // zonedTimeToUtc(endOfDay(new Date()), 'America/Brasília'),
            startOfToday(new Date()),
            endOfDay(new Date()),
          ],
        },
      },
      attributes: ['id', 'start_date', 'end_date'],
    });

    // Checking if has 5 pickups.
    if (pickup.length >= 5) {
      return res.status(400).json({
        error: 'Você já realizou 5 retiradas no mesmo dia',
      });
    }

    return res.json(
      await packageData.update({ start_date, end_date, signature_id })
    );
  }
}

export default new DelivererFeaturesController();
