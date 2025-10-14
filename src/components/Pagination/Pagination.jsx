import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({pages, currentPage, onPageChange}) {
  return (
    <Stack spacing={2}>
      <Pagination count={pages} color="primary" page={currentPage} onChange={(event, value) => onPageChange(value)} />
    </Stack>
  );
}