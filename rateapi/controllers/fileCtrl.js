const User = require('../models/user');
const Company = require('../models/company')
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'skyhawk', 
    api_key: '521412313694658', 
    api_secret: 'Sy2s3yyfP7MUDGmSAoSDRBkzbhA' 
  });

exports.addImage = async(req,res) =>{
 
}  