import React,{useState} from "react";
//material ui components
import {Grid,Typography} from "@material-ui/core";

//custom components
import TweetCard from "../Components/TweetCard";
import SearchTab from "../Components/SearchBar"

import{getResults} from "../Services";



const SearchPage =()=> {

    const[content,setContent]=useState([] );


    //handler for searching query
    const searchHandler =async (event) =>{
        setContent ( await getResults(event.target.value))
    }


    return (
        <Grid container direction="column" justify="center" alignItems="center" >
            <Typography variant="subtitle2" component="h2" color='primary' style={{margin:'2px'}}>
              search for tweet
            </Typography>
            <Grid item xs={12} sm={8} md={8}>
                <SearchTab handler={searchHandler}  />
            </Grid>
            <Grid item xs={12} sm={8} md={8} style={{marginBottom:'10px'}}>
                <TweetCard
                    post={content}
                />
            </Grid>


        </Grid>





    );
}

export default SearchPage;
