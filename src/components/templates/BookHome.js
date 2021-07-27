import { Container, Grid, Tabs, Tab, Typography } from "@material-ui/core"
import MyCard from "../organisms/MyCard"
import {useState} from 'react';
import books from "../../commons/books";
import Title from "../atoms/Title";
const BookHome = () => {
    const [value, setValue] = useState(0);
    const [bookList, setBookList] = useState(books.filter(book => book.isReading));


    function onChangeStatus(book){
        book.isReading = !book.isReading;
    }
    const cardArray = bookList.map(book =>
    <Grid item xs={4}>
        <MyCard title={book.title} description={book.description} author={book.author} isReading={book.isReading} onChangeStatus={()=>onChangeStatus(book)}/>
    </Grid>)

    function handleChange(event, newValue){
        setValue(newValue);
        setBookList(books.filter(
            (book) => {
              if(newValue === 0){
                return book.isReading
              }else{
                return !book.isReading
              }
            }
          ))
      }
    return <Container maxWidth='md'>
        <Title title='My Book Library'/>
        <Tabs onChange={handleChange} value={value} textColor='primary' indicatorColor='primary'>
            <Tab label='Currently Reading' value={0} style={value!=0?{color:'#ffffff'}:{color:'#00ff00'}}/>
            <Tab label='Finished' value={1} style={value!=1?{color:'#ffffff'}:{color:'#00ff00'}}/>
        </Tabs>
        <Grid container>
            {cardArray}
        </Grid>
    </Container>
}

export default BookHome;