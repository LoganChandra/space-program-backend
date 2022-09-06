"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("app", "", "", {
    storage: "./database.sqlite",
    dialect: "sqlite",
    logging: false,
});
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy9kYXRhYmFzZS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ3RDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUIsT0FBTyxFQUFFLFFBQVE7SUFDakIsT0FBTyxFQUFFLEtBQUs7Q0FDZixDQUFDLENBQUM7QUFFSCxrQkFBZSxFQUFFLENBQUMifQ==