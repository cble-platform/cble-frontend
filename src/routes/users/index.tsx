import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useListUsersQuery, useMeHasPermissionQuery } from "../../api/graphql/generated";
import React, { useEffect, useMemo, useState } from "react";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { Add, MoreVert } from "@mui/icons-material";
import { useSnackbar } from "notistack";

export default function Users() {
  const { enqueueSnackbar } = useSnackbar();
  const { data: createPermData } = useMeHasPermissionQuery({ variables: { key: "com.cble.users.create" } });
  const { data: listUsersData, error: listUsersError, loading: listUsersLoading } = useListUsersQuery();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const emptyRows = useMemo(() => {
    if (!listUsersData) return 0; // If no rows, show 1 row of not found msg followed by 9 empty rows
    return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listUsersData.users.length) : 0; // Pad rowsPerPage with empty rows on last page
  }, [listUsersData, page, rowsPerPage]);

  useEffect(() => {
    if (listUsersError) enqueueSnackbar({ message: `Failed to get users: ${listUsersError.message}`, variant: "error" });
  }, [listUsersError]);

  const handleChangePage = (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container sx={{ py: 3 }}>
      <Box sx={{ display: "flex", alignContent: "center", justifyContent: "space-between" }}>
        <Typography variant="h4">Users</Typography>
        {createPermData?.meHasPermission && (
          <Button href="/users/create" variant="contained" color="primary" startIcon={<Add />}>
            Create
          </Button>
        )}
      </Box>
      <Divider sx={{ my: 3 }} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell padding="checkbox"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listUsersLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            )}
            {listUsersData?.users.map((user) => (
              <TableRow key={user.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  {user.firstName} {user.lastName}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="center" padding="checkbox" sx={{ px: 1 }}>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100, { label: "All", value: -1 }]}
                colSpan={5}
                count={listUsersData?.users.length ?? 0}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    variant: "standard",
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
}
