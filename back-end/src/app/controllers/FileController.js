import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    // const id_user = req.userId;

    const { id } = req.params;

    const file = await File.findAll({
      where: {
        id,
      },
      attributes: ['id', 'path', 'url'],
    });

    return res.json(file);
  }
}

export default new FileController();
