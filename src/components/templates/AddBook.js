import { Button } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import { Typography, Container } from "@material-ui/core"
import Title from "../atoms/Title"

const AddBook = (props) => {
    const {addBook} = props
    function handleClick(){
        let bookTitle = document.getElementById(0).value;
        let genre = document.getElementById(1).value;
        let author = document.getElementById(2).value;
        const tempBook = {
                title : bookTitle,
                description : genre,
                author : author,
                isReading : true
        }
        addBook(tempBook);
        //console.log(bookTitle + ' ' + genre + ' ' + author);
    }
    return <Container maxWidth='xl'>
        <Title title='Add Book'/>
        <TextField placeholder='Book Name' fullWidth id={0}/>
        <br/>
        <TextField  placeholder='Book Genre' fullWidth  id={1}/>
        <br/>
        <TextField  placeholder='Author' fullWidth id={2}/>
        <br/>
        <Button variant='contained' color='primary' onClick={handleClick}>Start Reading</Button>
        </Container>
}


export default AddBook;