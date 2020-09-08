/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import { IQuery } from './query';
import { IDatabase } from './settings';
import create, { ICreate } from './tables/create';
import drop from './tables/drop';
import truncate from './tables/truncate';

export interface ITables {
  /**
   * Create a table if not exists.
   * 
   * @function
   * @param { string } name
   * @returns { ICreate }
   */
  createTable(name: string): ICreate;

  /**
   * Delete a table if it exists.
   * 
   * @function
   * @param { string } name
   * @returns { IQuery<boolean> }
   */
  deleteTable(name: string): IQuery<boolean>;

  /**
   * Truncate a table if it exists.
   * 
   * @function
   * @param { string } name
   * @returns { IQuery<boolean> }
   */
  truncateTable(name: string): IQuery<boolean>;
}

export default function tables(
  nextDatabase: IDatabase,
): ITables {
  return {
    createTable: (name: string) => create(name, nextDatabase),
    deleteTable: (name: string) => drop(name, nextDatabase),
    truncateTable: (name: string) => truncate(name, nextDatabase),
  };
}
