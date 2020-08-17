import { createMuiTheme }from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import orange from '@material-ui/core/colors/orange'


const theme = createMuiTheme ({
    palette: {
        primary: {
            main: lightGreen[400]
            },
        secondary: {
            main: orange[400]
        },
        background: {
            default : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        }},
        spacing: 8
})

export default theme
