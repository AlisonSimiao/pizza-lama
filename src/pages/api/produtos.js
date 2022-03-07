import { produtos } from "./dados/banco";


export default function handler(req, res) {
    res.status(200).json( produtos );
}