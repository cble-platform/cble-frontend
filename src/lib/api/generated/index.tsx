import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Map: { input: any; output: any; }
  StrMap: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
  VarTypeMap: { input: any; output: any; }
};

export enum Action {
  BlueprintCreate = 'blueprint_create',
  BlueprintDelete = 'blueprint_delete',
  BlueprintDeploy = 'blueprint_deploy',
  BlueprintGet = 'blueprint_get',
  BlueprintList = 'blueprint_list',
  BlueprintUpdate = 'blueprint_update',
  DeploymentConsole = 'deployment_console',
  DeploymentCreate = 'deployment_create',
  DeploymentDelete = 'deployment_delete',
  DeploymentDestroy = 'deployment_destroy',
  DeploymentGet = 'deployment_get',
  DeploymentList = 'deployment_list',
  DeploymentRedeploy = 'deployment_redeploy',
  DeploymentUpdate = 'deployment_update',
  GroupCreate = 'group_create',
  GroupDelete = 'group_delete',
  GroupGet = 'group_get',
  GroupList = 'group_list',
  GroupUpdate = 'group_update',
  PermissionGet = 'permission_get',
  PermissionGrant = 'permission_grant',
  PermissionList = 'permission_list',
  PermissionRevoke = 'permission_revoke',
  ProviderConfigure = 'provider_configure',
  ProviderCreate = 'provider_create',
  ProviderDelete = 'provider_delete',
  ProviderGet = 'provider_get',
  ProviderList = 'provider_list',
  ProviderLoad = 'provider_load',
  ProviderUnload = 'provider_unload',
  ProviderUpdate = 'provider_update',
  UserCreate = 'user_create',
  UserDelete = 'user_delete',
  UserGet = 'user_get',
  UserList = 'user_list',
  UserUpdate = 'user_update'
}

export type Blueprint = {
  __typename?: 'Blueprint';
  blueprintTemplate: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  deployments: Array<Maybe<Deployment>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  provider: Provider;
  resources: Array<Resource>;
  updatedAt: Scalars['Time']['output'];
  variableTypes: Scalars['VarTypeMap']['output'];
};

export type BlueprintInput = {
  blueprintTemplate: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  providerId: Scalars['ID']['input'];
  variableTypes: Scalars['VarTypeMap']['input'];
};

export type BlueprintPage = {
  __typename?: 'BlueprintPage';
  blueprints: Array<Blueprint>;
  total: Scalars['Int']['output'];
};

