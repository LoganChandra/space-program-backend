"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToString = void 0;
const formatDateToString = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return (date.toISOString().slice(0, 10) + " " + strTime)
        .toString()
        .toUpperCase();
};
exports.formatDateToString = formatDateToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BpL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7SUFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNyQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtJQUMxRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3pELElBQUksT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDckQsUUFBUSxFQUFFO1NBQ1YsV0FBVyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBQ08sZ0RBQWtCIn0=