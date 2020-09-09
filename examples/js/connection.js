/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const dotenv = require('dotenv');
const nextDatabase = require('../../lib/index');

// Load the .env configuration.
dotenv.config();

/**
 * Get the connection to the database.
 * 
 * @async
 * @function
 * @returns { Promise<INextDatabase> }
 */
async function connection() {
  console.log('Connecting to the database...');

  const database = await nextDatabase({
    host: process.env.host || 'localhost',
    port: Number(process.env.port) || 3306,
    user: process.env.user || 'root',
    password: process.env.password || '',
    database: process.env.database || 'nextDatabase',
  }, {
    createDatabaseIfNotExists: true,
    destroyDatabaseAfterClose: true,
  });

  console.log('Connected to the database');

  return database;
}

module.exports = connection;