export type Deployment = {
  __typename?: 'Deployment';
  blueprint: Blueprint;
  createdAt: Scalars['Time']['output'];
  deploymentNodes: Array<DeploymentNode>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  requester: User;
  state: DeploymentState;
  templateVars: Scalars['StrMap']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type DeploymentInput = {
  name: Scalars['String']['input'];
};

export type DeploymentNode = {
  __typename?: 'DeploymentNode';
  createdAt: Scalars['Time']['output'];
  deployment: Deployment;
  id: Scalars['ID']['output'];
  nextNodes: Array<DeploymentNode>;
  prevNodes: Array<DeploymentNode>;
  resource: Resource;
  state: DeploymentNodeState;
  updatedAt: Scalars['Time']['output'];
  vars?: Maybe<Scalars['StrMap']['output']>;
};

export enum DeploymentNodeState {
  Awaiting = 'AWAITING',
  Complete = 'COMPLETE',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Inprogress = 'INPROGRESS',
  Parentawaiting = 'PARENTAWAITING',
  Tainted = 'TAINTED',
  Todelete = 'TODELETE',
  Torebuild = 'TOREBUILD'
}

export type DeploymentPage = {
  __typename?: 'DeploymentPage';
  deployments: Array<Deployment>;
  total: Scalars['Int']['output'];
};

export enum DeploymentState {
  Awaiting = 'AWAITING',
  Complete = 'COMPLETE',
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Inprogress = 'INPROGRESS'
}

export type GrantedPermission = {
  __typename?: 'GrantedPermission';
  action: Action;
  createdAt: Scalars['Time']['output'];
  displayString: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  objectId: Scalars['ID']['output'];
  objectType: ObjectType;
  subjectId: Scalars['ID']['output'];
  subjectType: SubjectType;
  updatedAt: Scalars['Time']['output'];
};

export type GrantedPermissionPage = {
  __typename?: 'GrantedPermissionPage';
  permissions: Array<GrantedPermission>;
  total: Scalars['Int']['output'];
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type GroupInput = {
  name: Scalars['String']['input'];
};

export type GroupPage = {
  __typename?: 'GroupPage';
  groups: Array<Group>;
  total: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Applies the stored configuration to the provider (requires permission `x.x.providers.x.configure`) */
  configureProvider: Provider;
  /** Create a blueprint (requires permission `x.x.blueprints.*.create`) */
  createBlueprint: Blueprint;
  /** Create a group (requires permission `x.x.group.x.create`) */
  createGroup: Group;
  /** Create a provider (requires permission `x.x.providers.*.create`) */
  createProvider: Provider;
  /** Create a user (requires permission `x.x.users.*.create`) */
  createUser: User;
  /** Delete a blueprint (requires permission `x.x.blueprints.x.delete`) */
  deleteBlueprint: Scalars['Boolean']['output'];
  /** Delete a group (requires permission `x.x.group.x.delete`) */
  deleteGroup: Scalars['Boolean']['output'];
  /** Delete a provider (requires permission `x.x.providers.x.delete`) */
  deleteProvider: Scalars['Boolean']['output'];
  /** Delete a user (requires permission `x.x.users.x.delete`) */
  deleteUser: Scalars['Boolean']['output'];
  /** Deploy a blueprint (requires permission `x.x.blueprints.x.deploy`) */
  deployBlueprint: Deployment;
  /** Control the power state of a deployment node */
  deploymentNodePower: Scalars['Boolean']['output'];
  /** Destroy a deployment (requires permission `x.x.deployments.x.destroy`) */
  destroyDeployment: Deployment;
  /** Grant a permission (requires permission `x.x.permission.*.grant`) */
  grantPermission: GrantedPermission;
  /** Load a provider to connect it to CBLE (requires permission `x.x.providers.x.load`) */
  loadProvider: Provider;
  /** Redeploy nodes within a deployment (requires permission `x.x.deployments.x.redeploy`) */
  redeployDeployment: Deployment;
  /** Revoke a permission (requires permission `x.x.permission.*.revoke`) */
  revokePermission: Scalars['Boolean']['output'];
  /** Change current user's password */
  selfChangePassword: Scalars['Boolean']['output'];
  /** Unload a provider to disconnect it from CBLE (requires permission `x.x.providers.x.unload`) */
  unloadProvider: Provider;
  /** Update a blueprint (requires permission `x.x.blueprints.x.update`) */
  updateBlueprint: Blueprint;
  /** Update a deployment (requires permission `x.x.deployments.x.update`) */
  updateDeployment: Deployment;
  /** Update a group (requires permission `x.x.group.x.update`) */
  updateGroup: Group;
  /** Update a provider (requires permission `x.x.providers.x.update`) */
  updateProvider: Provider;
  /** Update a user (requires permission `x.x.users.x.update`) */
  updateUser: User;
};


export type MutationConfigureProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateBlueprintArgs = {
  input: BlueprintInput;
};


export type MutationCreateGroupArgs = {
  input: GroupInput;
};


export type MutationCreateProviderArgs = {
  input: ProviderInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
};


export type MutationDeleteBlueprintArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeployBlueprintArgs = {
  id: Scalars['ID']['input'];
  templateVars: Scalars['StrMap']['input'];
};


export type MutationDeploymentNodePowerArgs = {
  id: Scalars['ID']['input'];
  state: PowerState;
};


export type MutationDestroyDeploymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGrantPermissionArgs = {
  action: Action;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  objectType: ObjectType;
  subjectID: Scalars['ID']['input'];
  subjectType: SubjectType;
};


export type MutationLoadProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRedeployDeploymentArgs = {
  id: Scalars['ID']['input'];
  nodeIds: Array<Scalars['ID']['input']>;
};


export type MutationRevokePermissionArgs = {
  action: Action;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  objectType: ObjectType;
  subjectID: Scalars['ID']['input'];
  subjectType: SubjectType;
};


export type MutationSelfChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationUnloadProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBlueprintArgs = {
  id: Scalars['ID']['input'];
  input: BlueprintInput;
};


export type MutationUpdateDeploymentArgs = {
  id: Scalars['ID']['input'];
  input: DeploymentInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID']['input'];
  input: GroupInput;
};


export type MutationUpdateProviderArgs = {
  id: Scalars['ID']['input'];
  input: ProviderInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UserInput;
};

export enum ObjectType {
  Blueprint = 'blueprint',
  Deployment = 'deployment',
  Group = 'group',
  Permission = 'permission',
  Provider = 'provider',
  User = 'user'
}

export enum PowerState {
  Off = 'off',
  On = 'on',
  Reset = 'reset'
}

export type Provider = {
  __typename?: 'Provider';
  blueprints?: Maybe<Array<Maybe<Blueprint>>>;
  configBytes: Scalars['String']['output'];
  createdAt: Scalars['Time']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isLoaded: Scalars['Boolean']['output'];
  providerGitUrl: Scalars['String']['output'];
  providerVersion: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
};

export type ProviderInput = {
  configBytes: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  providerGitUrl: Scalars['String']['input'];
  providerVersion: Scalars['String']['input'];
};

export type ProviderPage = {
  __typename?: 'ProviderPage';
  providers: Array<Provider>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a blueprint (requires permission `x.x.blueprints.x.get`) */
  blueprint: Blueprint;
  /** List blueprints (requires permission `x.x.blueprints.*.list`) */
  blueprints: BlueprintPage;
  /** List all blueprints user has `blueprint.x.deploy` permission for */
  deployableBlueprints: BlueprintPage;
  /** Get a deployment (requires permission `x.x.deployments.x.get`) */
  deployment: Deployment;
  /** List deployments (requires permission `x.x.deployments.*.list`) */
  deployments: DeploymentPage;
  /** Get a group (requires permission `x.x.groups.x.get`) */
  group: Group;
  /** List groups (requires permission `x.x.groups.*.list`) */
  groups: GroupPage;
  /** Get current user */
  me: User;
  /** Retrieves if the current user has a given permission */
  meHasPermission: Scalars['Boolean']['output'];
  /** Get a permission (requires permission `x.x.permission.x.get`) */
  permission: GrantedPermission;
  /** List permissions (requires permission `x.x.permission.*.list`) */
  permissions: GrantedPermissionPage;
  /** Get a provider (requires permission `x.x.providers.x.get`) */
  provider: Provider;
  /** List providers (requires permission `x.x.providers.*.list`) */
  providers: ProviderPage;
  /** Search groups */
  searchGroups: GroupPage;
  /** Search users */
  searchUsers: UserPage;
  /** Get a user (requires permission `x.x.users.x.get`) */
  user: User;
  /** List users (requires permission `x.x.users.*.list`) */
  users: UserPage;
};


export type QueryBlueprintArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBlueprintsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDeployableBlueprintsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDeploymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDeploymentsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMeHasPermissionArgs = {
  action: Action;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  objectType: ObjectType;
};


export type QueryPermissionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProviderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProvidersArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchGroupsArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QuerySearchUsersArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  search: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Resource = {
  __typename?: 'Resource';
  blueprint: Blueprint;
  createdAt: Scalars['Time']['output'];
  dependsOn: Array<Resource>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  object: Scalars['String']['output'];
  requiredBy: Array<Resource>;
  resourceType: Scalars['String']['output'];
  type: ResourceType;
  updatedAt: Scalars['Time']['output'];
};

export enum ResourceType {
  Data = 'DATA',
  Resource = 'RESOURCE'
}

export enum SubjectType {
  Group = 'group',
  User = 'user'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Time']['output'];
  deployments: Array<Maybe<Deployment>>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groups: Array<Maybe<Group>>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['Time']['output'];
  username: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UserPage = {
  __typename?: 'UserPage';
  total: Scalars['Int']['output'];
  users: Array<User>;
};

export type BlueprintFragementFragment = { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> };

export type BlueprintsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlueprintsQuery = { __typename?: 'Query', deployableBlueprints: { __typename?: 'BlueprintPage', total: number, blueprints: Array<{ __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> }> } };

export type GetBlueprintQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetBlueprintQuery = { __typename?: 'Query', blueprint: { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> } };

export type CreateBlueprintMutationVariables = Exact<{
  input: BlueprintInput;
}>;


export type CreateBlueprintMutation = { __typename?: 'Mutation', createBlueprint: { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> } };

export type UpdateBlueprintMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: BlueprintInput;
}>;


export type UpdateBlueprintMutation = { __typename?: 'Mutation', updateBlueprint: { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> } };

export type DeployBlueprintMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  templateVars: Scalars['StrMap']['input'];
}>;


export type DeployBlueprintMutation = { __typename?: 'Mutation', deployBlueprint: { __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any } };

export type DeploymentFragmentFragment = { __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any };

export type ListDeploymentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListDeploymentsQuery = { __typename?: 'Query', deployments: { __typename?: 'DeploymentPage', total: number, deployments: Array<{ __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any, blueprint: { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> }, requester: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string } }> } };

