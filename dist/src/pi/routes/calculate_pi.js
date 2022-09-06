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
exports.calculate_pi = void 0;
const pi_1 = require("../../model/pi");
const calculate_pi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let maxIndexRes = yield pi_1.PiInstance.max('index');
        let newIndex = (maxIndexRes + 1) || 0;
        let pi = getPI(newIndex);
        pi_1.PiInstance.create({
            index: newIndex,
            pi: pi
        });
        res.status(200).send({
            data: pi,
            msg: "successful",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ data: [], msg: "failed" });
    }
});
exports.calculate_pi = calculate_pi;
function getPI(n) {
    let idx = n;
    n = BigInt(n);
    let a, b, c;
    return `${eval(`for(a=c=BigInt(100)**++n*BigInt(20),b=BigInt(1);a*=b;)c+=a/=b+++b`)}`.slice(0, idx);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlX3BpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BpL3JvdXRlcy9jYWxjdWxhdGVfcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQTRDO0FBRTVDLE1BQU0sWUFBWSxHQUFHLENBQU8sR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7SUFDekUsSUFBSTtRQUNGLElBQUksV0FBVyxHQUFRLE1BQU0sZUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNwRCxJQUFJLFFBQVEsR0FBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7UUFHMUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3hCLGVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDaEIsS0FBSyxFQUFFLFFBQVE7WUFDZixFQUFFLEVBQUUsRUFBRTtTQUNQLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLFlBQVk7U0FDbEIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ25EO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFTTyxvQ0FBWTtBQVByQixTQUFTLEtBQUssQ0FBQyxDQUFDO0lBQ2QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ1gsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLG1FQUFtRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ3JHLENBQUMifQ==