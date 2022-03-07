import { carrinho } from "../dados/banco";

export default function handler(req, res) {
    const produto  = req.body;
    if(req.method === "POST"){

        
    }
    console.log(req);
    res.status(200).json(carrinho);
}