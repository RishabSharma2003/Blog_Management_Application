import postModel from "../models/postModel.js"

export const createPost = async (req,res) => {
    try{
        const post=await new postModel(req.body).save();
        console.log(req.body.title)
        //console.log(post);
        res.status(200).send('saved successfully')
    }catch(error){
        res.status(500).send(`Error while saving post ${error}`)
    }
}

export const getALLPost = async (req,res) => {
    console.log('body '+' params '+' query');

    console.log(req?.body);
    console.log(req?.params);
    console.log(req?.query);
    let category=req?.query?.category
    let posts
    try{
        if(category){
            posts=await postModel.find({categories:category})
        }else{
            posts=await postModel.find({})
        }
        
        //console.log(posts)
        res.status(200).send(posts)
    }catch(error){
        res.status(500).send(`Error while saving post ${error}`)
        
    }

}

export const getPost = async (req,res) =>{
    try {
        const post = await postModel.findById(req.params.id)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
