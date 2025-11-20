import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database.js';

// 1. Interface com todos os campos
interface MensagemAttributes {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    servicoInteresse?: string; // Opcional
    mensagem?: string;        // Opcional
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Interface para criação (ID é opcional pois é auto-incremento)
interface MensagemCreationAttributes extends Optional<MensagemAttributes, 'id'> {}

// 3. Definição da Classe do Model
class Mensagem extends Model<MensagemAttributes, MensagemCreationAttributes> implements MensagemAttributes {
    public id!: number;
    public nome!: string;
    public email!: string;
    public telefone!: string;
    public cpf!: string;
    public servicoInteresse!: string;
    public mensagem!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Mensagem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
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
}, {
    sequelize, // Passamos a conexão
    tableName: 'Mensagens',
});

export default Mensagem;