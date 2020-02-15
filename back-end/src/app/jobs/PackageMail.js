import Mail from '../../lib/Mail';

class PackageMail {
  get key() {
    return 'PackageMail';
  }

  async handle({ data }) {
    const { name, email, product } = data;

    console.log('A fila executou!');
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Produto pronto para retirada!',
      template: 'package',
      context: {
        name,
        product,
      },
    });
  }
}

export default new PackageMail();
