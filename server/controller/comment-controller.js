export const newComment = async (req,res) => {
    try{
        const comment = await new comment(req.body);
        comment.save();

        res.status(200).json({ msg:'commsnt saved successfully'})
    } catch (error) {
        res.status(500).json({ msg: error.message})
    }
}

export const getComments = async (req,res) => {
    try{
        const comments = await comment.find({postId: req.params.id});

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ msg: error.message})
    }
}

export const deleteComment = async (req,res) => {
    try{
        const comments = await comment.findById(req.params.id);
        await comment.delete();

        res.status(200).json({msg: 'comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: error.message})
    }
}