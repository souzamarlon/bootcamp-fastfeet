import * as Yup from 'yup';

import { startOfToday, endOfDay, getHours, parseISO } from 'date-fns';
// import { zonedTimeToUtc } from 'date-fns-tz';
import { Op } from 'sequelize';
import Package from '../models/Package';
import Recipient from '../models/Recipient';
import Deliverer from '../models/Deliverer';
import File from '../models/File';

class DelivererFeaturesController {
  async index(req, res) {
    const deliverymanId = req.params.id;
    const { q } = req.query;

    // Return all the packages delivered and it is not canceled.
    if (!!q === true) {
      const deliverymanData = await Package.findAll({
        order: [['id', 'ASC']],
        attributes: [
          'id',
          'signature_id',
          'product',
          'recipient_id',
          'deliveryman_id',
          'canceled_at',
          'start_date',
          'end_date',
          'created_at',
        ],
        include: [
          {
            model: Recipient,
            as: 'recipient',
            attributes: [
              'id',
              'name',
              'street',
              'number',
              'city',
              'state',
              'zipcode',
            ],
          },
          {
            model: Deliverer,
            as: 'deliveryman',
            attributes: ['id', 'name', 'avatar_id'],
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['id', 'path', 'url'],
              },
            ],
          },
          {
            model: File,
            as: 'signature',
            attributes: ['id', 'path', 'url'],
          },
        ],
        where: {
          deliveryman_id: deliverymanId,
          canceled_at: null,
          [Op.not]: [
            {
              end_date: null,
            },
          ],
        },
      });

      return res.json(deliverymanData);
    }

    // Return all the packages not delivered and it is not canceled.
    const deliverymanData = await Package.findAll({
      order: [['id', 'ASC']],
      attributes: [
        'id',
        'signature_id',
        'product',
        'recipient_id',
        'deliveryman_id',
        'canceled_at',
        'start_date',
        'end_date',
        'created_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'city',
            'state',
            'zipcode',
          ],
        },
        {
          model: Deliverer,
          as: 'deliveryman',
          attributes: ['id', 'name', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
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
      start_date: Yup.date(),
      signature_id: Yup.number(),
      end_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const packageId = req.params.id;

    const { start_date, end_date, signature_id } = req.body;
    const packageData = await Package.findByPk(packageId);

    if (packageData.start_date > parseISO(end_date)) {
      return res.status(400).json({
        error: 'A data de entrega é menor que a data de retirada!',
      });
    }

    // GetHours is
    if (
      getHours(parseISO(start_date)) <= 8 ||
      getHours(parseISO(start_date)) >= 18
    ) {
      return res.status(400).json({
        error: 'Horário não permitido para realizar a retirada.',
      });
    }

    // Getting how many pickups the delivery man did in the same day.
    // Its possible to use the Brazilian UTC.
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
    // Check if it has end_date and signature_id before the delivery be confirmed.
    if (end_date && !signature_id) {
      return res.status(400).json({
        error: 'Você não enviou a fota da assinatura.',
      });
    }

    return res.json(
      await packageData.update({ start_date, end_date, signature_id })
    );
  }
}

export default new DelivererFeaturesController();
