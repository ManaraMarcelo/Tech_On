import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs';
import { resolve } from 'path';

interface Config {
    [key: string]: {
        dialect: 'sqlite' | 'mysql' | 'postgres';
        storage?: string;
    }
} 

const configPath = resolve('config', 'config.json');
const configContent = readFileSync(configPath, 'utf-8');
const configJson: Config = JSON.parse(configContent);

const dbConfig = configJson['development'];

// Cria a instância do Sequelize
const sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

export default sequelize;