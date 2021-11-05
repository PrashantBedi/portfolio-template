import {useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [page, setPage] = useState(1)

    const onPageChange = (event, value) => {
        setPage(value)
    }

    return {
        pageNumber: page,
        onPageChange: onPageChange
    }
}