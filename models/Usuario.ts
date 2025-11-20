import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcrypt';

// 1. Interface dos atributos (O que o usuário tem)
interface UsuarioAttributes {
    id: number;
    email: string;
    senha: string;
    resetToken?: string | null;
    resetTokenExpires?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Interface de criação (O que é opcional na hora de criar)
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id'> {}

// 3. Definição da Classe do Model
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

// 4. Inicialização do Modelo
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

// 5. Hooks (Gatilhos) de Criptografia

// Antes de CRIAR (Registro)
Usuario.beforeCreate(async (usuario: Usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.senha = await bcrypt.hash(usuario.senha, salt);
});

// Antes de ATUALIZAR (Redefinir Senha)
Usuario.beforeUpdate(async (usuario: Usuario) => {
    // Verifica se o campo 'senha' foi alterado
    if (usuario.changed('senha')) {
        const salt = await bcrypt.genSalt(10);
        usuario.senha = await bcrypt.hash(usuario.senha, salt);
    }
});

export default Usuario;