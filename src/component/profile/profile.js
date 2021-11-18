import {Box, Card, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Grid, IconButton} from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cfg from "../../config"

const Profile = ({isMobile}) => {
    return (
        <Box
            width={isMobile ? "100%" : "30%"}
            margin="1% 0 0 0"
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{
                    // borderRadius: "50%",
                    width: "75%",
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
                                // borderRadius: "50%"
                                width: "100%"
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
                            <IconButton
                                href={cfg.socials.github}
                                target="new"
                            >
                                <GitHubIcon
                                    color="secondary"
                                />
                            </IconButton>
                            : ""
                    }{
                    cfg.socials.email !== "" ?
                        <IconButton
                            target="new"
                            href={"mailto:" + cfg.socials.email}
                        >
                            <EmailIcon
                                color="secondary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.facebook !== "" ?
                        <IconButton
                            href={cfg.socials.facebook}
                            target="new"
                        >
                            <FacebookIcon
                                color="secondary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.youtube !== "" ?
                        <IconButton
                            href={cfg.socials.youtube}
                            target="new"
                        >
                            <YouTubeIcon
                                color="secondary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.instagram !== "" ?
                        <IconButton
                            href={cfg.socials.instagram}
                            target="new"
                        >
                            <InstagramIcon
                                color="secondary"
                            />
                        </IconButton>
                        : ""
                }{
                    cfg.socials.linkedin !== "" ?
                        <IconButton
                            href={cfg.socials.linkedin}
                            target="new"
                        >
                            <LinkedInIcon
                                color="secondary"
                            />
                        </IconButton>
                        : ""
                }
                </Grid>
                <Typography margin="1% 0" fontSize="110%"  color='secondary' fontFamily="Lato">
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
                        <Typography fontSize="80%" fontWeight="Bold" color='secondary' fontFamily="Lato">
                            Home
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='secondary' fontFamily="Lato">
                            Blogs
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='secondary' fontFamily="Lato">
                            Project
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='secondary' fontFamily="Lato">
                            Resume
                        </Typography>
                    </IconButton>
                    <IconButton>
                        <Typography fontSize="80%" fontWeight="Bold" color='secondary' fontFamily="Lato">
                            About
                        </Typography>
                    </IconButton>
                </Grid>
                <Typography
                    fontSize="50%"
                    fontStyle="italic"
                    fontFamily="Lato"
                >
                    Designed and Build by Prashant Bedi
                </Typography>
            </Grid>
        </Box>
    );
}

export default Profile
