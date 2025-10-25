import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Lê o config.json e pega as configurações de 'development'
const configPath = resolve('config/config.json');
const configContent = readFileSync(configPath, 'utf-8');
const config = JSON.parse(configContent)['development'];

// Cria a instância do Sequelize
const sequelize = new Sequelize(config);

export default sequelize;