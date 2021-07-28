
import {  Drawer, ListItem, List,  Button } from "@material-ui/core";

import React, {useState} from "react";
import BookHome from "../templates/BookHome";
import AddBook from '../templates/AddBook';
import books from "../../commons/books"

const HomePage = () => {
    const [bookList, setBookList] = useState(books)
    const [currPage,setCurrPage] = useState(1);
    function handleDrawer(drawerIndex){
        setCurrPage(drawerIndex);
    }
    function addBook(book){
        let books = bookList;
        books.push(book);
        setBookList(books)
    }
    return <React.Fragment>
        <Drawer anchor='left' variant='permanent'>
            <List>
                <ListItem>
                    <Button variant='text' color='secondary' onClick={()=>{handleDrawer(0)}}>Add Book</Button>
                </ListItem>
                <ListItem>
                    <Button variant='text' color='secondary' onClick={()=>{handleDrawer(1)}}>My Library</Button>
                </ListItem>
            </List></Drawer>
            {currPage === 1?<BookHome books={bookList}/>:<AddBook addBook={addBook}/>}

        
    </React.Fragment>
}

export default HomePage;