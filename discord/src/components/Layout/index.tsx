import ChannelInfo from '../ChannelInfo'
import ServerName from '../ServerName'
import ServerList from '../SeverList'
import { Grid } from './styles'

const Layout: React.FunctionComponent = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo/>
        </Grid>
    )
}

export default Layout