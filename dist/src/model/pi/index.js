"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
class PiInstance extends sequelize_1.Model {
}
exports.PiInstance = PiInstance;
PiInstance.init({
    index: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
    },
    pi: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: "pi",
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWwvcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUNBQTZDO0FBRTdDLG1GQUE4QztBQU05QyxNQUFhLFVBQVcsU0FBUSxpQkFBbUI7Q0FBRztBQUF0RCxnQ0FBc0Q7QUFFdEQsVUFBVSxDQUFDLElBQUksQ0FDYjtJQUNFLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxFQUFFLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0NBQ0YsRUFDRDtJQUNFLFNBQVMsRUFBRSx5QkFBRTtJQUNiLFNBQVMsRUFBRSxJQUFJO0NBQ2hCLENBQ0YsQ0FBQyJ9