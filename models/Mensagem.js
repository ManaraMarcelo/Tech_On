import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Mensagem = sequelize.define('Mensagem', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    servicoInteresse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mensagem: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    // O Sequelize adiciona 'createdAt' e 'updatedAt' automaticamente
}, {
    tableName: 'Mensagens', // Nome da tabela no banco
});

export default Mensagem;