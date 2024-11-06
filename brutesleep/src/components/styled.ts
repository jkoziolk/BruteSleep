import { Paper, styled } from "@mui/material";

export const PageContainer = styled('body')(() => ({
    padding: '1rem', 
    display: 'flex',
}));

export const BrutePaper = styled(Paper)(() => ({
    borderRadius: 0,
    backgroundColor: '#bfbfbf',
    border: 'solid 3px',
    margin: '1rem',
    padding: '1rem', 
    overflow: 'scroll',

    width: '50vw',
    "@media (width <= 800px)":{
        width: '100vw'
    },
}));