export type GetDeploymentQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDeploymentQuery = { __typename?: 'Query', deployment: { __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any, blueprint: { __typename?: 'Blueprint', id: string, createdAt: any, updatedAt: any, name: string, description: string, blueprintTemplate: string, variableTypes: any, provider: { __typename?: 'Provider', id: string, displayName: string, isLoaded: boolean }, deployments: Array<{ __typename?: 'Deployment', id: string } | null> }, requester: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string }, deploymentNodes: Array<{ __typename?: 'DeploymentNode', id: string, createdAt: any, updatedAt: any, state: DeploymentNodeState, vars?: any | null, resource: { __typename?: 'Resource', id: string, createdAt: any, updatedAt: any, key: string, object: string }, nextNodes: Array<{ __typename?: 'DeploymentNode', id: string }> }> } };

export type UpdateDeploymentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: DeploymentInput;
}>;


export type UpdateDeploymentMutation = { __typename?: 'Mutation', updateDeployment: { __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any } };

export type DestroyDeploymentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DestroyDeploymentMutation = { __typename?: 'Mutation', destroyDeployment: { __typename?: 'Deployment', id: string, createdAt: any, updatedAt: any, name: string, templateVars: any } };

export type DeploymentNodePowerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  state: PowerState;
}>;


export type DeploymentNodePowerMutation = { __typename?: 'Mutation', deploymentNodePower: boolean };

export type GroupFragmentFragment = { __typename?: 'Group', id: string, createdAt: any, updatedAt: any, name: string };

export type ListGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGroupsQuery = { __typename?: 'Query', groups: { __typename?: 'GroupPage', total: number, groups: Array<{ __typename?: 'Group', id: string, createdAt: any, updatedAt: any, name: string }> } };

export type SearchGroupsQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchGroupsQuery = { __typename?: 'Query', searchGroups: { __typename?: 'GroupPage', groups: Array<{ __typename?: 'Group', id: string, createdAt: any, updatedAt: any, name: string }> } };

export type PermissionFieldsFragment = { __typename?: 'GrantedPermission', id: string, createdAt: any, updatedAt: any, subjectType: SubjectType, subjectId: string, objectType: ObjectType, objectId: string, action: Action, displayString: string };

