import React from "react";
import { Button } from "semantic-ui-react";
import { PaginationProperties } from "../models/PaginationProperties.tsx";

const Pagination: React.FC<PaginationProperties> = ({ page, totalPages, onPageChange }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
                PREVIOUS
            </Button>
            <span>PAGE <b>{page} of {totalPages} </b></span>
            <Button disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
                NEXT
            </Button>
        </div>
    );
};

export default Pagination;