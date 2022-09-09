import { Model, DataTypes } from "sequelize";

import db from "../../config/database.config";

interface PiAttributes {
  index: number;
  pi: string;
}
export class PiInstance extends Model<PiAttributes> {}

// DEFINING THE PI MODEL
PiInstance.init(
  {
    index: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
    pi: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "pi",
  }
);
