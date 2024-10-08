import { Box, Typography,styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";


const Comment = ({comment, setToggle,toggle}) => {

    const {account} = useContext(DataContext);

    const removeComment = async () => {
        
        console.log(comment._id+" comment._id")
        let response = await API.deleteComment(comment._id);
        console.log(response)
        if (response.isSuccess) {
            setToggle(!toggle);
        }

    }

    return(
        <Component>
             <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()} </StyledDate>
                { ((comment.name === account.username) || (account.role==='1')) && <DeleteIcon onClick={() => removeComment()} /> }
            </Container>
            <Box>
                <Typography>{comment.comments}</Typography>
            </Box>
        </Component>

    )
}

const Component = styled(Box)`
    margin-top: 30px;
    background:#F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display:flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight:600;
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color:#878787;

`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`


export default Comment;