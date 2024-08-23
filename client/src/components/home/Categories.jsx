import { Button, Table, TableBody, TableCell, TableHead, TableRow , styled} from '@mui/material'
import React from 'react'

const categories=[
    {id:1,type:'Music'},
    {id:2,type:'Movies'},
    {id:3,type:'Sports'},
    {id:4,type:'Tech'},
    {id:5,type:'Fasion'}
]

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const Categories = () => {
  return (
    <>
        <StyledButton variant='contained'>Create Blog</StyledButton>

        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map((category)=>{
                        return(<TableRow key={category.id}>
                            <TableCell>{category.type}</TableCell>
                        </TableRow>)
                    })
                }
            </TableBody>
        </StyledTable>
    </>
  )
}

export default Categories
