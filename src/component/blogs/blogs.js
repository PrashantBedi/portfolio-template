import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const blogs = ["What is Gravity?", "Newtons law of Gravity", "Whats theory of Relativity", "Golang"]

const Blogs = () => {
    return (
        <Box width="60%">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    blogs.map(blog =>
                        <Card
                            sx={{
                                margin: "2%",
                                width: "35%",
                                height: "250px",
                                boxShadow: '7px 0px 12px grey'
                            }}
                        >
                            <CardMedia src="https://i.ytimg.com/vi/Kw51KiZhm0I/maxresdefault.jpg" component="img"/>
                            <CardContent>
                                <Typography fontWeight="bold" variant="h6">
                                    {blog}
                                </Typography>
                                <Typography gutterBottom fontSize="10" variant="body2">
                                    Small desciption about my blog
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
            </Grid>
        </Box>
    )
}

export default Blogs