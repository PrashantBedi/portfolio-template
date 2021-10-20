import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Grid, IconButton} from "@material-ui/core";
import cfg from "../../config"

const Profile = () => {
    return (
        <Box
            width="30%"
            margin="7% 0 0 0"
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <img
                    width="80%"
                    src={cfg.imageURL}
                    alt={cfg.imageAltURL}
                />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='primary'>
                            Home
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='primary'>
                            Project
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='primary'>
                            Resume
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='primary'>
                            About
                        </Typography>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Profile
