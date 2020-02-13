import * as Yup from 'yup';

import { startOfToday, endOfDay } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { Op } from 'sequelize';

import Package from '../models/Package';

class PackageController {
  async index(req, res) {
    const deliverymanId = req.params.id;

    if (deliverymanId === null || deliverymanId === undefined) {
      const packageData = await Package.findAll();

      return res.json(packageData);
    }
    const deliverymanData = await Package.findAll({
      where: {
        deliveryman_id: deliverymanId,
        canceled_at: null,
        end_date: null,
      },
    });

    return res.json(deliverymanData);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // TODO
    // Quando a encomenda é cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda,
    // com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.
    const packageFields = req.body;

    return res.json(await Package.create(packageFields));
  }

  async update(req, res) {
    const packageId = req.params.id;
    const packageData = await Package.findByPk(packageId);

    const packageFields = req.body;

    return res.json(await packageData.update(packageFields));
  }

  async status(req, res) {
    // const schema = Yup.object().shape({
    //   start_date: Yup.number().required(),
    //   end_date: Yup.number().required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation fails' });
    // }
    const deliverymanId = req.params.id;

    const { start_date, end_date, signature_id } = req.body;

    // TODO
    // A data de início deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h.

    const pickup = await Package.findAll({
      where: {
        deliveryman_id: deliverymanId,
        start_date: {
          [Op.between]: [
            zonedTimeToUtc(startOfToday(new Date()), 'America/Brasília'),
            zonedTimeToUtc(endOfDay(new Date()), 'America/Brasília'),
          ],
        },
      },
      attributes: ['id', 'start_date', 'end_date'],
    });

    if (pickup.length >= 5) {
      return res.status(400).json({
        error: 'Você já realizou 5 retiradas no mesmo dia',
      });
    }
    return res.json(pickup);
  }

  async delete(req, res) {
    const packageId = req.params.id;
    const packageData = await Package.findByPk(packageId);

    return res.json(await packageData.destroy());
  }
}

export default new PackageController();
