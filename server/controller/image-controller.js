const url='http://localhost:8000';

export const uploadImage=async(req,res)=>{
    try {
        if(!req.body.file){
            return res.status(400).json({msg:`file not found ${error}`})
        }
    
        console.log(req.body.file)

        const imageUrl=`${url}/file/${req.body.file.filename}`

        return res.status(200).json(imageUrl)
        
    } catch (error) {
        return res.status(500).json({msg:`Error while uploading image ${error.message}`})
    }
}

