import Mail from '../../lib/Mail';

class PackageMail {
  get key() {
    return 'PackageMail';
  }

  async handle({ data }) {
    const { name, email, product } = data;

    console.log('A fila executou!');
    try {
      await Mail.sendMail({
        to: `${name} <${email}>`,
        subject: 'Produto pronto para retirada!',
        template: 'packages',
        context: {
          name,
          product,
        },
      });
    } catch (err) {
      console.log('Error in PackageMail', err);
    }
  }
}

export default new PackageMail();
