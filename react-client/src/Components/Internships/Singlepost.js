import React, { useState, useEffect } from 'react'
import { Typography, Container, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useParams } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(() => ({
    root: {
        color: "white",
        textAlign: "left",
        ".forms > input textarea": {
            background: "red"
        }
    },
    title: {
        color: "#0099ff",
        textAlign: "centre",
        font: "poppins",
    },
    author: {
        color: "#99ccff",
        textAlign: "centre",
    },
    text:{
        fontSize: "4px",
        textAlign: "centre",
    },
}))

// const CommentList = [
//     {
//         name: "Rebel",
//         text: "Thank you for this blog",
//         time: Date()
//     },
//     {
//         name: "Rebel",
//         text: "Thank you for this blog",
//         time: Date()
//     },
//     {
//         name: "Rebel",
//         text: "Thank you for this blog",
//         time: Date()
//     },
//     {
//         name: "Rebel",
//         text: "Thank you for this blog",
//         time: Date()
//     },
// ]


const Singlepost = (props) => {
    // const [comments, setComments] = useState(CommentList);
    // const [newComment, updateNewComment] = useState();
    const [pending, setPending] = useState(true);
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/users/getblog/${id}`).then((response) => {
            setBlog(response.data);
            setPending(false);
        }).catch((err) => {
            console.log(err.message);
            setError(err.message);
        });
    }, [])

    // const handleChange = (e) => {
    //     updateNewComment(e.target.value)
    // }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     console.log(e.target)
    //     setComments([
    //         {
    //             name: "New User",
    //             text: newComment,
    //             time: Date()
    //         },
    //         ...comments,
    //     ])
    //     console.log(comments)
    // }
    const classes = useStyles()
    
    if(!pending && blog!=null)
    {
        document.getElementById("title").innerHTML=blog.title;
        document.getElementById("author").innerHTML=`By ${blog.author}`;
        document.getElementById("date").innerHTML=`Posted on ${blog.time}`
        document.getElementById("text").innerHTML=blog.text;
    }
    
    return (
        // <Container>
        <Container className={classes.root}>


            {pending && <h3>Fetching blog...</h3>}

            {blog &&

                <div>

                    <Box className={classes.title} my={1}><Typography variant="h2" id="title"></Typography></Box>

                    <Box className={classes.author} my={1}><Typography variant="h5" id="author">
                        
                    </Typography>
                        <hr />
                        <Typography variant="h5" id="date">
                        </Typography></Box>
                    <hr />


                    <Box className= {classes.text} mr={4} my={6}><Typography variant="h6" id="text"></Typography></Box>
                </div>

            }

            {error && <h3>error</h3>}

            <hr />
            <hr />
            {/* <div className="card my-4">
                <h5 className="card-header">Leave a Comment:</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group"><textarea className="form-control" rows="3" value={newComment} onChange={handleChange}></textarea></div>
                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
                    </form>
                </div>
            </div> */}
            {/* -----------------------Comments-------------------------- */}
            {/* {comments.map(singleComment => (
                <Comment
                    name={singleComment.name}
                    text={singleComment.text}
                    time={singleComment.time}
                /> 
            ))} */}

        </Container>
    )
}

export default Singlepost
