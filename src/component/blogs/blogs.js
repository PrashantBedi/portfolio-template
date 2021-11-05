import {Box, Card, CardContent, CardMedia, Grid, Pagination, Typography} from "@mui/material";
import {MAX_BLOGS_PER_PAGE} from "../../constants";
import changePage from "./hooks/onPageClick"

const blogs = ["What is Gravity?", "Newtons law of Gravity", "Whats theory of Relativity?", "Golang", "Nano"]

const Blogs = () => {
    const {pageNumber, onPageChange} = changePage()

    return (
        <Box
            width="60%"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {
                    blogs.filter((blogs, index) => {
                            if (index >= MAX_BLOGS_PER_PAGE * (pageNumber - 1) && index < (MAX_BLOGS_PER_PAGE * pageNumber)) {
                                return blogs
                            }
                            return null
                        }
                    ).map((blog, index) =>
                        <Card
                            id={index}
                            sx={{
                                margin: "2%",
                                width: "40%",
                                boxShadow: '7px 7px 12px grey'
                            }}
                        >
                            <CardMedia
                                src="https://i.ytimg.com/vi/Kw51KiZhm0I/maxresdefault.jpg" component="img"
                            />
                            <CardContent>
                                <Typography fontWeight="bold" variant="h6" id={index} style={{width: "90%"}} fontFamily="Lato" noWrap>
                                    {blog}
                                </Typography>
                                <Typography gutterBottom fontSize="10" variant="body2" style={{width: "90%"}} fontFamily="Lato" noWrap>
                                    Small desciption about my blog lorem
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                }
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-end"
            >
                <Pagination
                    count={Math.ceil(blogs.length / 4)}
                    color="primary"
                    onChange={onPageChange}
                />
            </Grid>
        </Box>
    )
}

export default Blogs