import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcrypt';

// Interface dos atributos
interface UsuarioAttributes {
    id: number;
    email: string;
    senha: string;
    resetToken?: string | null;
    resetTokenExpires?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

// Interface de criação
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
    public id!: number;
    public email!: string;
    public senha!: string;
    public resetToken?: string | null;
    public resetTokenExpires?: Date | null;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    // Método de instância para validar senha
    public async validarSenha(senhaEnviada: string): Promise<boolean> {
        return await bcrypt.compare(senhaEnviada, this.senha);
    }
}

Usuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resetToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resetTokenExpires: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'Usuarios',
});

// Hooks
Usuario.beforeCreate(async (usuario: Usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.senha = await bcrypt.hash(usuario.senha, salt);
});

// Caso precisemos atualizar a senha, também criptografamos no beforeUpdate (opcional, mas bom ter)
Usuario.beforeUpdate(async (usuario: Usuario) => {
    if (usuario.changed('senha')) {
        const salt = await bcrypt.genSalt(10);
        usuario.senha = await bcrypt.hash(usuario.senha, salt);
    }
});

export default Usuario;