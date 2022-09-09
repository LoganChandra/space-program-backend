import express from "express";
import { PiInstance } from "../../model/pi";

const calculate_pi = async (req: express.Request, res: express.Response) => {
  try {

    // RETRIEVE MAX INDEX OF PI 
    let maxIndexRes: any = await PiInstance.max('index')
    let newIndex: any = (maxIndexRes + 1) || 0

    // GET PI
    let pi = getPI(newIndex)

    // CREATE PI INSTANCE IN DB
    PiInstance.create({
      index: newIndex,
      pi: pi
    });
    
    res.status(200).send({
      data: pi,
      msg: "successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ data: [], msg: "failed" });
  }
};

// FUNCTION TO GET VALUE OF PI BY N DECIMAL PLACES 
function getPI(n) {
  let idx = n
  n = BigInt(n)
  let a, b, c;
  return `${eval(`for(a=c=BigInt(100)**++n*BigInt(20),b=BigInt(1);a*=b;)c+=a/=b+++b`)}`.slice(0, idx)
}

export { calculate_pi };
