import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, 
  },
  imageUrl: {
    type: DataTypes.STRING, 
    allowNull: true
  },
  matterportUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING, // Ex: 'Residencial', 'Comercial'
    allowNull: true
  }
  // Timestamps (createdAt, updatedAt) são adicionados por padrão
}, {
  tableName: 'Projects', // Nome da tabela no banco
});

export default Project;