import {Box, Card, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Grid, IconButton} from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cfg from "../../../config"
import "../profile.css"

const Profile = () => {
    return (
        <Box
            width="30%"
            margin="3% 0 0 0"
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{
                    borderRadius: "50%",
                    bgcolor: 'primary.main',
                    padding: "1%",
                }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardMedia
                            component="img"
                            image={cfg.imageURL}
                            sx={{
                                borderRadius: "50%"
                            }}
                        />
                    </Grid>
                </Card>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {
                        cfg.socials.github !== "" ?
                            <IconButton>
                                <GitHubIcon
                                    color="primary"
                                />
                            </IconButton>
                            : ""
                    }{
                    cfg.socials.email !== "" ?
                        <IconButton>
                            <EmailIcon
                                color="primary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.facebook !== "" ?
                        <IconButton>
                            <FacebookIcon
                                color="primary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.youtube !== "" ?
                        <IconButton>
                            <YouTubeIcon
                                color="primary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.instagram !== "" ?
                        <IconButton>
                            <InstagramIcon
                                color="primary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.linkedin !== "" ?
                        <IconButton>
                            <LinkedInIcon
                                color="primary"
                            />
                        </IconButton>
                        : ""
                }
                </Grid>
                <Typography margin="3% 7%" fontSize="100%" fontWeight="Italic" color='inherit'>
                    {
                        cfg.description
                            .map(
                                (v) =>
                                    <fragment>
                                        {v}
                                        <br/>
                                    </fragment>
                            )
                    }
                </Typography>
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
                            Blogs
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
                <Typography
                    fontSize="50%"
                    fontStyle="italic"
                >
                    Designed and Build by Prashant Bedi
                </Typography>
            </Grid>
        </Box>
    );
}

export default Profile
