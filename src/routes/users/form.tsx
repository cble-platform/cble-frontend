import { Add, CheckBox, CheckBoxOutlineBlank, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Autocomplete, Box, Checkbox, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ListGroupsQuery, UserInput, useListGroupsQuery } from "../../api/graphql/generated";

export default function UserForm({ action }: { action: "create" | "edit" }) {
  const { id } = useParams();
  const [user, setUser] = useState<UserInput>({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    groupIds: [],
  });
  const { data: groupsData, error: groupsError, loading: groupsLoading } = useListGroupsQuery();

  const handleSubmitUser = () => {
    // if (action === "create")
    //   createBlueprint({
    //     variables: {
    //       input: blueprint,
    //     },
    //   }).catch(console.error);
    // else if (action === "edit" && id)
    //   updateBlueprint({
    //     variables: {
    //       id,
    //       input: blueprint,
    //     },
    //   }).catch(console.error);
  };

  return (
    <Container sx={{ py: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h4">Create User</Typography>
        <LoadingButton
          variant="contained"
          startIcon={action === "create" ? <Add /> : <Save />}
          // loading={createBlueprintLoading || updateBlueprintLoading}
          // disabled={
          //   blueprint.name === "" ||
          //   blueprint.blueprintTemplate === "" ||
          //   blueprint.parentGroupId === "" ||
          //   blueprint.providerId === "" ||
          //   createBlueprintData != null
          // }
          onClick={handleSubmitUser}
        >
          {action === "create" ? "Create" : "Save"}
        </LoadingButton>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            label="Username"
            variant="outlined"
            sx={{ width: "100%" }}
            value={user.username}
            onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            sx={{ width: "100%" }}
            value={user.email}
            onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="First Name"
            variant="outlined"
            sx={{ width: "100%" }}
            value={user.firstName}
            onChange={(e) => setUser((prev) => ({ ...prev, firstName: e.target.value }))}
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            sx={{ width: "100%" }}
            value={user.lastName}
            onChange={(e) => setUser((prev) => ({ ...prev, lastName: e.target.value }))}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            disablePortal
            autoComplete
            clearOnEscape
            options={groupsData?.groups ?? []}
            getOptionKey={(option: ListGroupsQuery["groups"][number]) => `${option.id}`}
            getOptionLabel={(option: ListGroupsQuery["groups"][number]) => `${option.name}`}
            value={groupsData?.groups.filter((g) => user.groupIds.includes(g.id)) ?? []}
            onChange={(_, val) => {
              val && setUser((prev) => ({ ...prev, groupIds: val.map((v) => v.id) }));
            }}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={<CheckBoxOutlineBlank fontSize="small" />}
                  checkedIcon={<CheckBox fontSize="small" />}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            )}
            renderInput={(params) => <TextField {...params} label="Groups" />}
            disabled={groupsLoading || groupsError !== undefined}
            limitTags={10}
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
