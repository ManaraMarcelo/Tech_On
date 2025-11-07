import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcrypt';

const Usuario = sequelize.define('Usuario', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Usuarios',
});

// Hook (Gatilho) do Sequelize
// Antes de criar um usuário, esta função criptografa a senha
Usuario.beforeCreate(async (usuario) => {
  const salt = await bcrypt.genSalt(10);
  usuario.senha = await bcrypt.hash(usuario.senha, salt);
});

// Método para validar a senha no login
Usuario.prototype.validarSenha = async function(senhaEnviada) {
  return await bcrypt.compare(senhaEnviada, this.senha);
};

export default Usuario;