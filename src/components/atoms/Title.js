import {Typography} from '@material-ui/core'
const Title = (props) => {
    const {title} = props;
    return <div style={{ paddingTop : '4.5rem', marginBottom : '3.5rem', color : '#00ff00'}}><Typography variant="h3">{title}</Typography></div>
}
export default Title;