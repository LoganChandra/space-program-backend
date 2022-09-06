"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PiRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
// routes
const { calculate_pi } = require("./routes/calculate_pi");
class PiRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "PiRoutes");
    }
    configureRoutes() {
        this.app
            .route(`/pi/calculate`)
            .get((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield calculate_pi(req, res);
        }));
        return this.app;
    }
}
exports.PiRoutes = PiRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGkucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9waS9waS5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFvRTtBQUdwRSxTQUFTO0FBQ1QsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTFELE1BQWEsUUFBUyxTQUFRLHlDQUFrQjtJQUM5QyxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDdEIsR0FBRyxDQUFDLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDekQsTUFBTSxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBZEQsNEJBY0MifQ==