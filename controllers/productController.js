const product=require('../models/Product')
const InputProduct= async (req, res) => {
    const{name,price,brand}=req.body;
    try{
    const p=await product.create({
        name,price,brand
    });
    res.status(201).json(p);
} catch (error) {
  console.error('Error creating info:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};

const findProduct = async (req, res) => {
    

    try {
        
        const getp = await product.findAll();

        if (!getp || getp.length === 0) {
            return res.status(404).json({ error: 'not found.' });
        }

        res.json(getp);
    } catch (error) {
        console.error('Error finding :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const UpdateProduct = async (req, res) => {
    const { id } = req.query;
    if (!id) {
        return res.status(400).json({ error: 'product not provided in params' });
    }

    try {
        
        const { name, price,brand } = req.body;

        
        const updatedProduct = await product.update(
            { name, price, brand },
            { where: { id:id } }
        );

        if (updatedProduct[0] === 0) {
            return res.status(404).json({ error: 'product not found' });
        }

       
        const updatedproductData = await product.findOne({ where: { id:id } });
        res.json(updatedproductData);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports={InputProduct,findProduct,UpdateProduct}