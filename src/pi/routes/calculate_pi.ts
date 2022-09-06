import express from "express";
import { PiInstance } from "../../model/pi";

const calculate_pi = async (req: express.Request, res: express.Response) => {
  try {
    let maxIndexRes: any = await PiInstance.max('index')
    let newIndex: any = (maxIndexRes + 1) || 0

    
    let pi = getPI(newIndex)
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

function getPI(n) {
  let idx = n
  n = BigInt(n)
  let a, b, c;
  return `${eval(`for(a=c=BigInt(100)**++n*BigInt(20),b=BigInt(1);a*=b;)c+=a/=b+++b`)}`.slice(0, idx)
}

export { calculate_pi };
