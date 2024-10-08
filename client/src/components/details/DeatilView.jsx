import { Box , Typography,styled } from '@mui/material';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState,useContext } from 'react';
import { API } from '../../service/api';
import { Delete, Edit } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';



const DetailView = () => { 

    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);
    const {id} = useParams();
    const navigate=useNavigate()

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const fetchData = async() =>{
            let response = await API.getPostById(id);

            if (response.isSuccess){

                setPost(response.data);
                console.log("post jfwehfhfi")
                console.log(post)
            }
        }
        fetchData();
    },[])

    const deleteBlog = async () => {
        try {
            let response = await API.deletePost(id);
            console.log(response);
            if (response.isSuccess) {
                navigate('/');
            }
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return(
        <Container>
            <Image src ={url} alt="blog" />
            <Box style={{ float: 'right' }}>
                {console.log("datakl2nfkecwjebfjweflkwefkqj")}
                {console.log(account.username)}
                {console.log(post.username)}
                {   
                    ((account.username === post.username) || (account.role==='1')) && 
                    <>  
                        <Link to={`/update/${post._id}`}>
                            <EditIcon color="primary"/> 
                        </Link>
                        <DeleteIcon onClick={deleteBlog} color='error'/>
                    </>
                }
            </Box>
            <Heading>{post.title}</Heading>

            <Author>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>Author: <span style={{fontWeight: 700}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Description>{post.description}</Description>
            {Object.keys(post).length != 0 && <Comments post={post}/>}
        </Container>
    )
}

const Container = styled(Box)`
    margin: '10px 100px',
`
const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break:break-word;
`;

const Author = styled(Box)`
    display: flex;
    justify-content: space-between;
    color: #878787;
    margin: 20px 10px;
`;

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});
const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Description = styled(Typography)`
    word-break:break-word;
    margin: 20px;
    text:auto;
`;


export default DetailView;