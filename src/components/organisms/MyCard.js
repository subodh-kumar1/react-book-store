import { Card, CardActionArea, CardContent, Typography, Button } from "@material-ui/core";

const MyCard = (props) => {
    let {title,description,author,isReading, onChangeStatus} = props;
    

    return <Card>
        <CardContent>
            <Typography variant="h5" >{title}</Typography>
            <Typography variant="subtitle1" >{description}</Typography>
            <Typography variant="subtitle2" >Written By : {author}</Typography>
        </CardContent>
        <CardActionArea>
            {isReading?<Button onClick={onChangeStatus}>Finish</Button>:<Button onClick={onChangeStatus}>Read Again</Button>}
        </CardActionArea>
    </Card>
}


export default MyCard;