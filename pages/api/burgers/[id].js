const  data=require('../../../public/data.json');



export default function handler(req,res){
  const {id }= req.query
  const burger=data.find(burger=>burger.id===parseInt(id))
  res.status(200).json(burger)
}