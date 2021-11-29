import * as React from 'react'
import {Box, Card, CardContent, CardMedia, Grid, Pagination, Typography} from "@mui/material";
import cfg from "../../config"
import {LIGHT_THEME, MAX_PROJECTS_PER_PAGE} from "../../constants";
import changePage from "../blogs/hooks/onPageClick";

const Projects = ({isMobile, theme}) => {
    const {pageNumber, onPageChange} = changePage()

    return (
        <Box
            width={isMobile ? "100%" : "60%"}
            margin="0"
        >
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {
                        cfg.projects.filter((blogs, index) => {
                                if (index >= MAX_PROJECTS_PER_PAGE * (pageNumber - 1) && index < (MAX_PROJECTS_PER_PAGE * pageNumber)) {
                                    return blogs
                                }
                                return null
                            }
                        ).map((project, index) =>
                            <Card
                                id={index}
                                sx={{
                                    margin: "2%",
                                    width: ((isMobile) ? "70%" : "40%"),
                                    boxShadow: (theme === LIGHT_THEME ? '7px 7px 12px grey' : '3px 3px 7px #45433f'),
                                    bgcolor: "background.default"
                                }}
                            >
                                <CardMedia
                                    src={project.url}
                                    component="img"
                                />
                                <CardContent>
                                    <Typography
                                        fontWeight="bold"
                                        variant="h6"
                                        style={{
                                            width: "90%"
                                        }}
                                        color="secondary"
                                        noWrap
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="body2"
                                        fontStyle='italic'
                                        style={{
                                            width: "90%"
                                        }}
                                        color="secondary"
                                        noWrap
                                    >
                                        {project.duration}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        fontWeight='medium'
                                        variant="body2"
                                        style={{
                                            width: "90%"
                                        }}
                                        color="secondary"
                                        noWrap
                                    >
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        )}
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="flex-end"
                >
                    <Pagination
                        count={Math.ceil(cfg.projects.length / 4)}
                        color="primary"
                        onChange={onPageChange}
                    />
                </Grid>
            </Grid>
        </Box>

    )
}

export default Projects