export type ListPermissionsQueryVariables = Exact<{
  count?: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListPermissionsQuery = { __typename?: 'Query', permissions: { __typename?: 'GrantedPermissionPage', total: number, permissions: Array<{ __typename?: 'GrantedPermission', id: string, createdAt: any, updatedAt: any, subjectType: SubjectType, subjectId: string, objectType: ObjectType, objectId: string, action: Action, displayString: string }> } };

export type NavPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type NavPermissionsQuery = { __typename?: 'Query', listBlueprints: boolean, listProviders: boolean, listPermissions: boolean };

export type GrantPermissionMutationVariables = Exact<{
  subjectType: SubjectType;
  subjectID: Scalars['ID']['input'];
  objectType: ObjectType;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  action: Action;
}>;


export type GrantPermissionMutation = { __typename?: 'Mutation', grantPermission: { __typename?: 'GrantedPermission', id: string, displayString: string } };

export type RevokePermissionMutationVariables = Exact<{
  subjectType: SubjectType;
  subjectID: Scalars['ID']['input'];
  objectType: ObjectType;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  action: Action;
}>;


export type RevokePermissionMutation = { __typename?: 'Mutation', revokePermission: boolean };

export type ProviderFragmentFragment = { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean };

export type ListProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListProvidersQuery = { __typename?: 'Query', providers: { __typename?: 'ProviderPage', total: number, providers: Array<{ __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean }> } };

export type GetProviderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProviderQuery = { __typename?: 'Query', provider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type CreateProviderMutationVariables = Exact<{
  input: ProviderInput;
}>;


export type CreateProviderMutation = { __typename?: 'Mutation', createProvider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type UpdateProviderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: ProviderInput;
}>;


export type UpdateProviderMutation = { __typename?: 'Mutation', updateProvider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type LoadProviderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LoadProviderMutation = { __typename?: 'Mutation', loadProvider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type UnloadProviderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnloadProviderMutation = { __typename?: 'Mutation', unloadProvider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type ConfigrueProviderMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ConfigrueProviderMutation = { __typename?: 'Mutation', configureProvider: { __typename?: 'Provider', id: string, createdAt: any, updatedAt: any, displayName: string, configBytes: string, providerGitUrl: string, providerVersion: string, isLoaded: boolean } };

export type UserFragmentFragment = { __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string } };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPage', total: number, users: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string }> } };

export type MeHasPermissionQueryVariables = Exact<{
  objectType: ObjectType;
  objectID?: InputMaybe<Scalars['ID']['input']>;
  action: Action;
}>;


export type MeHasPermissionQuery = { __typename?: 'Query', meHasPermission: boolean };

export type SearchUsersQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers: { __typename?: 'UserPage', users: Array<{ __typename?: 'User', id: string, createdAt: any, updatedAt: any, username: string, email: string, firstName: string, lastName: string }> } };

export const BlueprintFragementFragmentDoc = gql`
    fragment BlueprintFragement on Blueprint {
  id
  createdAt
  updatedAt
  name
  description
  blueprintTemplate
  variableTypes
  provider {
    id
    displayName
    isLoaded
  }
  deployments {
    id
  }
}
    `;
export const DeploymentFragmentFragmentDoc = gql`
    fragment DeploymentFragment on Deployment {
  id
  createdAt
  updatedAt
  name
  templateVars
}
    `;
export const GroupFragmentFragmentDoc = gql`
    fragment GroupFragment on Group {
  id
  createdAt
  updatedAt
  name
}
    `;
export const PermissionFieldsFragmentDoc = gql`
    fragment PermissionFields on GrantedPermission {
  id
  createdAt
  updatedAt
  subjectType
  subjectId
  objectType
  objectId
  action
  displayString
}
    `;
export const ProviderFragmentFragmentDoc = gql`
    fragment ProviderFragment on Provider {
  id
  createdAt
  updatedAt
  displayName
  configBytes
  providerGitUrl
  providerVersion
  isLoaded
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  createdAt
  updatedAt
  username
  email
  firstName
  lastName
}
    `;
export const BlueprintsDocument = gql`
    query Blueprints {
  deployableBlueprints {
    blueprints {
      ...BlueprintFragement
    }
    total
  }
}
    ${BlueprintFragementFragmentDoc}`;

/**
 * __useBlueprintsQuery__
 *
 * To run a query within a React component, call `useBlueprintsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlueprintsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlueprintsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlueprintsQuery(baseOptions?: Apollo.QueryHookOptions<BlueprintsQuery, BlueprintsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlueprintsQuery, BlueprintsQueryVariables>(BlueprintsDocument, options);
      }
export function useBlueprintsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlueprintsQuery, BlueprintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlueprintsQuery, BlueprintsQueryVariables>(BlueprintsDocument, options);
        }
export function useBlueprintsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BlueprintsQuery, BlueprintsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BlueprintsQuery, BlueprintsQueryVariables>(BlueprintsDocument, options);
        }
export type BlueprintsQueryHookResult = ReturnType<typeof useBlueprintsQuery>;
export type BlueprintsLazyQueryHookResult = ReturnType<typeof useBlueprintsLazyQuery>;
export type BlueprintsSuspenseQueryHookResult = ReturnType<typeof useBlueprintsSuspenseQuery>;
export type BlueprintsQueryResult = Apollo.QueryResult<BlueprintsQuery, BlueprintsQueryVariables>;
export const GetBlueprintDocument = gql`
    query GetBlueprint($id: ID!) {
  blueprint(id: $id) {
    ...BlueprintFragement
  }
}
    ${BlueprintFragementFragmentDoc}`;

/**
 * __useGetBlueprintQuery__
 *
 * To run a query within a React component, call `useGetBlueprintQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlueprintQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlueprintQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlueprintQuery(baseOptions: Apollo.QueryHookOptions<GetBlueprintQuery, GetBlueprintQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlueprintQuery, GetBlueprintQueryVariables>(GetBlueprintDocument, options);
      }
export function useGetBlueprintLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlueprintQuery, GetBlueprintQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlueprintQuery, GetBlueprintQueryVariables>(GetBlueprintDocument, options);
        }
export function useGetBlueprintSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlueprintQuery, GetBlueprintQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlueprintQuery, GetBlueprintQueryVariables>(GetBlueprintDocument, options);
        }
export type GetBlueprintQueryHookResult = ReturnType<typeof useGetBlueprintQuery>;
export type GetBlueprintLazyQueryHookResult = ReturnType<typeof useGetBlueprintLazyQuery>;
export type GetBlueprintSuspenseQueryHookResult = ReturnType<typeof useGetBlueprintSuspenseQuery>;
export type GetBlueprintQueryResult = Apollo.QueryResult<GetBlueprintQuery, GetBlueprintQueryVariables>;
export const CreateBlueprintDocument = gql`
    mutation CreateBlueprint($input: BlueprintInput!) {
  createBlueprint(input: $input) {
    ...BlueprintFragement
  }
}
    ${BlueprintFragementFragmentDoc}`;
export type CreateBlueprintMutationFn = Apollo.MutationFunction<CreateBlueprintMutation, CreateBlueprintMutationVariables>;

/**
 * __useCreateBlueprintMutation__
 *
 * To run a mutation, you first call `useCreateBlueprintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlueprintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlueprintMutation, { data, loading, error }] = useCreateBlueprintMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlueprintMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlueprintMutation, CreateBlueprintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlueprintMutation, CreateBlueprintMutationVariables>(CreateBlueprintDocument, options);
      }
export type CreateBlueprintMutationHookResult = ReturnType<typeof useCreateBlueprintMutation>;
export type CreateBlueprintMutationResult = Apollo.MutationResult<CreateBlueprintMutation>;
export type CreateBlueprintMutationOptions = Apollo.BaseMutationOptions<CreateBlueprintMutation, CreateBlueprintMutationVariables>;
export const UpdateBlueprintDocument = gql`
    mutation UpdateBlueprint($id: ID!, $input: BlueprintInput!) {
  updateBlueprint(id: $id, input: $input) {
    ...BlueprintFragement
  }
}
    ${BlueprintFragementFragmentDoc}`;
export type UpdateBlueprintMutationFn = Apollo.MutationFunction<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>;

/**
 * __useUpdateBlueprintMutation__
 *
 * To run a mutation, you first call `useUpdateBlueprintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlueprintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlueprintMutation, { data, loading, error }] = useUpdateBlueprintMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlueprintMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>(UpdateBlueprintDocument, options);
      }
export type UpdateBlueprintMutationHookResult = ReturnType<typeof useUpdateBlueprintMutation>;
export type UpdateBlueprintMutationResult = Apollo.MutationResult<UpdateBlueprintMutation>;
export type UpdateBlueprintMutationOptions = Apollo.BaseMutationOptions<UpdateBlueprintMutation, UpdateBlueprintMutationVariables>;
export const DeployBlueprintDocument = gql`
    mutation DeployBlueprint($id: ID!, $templateVars: StrMap!) {
  deployBlueprint(id: $id, templateVars: $templateVars) {
    ...DeploymentFragment
  }
}
    ${DeploymentFragmentFragmentDoc}`;
export type DeployBlueprintMutationFn = Apollo.MutationFunction<DeployBlueprintMutation, DeployBlueprintMutationVariables>;

/**
 * __useDeployBlueprintMutation__
 *
 * To run a mutation, you first call `useDeployBlueprintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeployBlueprintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deployBlueprintMutation, { data, loading, error }] = useDeployBlueprintMutation({
 *   variables: {
 *      id: // value for 'id'
 *      templateVars: // value for 'templateVars'
 *   },
 * });
 */
export function useDeployBlueprintMutation(baseOptions?: Apollo.MutationHookOptions<DeployBlueprintMutation, DeployBlueprintMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeployBlueprintMutation, DeployBlueprintMutationVariables>(DeployBlueprintDocument, options);
      }
export type DeployBlueprintMutationHookResult = ReturnType<typeof useDeployBlueprintMutation>;
export type DeployBlueprintMutationResult = Apollo.MutationResult<DeployBlueprintMutation>;
export type DeployBlueprintMutationOptions = Apollo.BaseMutationOptions<DeployBlueprintMutation, DeployBlueprintMutationVariables>;
export const ListDeploymentsDocument = gql`
    query ListDeployments {
  deployments {
    deployments {
      ...DeploymentFragment
      blueprint {
        ...BlueprintFragement
      }
      requester {
        ...UserFragment
      }
    }
    total
  }
}
    ${DeploymentFragmentFragmentDoc}
${BlueprintFragementFragmentDoc}
${UserFragmentFragmentDoc}`;

/**
 * __useListDeploymentsQuery__
 *
 * To run a query within a React component, call `useListDeploymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDeploymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListDeploymentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListDeploymentsQuery(baseOptions?: Apollo.QueryHookOptions<ListDeploymentsQuery, ListDeploymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListDeploymentsQuery, ListDeploymentsQueryVariables>(ListDeploymentsDocument, options);
      }
export function useListDeploymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListDeploymentsQuery, ListDeploymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListDeploymentsQuery, ListDeploymentsQueryVariables>(ListDeploymentsDocument, options);
        }
export function useListDeploymentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListDeploymentsQuery, ListDeploymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListDeploymentsQuery, ListDeploymentsQueryVariables>(ListDeploymentsDocument, options);
        }
export type ListDeploymentsQueryHookResult = ReturnType<typeof useListDeploymentsQuery>;
export type ListDeploymentsLazyQueryHookResult = ReturnType<typeof useListDeploymentsLazyQuery>;
export type ListDeploymentsSuspenseQueryHookResult = ReturnType<typeof useListDeploymentsSuspenseQuery>;
export type ListDeploymentsQueryResult = Apollo.QueryResult<ListDeploymentsQuery, ListDeploymentsQueryVariables>;
export const GetDeploymentDocument = gql`
    query GetDeployment($id: ID!) {
  deployment(id: $id) {
    ...DeploymentFragment
    blueprint {
      ...BlueprintFragement
    }
    requester {
      ...UserFragment
    }
    deploymentNodes {
      id
      createdAt
      updatedAt
      state
      vars
      resource {
        id
        createdAt
        updatedAt
        key
        object
      }
      nextNodes {
        id
      }
    }
  }
}
    ${DeploymentFragmentFragmentDoc}
${BlueprintFragementFragmentDoc}
${UserFragmentFragmentDoc}`;

/**
 * __useGetDeploymentQuery__
 *
 * To run a query within a React component, call `useGetDeploymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeploymentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeploymentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDeploymentQuery(baseOptions: Apollo.QueryHookOptions<GetDeploymentQuery, GetDeploymentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeploymentQuery, GetDeploymentQueryVariables>(GetDeploymentDocument, options);
      }
export function useGetDeploymentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeploymentQuery, GetDeploymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeploymentQuery, GetDeploymentQueryVariables>(GetDeploymentDocument, options);
        }
export function useGetDeploymentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetDeploymentQuery, GetDeploymentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDeploymentQuery, GetDeploymentQueryVariables>(GetDeploymentDocument, options);
        }
export type GetDeploymentQueryHookResult = ReturnType<typeof useGetDeploymentQuery>;
export type GetDeploymentLazyQueryHookResult = ReturnType<typeof useGetDeploymentLazyQuery>;
export type GetDeploymentSuspenseQueryHookResult = ReturnType<typeof useGetDeploymentSuspenseQuery>;
export type GetDeploymentQueryResult = Apollo.QueryResult<GetDeploymentQuery, GetDeploymentQueryVariables>;
export const UpdateDeploymentDocument = gql`
    mutation UpdateDeployment($id: ID!, $input: DeploymentInput!) {
  updateDeployment(id: $id, input: $input) {
    ...DeploymentFragment
  }
}
    ${DeploymentFragmentFragmentDoc}`;
export type UpdateDeploymentMutationFn = Apollo.MutationFunction<UpdateDeploymentMutation, UpdateDeploymentMutationVariables>;

/**
 * __useUpdateDeploymentMutation__
 *
 * To run a mutation, you first call `useUpdateDeploymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeploymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeploymentMutation, { data, loading, error }] = useUpdateDeploymentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeploymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeploymentMutation, UpdateDeploymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeploymentMutation, UpdateDeploymentMutationVariables>(UpdateDeploymentDocument, options);
      }
export type UpdateDeploymentMutationHookResult = ReturnType<typeof useUpdateDeploymentMutation>;
export type UpdateDeploymentMutationResult = Apollo.MutationResult<UpdateDeploymentMutation>;
export type UpdateDeploymentMutationOptions = Apollo.BaseMutationOptions<UpdateDeploymentMutation, UpdateDeploymentMutationVariables>;
export const DestroyDeploymentDocument = gql`
    mutation DestroyDeployment($id: ID!) {
  destroyDeployment(id: $id) {
    ...DeploymentFragment
  }
}
    ${DeploymentFragmentFragmentDoc}`;
export type DestroyDeploymentMutationFn = Apollo.MutationFunction<DestroyDeploymentMutation, DestroyDeploymentMutationVariables>;

/**
 * __useDestroyDeploymentMutation__
 *
 * To run a mutation, you first call `useDestroyDeploymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroyDeploymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroyDeploymentMutation, { data, loading, error }] = useDestroyDeploymentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDestroyDeploymentMutation(baseOptions?: Apollo.MutationHookOptions<DestroyDeploymentMutation, DestroyDeploymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroyDeploymentMutation, DestroyDeploymentMutationVariables>(DestroyDeploymentDocument, options);
      }
export type DestroyDeploymentMutationHookResult = ReturnType<typeof useDestroyDeploymentMutation>;
export type DestroyDeploymentMutationResult = Apollo.MutationResult<DestroyDeploymentMutation>;
export type DestroyDeploymentMutationOptions = Apollo.BaseMutationOptions<DestroyDeploymentMutation, DestroyDeploymentMutationVariables>;
export const DeploymentNodePowerDocument = gql`
    mutation DeploymentNodePower($id: ID!, $state: PowerState!) {
  deploymentNodePower(id: $id, state: $state)
}
    `;
export type DeploymentNodePowerMutationFn = Apollo.MutationFunction<DeploymentNodePowerMutation, DeploymentNodePowerMutationVariables>;

/**
 * __useDeploymentNodePowerMutation__
 *
 * To run a mutation, you first call `useDeploymentNodePowerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeploymentNodePowerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deploymentNodePowerMutation, { data, loading, error }] = useDeploymentNodePowerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      state: // value for 'state'
 *   },
 * });
 */
export function useDeploymentNodePowerMutation(baseOptions?: Apollo.MutationHookOptions<DeploymentNodePowerMutation, DeploymentNodePowerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeploymentNodePowerMutation, DeploymentNodePowerMutationVariables>(DeploymentNodePowerDocument, options);
      }
export type DeploymentNodePowerMutationHookResult = ReturnType<typeof useDeploymentNodePowerMutation>;
export type DeploymentNodePowerMutationResult = Apollo.MutationResult<DeploymentNodePowerMutation>;
export type DeploymentNodePowerMutationOptions = Apollo.BaseMutationOptions<DeploymentNodePowerMutation, DeploymentNodePowerMutationVariables>;
export const ListGroupsDocument = gql`
    query ListGroups {
  groups {
    groups {
      ...GroupFragment
    }
    total
  }
}
    ${GroupFragmentFragmentDoc}`;

/**
 * __useListGroupsQuery__
 *
 * To run a query within a React component, call `useListGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGroupsQuery(baseOptions?: Apollo.QueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
      }
export function useListGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
        }
export function useListGroupsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListGroupsQuery, ListGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListGroupsQuery, ListGroupsQueryVariables>(ListGroupsDocument, options);
        }
export type ListGroupsQueryHookResult = ReturnType<typeof useListGroupsQuery>;
export type ListGroupsLazyQueryHookResult = ReturnType<typeof useListGroupsLazyQuery>;
export type ListGroupsSuspenseQueryHookResult = ReturnType<typeof useListGroupsSuspenseQuery>;
export type ListGroupsQueryResult = Apollo.QueryResult<ListGroupsQuery, ListGroupsQueryVariables>;
export const SearchGroupsDocument = gql`
    query SearchGroups($search: String!) {
  searchGroups(search: $search, count: 5) {
    groups {
      ...GroupFragment
    }
  }
}
    ${GroupFragmentFragmentDoc}`;

/**
 * __useSearchGroupsQuery__
 *
 * To run a query within a React component, call `useSearchGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchGroupsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchGroupsQuery(baseOptions: Apollo.QueryHookOptions<SearchGroupsQuery, SearchGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchGroupsQuery, SearchGroupsQueryVariables>(SearchGroupsDocument, options);
      }
export function useSearchGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchGroupsQuery, SearchGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchGroupsQuery, SearchGroupsQueryVariables>(SearchGroupsDocument, options);
        }
export function useSearchGroupsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchGroupsQuery, SearchGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchGroupsQuery, SearchGroupsQueryVariables>(SearchGroupsDocument, options);
        }
export type SearchGroupsQueryHookResult = ReturnType<typeof useSearchGroupsQuery>;
export type SearchGroupsLazyQueryHookResult = ReturnType<typeof useSearchGroupsLazyQuery>;
export type SearchGroupsSuspenseQueryHookResult = ReturnType<typeof useSearchGroupsSuspenseQuery>;
export type SearchGroupsQueryResult = Apollo.QueryResult<SearchGroupsQuery, SearchGroupsQueryVariables>;
export const ListPermissionsDocument = gql`
    query ListPermissions($count: Int! = 10, $offset: Int) {
  permissions(count: $count, offset: $offset) {
    permissions {
      ...PermissionFields
    }
    total
  }
}
    ${PermissionFieldsFragmentDoc}`;

/**
 * __useListPermissionsQuery__
 *
 * To run a query within a React component, call `useListPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPermissionsQuery({
 *   variables: {
 *      count: // value for 'count'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useListPermissionsQuery(baseOptions?: Apollo.QueryHookOptions<ListPermissionsQuery, ListPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPermissionsQuery, ListPermissionsQueryVariables>(ListPermissionsDocument, options);
      }
export function useListPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPermissionsQuery, ListPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPermissionsQuery, ListPermissionsQueryVariables>(ListPermissionsDocument, options);
        }
export function useListPermissionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListPermissionsQuery, ListPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPermissionsQuery, ListPermissionsQueryVariables>(ListPermissionsDocument, options);
        }
export type ListPermissionsQueryHookResult = ReturnType<typeof useListPermissionsQuery>;
export type ListPermissionsLazyQueryHookResult = ReturnType<typeof useListPermissionsLazyQuery>;
export type ListPermissionsSuspenseQueryHookResult = ReturnType<typeof useListPermissionsSuspenseQuery>;
export type ListPermissionsQueryResult = Apollo.QueryResult<ListPermissionsQuery, ListPermissionsQueryVariables>;
export const NavPermissionsDocument = gql`
    query NavPermissions {
  listBlueprints: meHasPermission(
    objectType: blueprint
    objectID: null
    action: blueprint_list
  )
  listProviders: meHasPermission(
    objectType: provider
    objectID: null
    action: provider_list
  )
  listPermissions: meHasPermission(
    objectType: permission
    objectID: null
    action: permission_list
  )
}
    `;

/**
 * __useNavPermissionsQuery__
 *
 * To run a query within a React component, call `useNavPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavPermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavPermissionsQuery(baseOptions?: Apollo.QueryHookOptions<NavPermissionsQuery, NavPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavPermissionsQuery, NavPermissionsQueryVariables>(NavPermissionsDocument, options);
      }
export function useNavPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavPermissionsQuery, NavPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavPermissionsQuery, NavPermissionsQueryVariables>(NavPermissionsDocument, options);
        }
export function useNavPermissionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<NavPermissionsQuery, NavPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<NavPermissionsQuery, NavPermissionsQueryVariables>(NavPermissionsDocument, options);
        }
export type NavPermissionsQueryHookResult = ReturnType<typeof useNavPermissionsQuery>;
export type NavPermissionsLazyQueryHookResult = ReturnType<typeof useNavPermissionsLazyQuery>;
export type NavPermissionsSuspenseQueryHookResult = ReturnType<typeof useNavPermissionsSuspenseQuery>;
export type NavPermissionsQueryResult = Apollo.QueryResult<NavPermissionsQuery, NavPermissionsQueryVariables>;
export const GrantPermissionDocument = gql`
    mutation GrantPermission($subjectType: SubjectType!, $subjectID: ID!, $objectType: ObjectType!, $objectID: ID, $action: Action!) {
  grantPermission(
    subjectType: $subjectType
    subjectID: $subjectID
    objectType: $objectType
    objectID: $objectID
    action: $action
  ) {
    id
    displayString
  }
}
    `;
export type GrantPermissionMutationFn = Apollo.MutationFunction<GrantPermissionMutation, GrantPermissionMutationVariables>;

/**
 * __useGrantPermissionMutation__
 *
 * To run a mutation, you first call `useGrantPermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGrantPermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [grantPermissionMutation, { data, loading, error }] = useGrantPermissionMutation({
 *   variables: {
 *      subjectType: // value for 'subjectType'
 *      subjectID: // value for 'subjectID'
 *      objectType: // value for 'objectType'
 *      objectID: // value for 'objectID'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useGrantPermissionMutation(baseOptions?: Apollo.MutationHookOptions<GrantPermissionMutation, GrantPermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GrantPermissionMutation, GrantPermissionMutationVariables>(GrantPermissionDocument, options);
      }
export type GrantPermissionMutationHookResult = ReturnType<typeof useGrantPermissionMutation>;
export type GrantPermissionMutationResult = Apollo.MutationResult<GrantPermissionMutation>;
export type GrantPermissionMutationOptions = Apollo.BaseMutationOptions<GrantPermissionMutation, GrantPermissionMutationVariables>;
export const RevokePermissionDocument = gql`
    mutation RevokePermission($subjectType: SubjectType!, $subjectID: ID!, $objectType: ObjectType!, $objectID: ID, $action: Action!) {
  revokePermission(
    subjectType: $subjectType
    subjectID: $subjectID
    objectType: $objectType
    objectID: $objectID
    action: $action
  )
}
    `;
export type RevokePermissionMutationFn = Apollo.MutationFunction<RevokePermissionMutation, RevokePermissionMutationVariables>;

/**
 * __useRevokePermissionMutation__
 *
 * To run a mutation, you first call `useRevokePermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokePermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokePermissionMutation, { data, loading, error }] = useRevokePermissionMutation({
 *   variables: {
 *      subjectType: // value for 'subjectType'
 *      subjectID: // value for 'subjectID'
 *      objectType: // value for 'objectType'
 *      objectID: // value for 'objectID'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useRevokePermissionMutation(baseOptions?: Apollo.MutationHookOptions<RevokePermissionMutation, RevokePermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevokePermissionMutation, RevokePermissionMutationVariables>(RevokePermissionDocument, options);
      }
export type RevokePermissionMutationHookResult = ReturnType<typeof useRevokePermissionMutation>;
export type RevokePermissionMutationResult = Apollo.MutationResult<RevokePermissionMutation>;
export type RevokePermissionMutationOptions = Apollo.BaseMutationOptions<RevokePermissionMutation, RevokePermissionMutationVariables>;
export const ListProvidersDocument = gql`
    query ListProviders {
  providers {
    providers {
      ...ProviderFragment
    }
    total
  }
}
    ${ProviderFragmentFragmentDoc}`;

/**
 * __useListProvidersQuery__
 *
 * To run a query within a React component, call `useListProvidersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProvidersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProvidersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListProvidersQuery(baseOptions?: Apollo.QueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
      }
export function useListProvidersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
        }
export function useListProvidersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListProvidersQuery, ListProvidersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProvidersQuery, ListProvidersQueryVariables>(ListProvidersDocument, options);
        }
export type ListProvidersQueryHookResult = ReturnType<typeof useListProvidersQuery>;
export type ListProvidersLazyQueryHookResult = ReturnType<typeof useListProvidersLazyQuery>;
export type ListProvidersSuspenseQueryHookResult = ReturnType<typeof useListProvidersSuspenseQuery>;
export type ListProvidersQueryResult = Apollo.QueryResult<ListProvidersQuery, ListProvidersQueryVariables>;
export const GetProviderDocument = gql`
    query GetProvider($id: ID!) {
  provider(id: $id) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;

/**
 * __useGetProviderQuery__
 *
 * To run a query within a React component, call `useGetProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProviderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProviderQuery(baseOptions: Apollo.QueryHookOptions<GetProviderQuery, GetProviderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
      }
export function useGetProviderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProviderQuery, GetProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
        }
export function useGetProviderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProviderQuery, GetProviderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProviderQuery, GetProviderQueryVariables>(GetProviderDocument, options);
        }
export type GetProviderQueryHookResult = ReturnType<typeof useGetProviderQuery>;
export type GetProviderLazyQueryHookResult = ReturnType<typeof useGetProviderLazyQuery>;
export type GetProviderSuspenseQueryHookResult = ReturnType<typeof useGetProviderSuspenseQuery>;
export type GetProviderQueryResult = Apollo.QueryResult<GetProviderQuery, GetProviderQueryVariables>;
export const CreateProviderDocument = gql`
    mutation CreateProvider($input: ProviderInput!) {
  createProvider(input: $input) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type CreateProviderMutationFn = Apollo.MutationFunction<CreateProviderMutation, CreateProviderMutationVariables>;

/**
 * __useCreateProviderMutation__
 *
 * To run a mutation, you first call `useCreateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProviderMutation, { data, loading, error }] = useCreateProviderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProviderMutation(baseOptions?: Apollo.MutationHookOptions<CreateProviderMutation, CreateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProviderMutation, CreateProviderMutationVariables>(CreateProviderDocument, options);
      }
export type CreateProviderMutationHookResult = ReturnType<typeof useCreateProviderMutation>;
export type CreateProviderMutationResult = Apollo.MutationResult<CreateProviderMutation>;
export type CreateProviderMutationOptions = Apollo.BaseMutationOptions<CreateProviderMutation, CreateProviderMutationVariables>;
export const UpdateProviderDocument = gql`
    mutation UpdateProvider($id: ID!, $input: ProviderInput!) {
  updateProvider(id: $id, input: $input) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type UpdateProviderMutationFn = Apollo.MutationFunction<UpdateProviderMutation, UpdateProviderMutationVariables>;

/**
 * __useUpdateProviderMutation__
 *
 * To run a mutation, you first call `useUpdateProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProviderMutation, { data, loading, error }] = useUpdateProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProviderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProviderMutation, UpdateProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProviderMutation, UpdateProviderMutationVariables>(UpdateProviderDocument, options);
      }
export type UpdateProviderMutationHookResult = ReturnType<typeof useUpdateProviderMutation>;
export type UpdateProviderMutationResult = Apollo.MutationResult<UpdateProviderMutation>;
export type UpdateProviderMutationOptions = Apollo.BaseMutationOptions<UpdateProviderMutation, UpdateProviderMutationVariables>;
export const LoadProviderDocument = gql`
    mutation LoadProvider($id: ID!) {
  loadProvider(id: $id) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type LoadProviderMutationFn = Apollo.MutationFunction<LoadProviderMutation, LoadProviderMutationVariables>;

/**
 * __useLoadProviderMutation__
 *
 * To run a mutation, you first call `useLoadProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoadProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loadProviderMutation, { data, loading, error }] = useLoadProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoadProviderMutation(baseOptions?: Apollo.MutationHookOptions<LoadProviderMutation, LoadProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoadProviderMutation, LoadProviderMutationVariables>(LoadProviderDocument, options);
      }
export type LoadProviderMutationHookResult = ReturnType<typeof useLoadProviderMutation>;
export type LoadProviderMutationResult = Apollo.MutationResult<LoadProviderMutation>;
export type LoadProviderMutationOptions = Apollo.BaseMutationOptions<LoadProviderMutation, LoadProviderMutationVariables>;
export const UnloadProviderDocument = gql`
    mutation UnloadProvider($id: ID!) {
  unloadProvider(id: $id) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type UnloadProviderMutationFn = Apollo.MutationFunction<UnloadProviderMutation, UnloadProviderMutationVariables>;

/**
 * __useUnloadProviderMutation__
 *
 * To run a mutation, you first call `useUnloadProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnloadProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unloadProviderMutation, { data, loading, error }] = useUnloadProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnloadProviderMutation(baseOptions?: Apollo.MutationHookOptions<UnloadProviderMutation, UnloadProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnloadProviderMutation, UnloadProviderMutationVariables>(UnloadProviderDocument, options);
      }
export type UnloadProviderMutationHookResult = ReturnType<typeof useUnloadProviderMutation>;
export type UnloadProviderMutationResult = Apollo.MutationResult<UnloadProviderMutation>;
export type UnloadProviderMutationOptions = Apollo.BaseMutationOptions<UnloadProviderMutation, UnloadProviderMutationVariables>;
export const ConfigrueProviderDocument = gql`
    mutation ConfigrueProvider($id: ID!) {
  configureProvider(id: $id) {
    ...ProviderFragment
  }
}
    ${ProviderFragmentFragmentDoc}`;
export type ConfigrueProviderMutationFn = Apollo.MutationFunction<ConfigrueProviderMutation, ConfigrueProviderMutationVariables>;

/**
 * __useConfigrueProviderMutation__
 *
 * To run a mutation, you first call `useConfigrueProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigrueProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configrueProviderMutation, { data, loading, error }] = useConfigrueProviderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useConfigrueProviderMutation(baseOptions?: Apollo.MutationHookOptions<ConfigrueProviderMutation, ConfigrueProviderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigrueProviderMutation, ConfigrueProviderMutationVariables>(ConfigrueProviderDocument, options);
      }
export type ConfigrueProviderMutationHookResult = ReturnType<typeof useConfigrueProviderMutation>;
export type ConfigrueProviderMutationResult = Apollo.MutationResult<ConfigrueProviderMutation>;
export type ConfigrueProviderMutationOptions = Apollo.BaseMutationOptions<ConfigrueProviderMutation, ConfigrueProviderMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers {
  users {
    users {
      ...UserFragment
    }
    total
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export function useListUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersSuspenseQueryHookResult = ReturnType<typeof useListUsersSuspenseQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const MeHasPermissionDocument = gql`
    query MeHasPermission($objectType: ObjectType!, $objectID: ID, $action: Action!) {
  meHasPermission(objectType: $objectType, objectID: $objectID, action: $action)
}
    `;

/**
 * __useMeHasPermissionQuery__
 *
 * To run a query within a React component, call `useMeHasPermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeHasPermissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeHasPermissionQuery({
 *   variables: {
 *      objectType: // value for 'objectType'
 *      objectID: // value for 'objectID'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useMeHasPermissionQuery(baseOptions: Apollo.QueryHookOptions<MeHasPermissionQuery, MeHasPermissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeHasPermissionQuery, MeHasPermissionQueryVariables>(MeHasPermissionDocument, options);
      }
export function useMeHasPermissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeHasPermissionQuery, MeHasPermissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeHasPermissionQuery, MeHasPermissionQueryVariables>(MeHasPermissionDocument, options);
        }
export function useMeHasPermissionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeHasPermissionQuery, MeHasPermissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeHasPermissionQuery, MeHasPermissionQueryVariables>(MeHasPermissionDocument, options);
        }
export type MeHasPermissionQueryHookResult = ReturnType<typeof useMeHasPermissionQuery>;
export type MeHasPermissionLazyQueryHookResult = ReturnType<typeof useMeHasPermissionLazyQuery>;
export type MeHasPermissionSuspenseQueryHookResult = ReturnType<typeof useMeHasPermissionSuspenseQuery>;
export type MeHasPermissionQueryResult = Apollo.QueryResult<MeHasPermissionQuery, MeHasPermissionQueryVariables>;
export const SearchUsersDocument = gql`
    query SearchUsers($search: String!) {
  searchUsers(search: $search, count: 5) {
    users {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useSearchUsersQuery__
 *
 * To run a query within a React component, call `useSearchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchUsersQuery(baseOptions: Apollo.QueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
      }
export function useSearchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export function useSearchUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchUsersQuery, SearchUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchUsersQuery, SearchUsersQueryVariables>(SearchUsersDocument, options);
        }
export type SearchUsersQueryHookResult = ReturnType<typeof useSearchUsersQuery>;
export type SearchUsersLazyQueryHookResult = ReturnType<typeof useSearchUsersLazyQuery>;
export type SearchUsersSuspenseQueryHookResult = ReturnType<typeof useSearchUsersSuspenseQuery>;
export type SearchUsersQueryResult = Apollo.QueryResult<SearchUsersQuery, SearchUsersQueryVariables>;