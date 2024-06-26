/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOpenAIChat = /* GraphQL */ `mutation CreateOpenAIChat(
  $input: CreateOpenAIChatInput!
  $condition: ModelOpenAIChatConditionInput
) {
  createOpenAIChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOpenAIChatMutationVariables,
  APITypes.CreateOpenAIChatMutation
>;
export const updateOpenAIChat = /* GraphQL */ `mutation UpdateOpenAIChat(
  $input: UpdateOpenAIChatInput!
  $condition: ModelOpenAIChatConditionInput
) {
  updateOpenAIChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOpenAIChatMutationVariables,
  APITypes.UpdateOpenAIChatMutation
>;
export const deleteOpenAIChat = /* GraphQL */ `mutation DeleteOpenAIChat(
  $input: DeleteOpenAIChatInput!
  $condition: ModelOpenAIChatConditionInput
) {
  deleteOpenAIChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOpenAIChatMutationVariables,
  APITypes.DeleteOpenAIChatMutation
>;
export const createFeedback = /* GraphQL */ `mutation CreateFeedback(
  $input: CreateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  createFeedback(input: $input, condition: $condition) {
    id
    like
    comment
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackMutationVariables,
  APITypes.CreateFeedbackMutation
>;
export const updateFeedback = /* GraphQL */ `mutation UpdateFeedback(
  $input: UpdateFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  updateFeedback(input: $input, condition: $condition) {
    id
    like
    comment
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackMutationVariables,
  APITypes.UpdateFeedbackMutation
>;
export const deleteFeedback = /* GraphQL */ `mutation DeleteFeedback(
  $input: DeleteFeedbackInput!
  $condition: ModelFeedbackConditionInput
) {
  deleteFeedback(input: $input, condition: $condition) {
    id
    like
    comment
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackMutationVariables,
  APITypes.DeleteFeedbackMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    personalityTest
    background
    phone
    optInText
    completedIcebreakers
    userSummary
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    personalityTest
    background
    phone
    optInText
    completedIcebreakers
    userSummary
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
    id
    userId
    name
    personalityTest
    background
    phone
    optInText
    completedIcebreakers
    userSummary
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createIcebreakerChat = /* GraphQL */ `mutation CreateIcebreakerChat(
  $input: CreateIcebreakerChatInput!
  $condition: ModelIcebreakerChatConditionInput
) {
  createIcebreakerChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIcebreakerChatMutationVariables,
  APITypes.CreateIcebreakerChatMutation
>;
export const updateIcebreakerChat = /* GraphQL */ `mutation UpdateIcebreakerChat(
  $input: UpdateIcebreakerChatInput!
  $condition: ModelIcebreakerChatConditionInput
) {
  updateIcebreakerChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIcebreakerChatMutationVariables,
  APITypes.UpdateIcebreakerChatMutation
>;
export const deleteIcebreakerChat = /* GraphQL */ `mutation DeleteIcebreakerChat(
  $input: DeleteIcebreakerChatInput!
  $condition: ModelIcebreakerChatConditionInput
) {
  deleteIcebreakerChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIcebreakerChatMutationVariables,
  APITypes.DeleteIcebreakerChatMutation
>;
export const createRoleChat = /* GraphQL */ `mutation CreateRoleChat(
  $input: CreateRoleChatInput!
  $condition: ModelRoleChatConditionInput
) {
  createRoleChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoleChatMutationVariables,
  APITypes.CreateRoleChatMutation
>;
export const updateRoleChat = /* GraphQL */ `mutation UpdateRoleChat(
  $input: UpdateRoleChatInput!
  $condition: ModelRoleChatConditionInput
) {
  updateRoleChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoleChatMutationVariables,
  APITypes.UpdateRoleChatMutation
>;
export const deleteRoleChat = /* GraphQL */ `mutation DeleteRoleChat(
  $input: DeleteRoleChatInput!
  $condition: ModelRoleChatConditionInput
) {
  deleteRoleChat(input: $input, condition: $condition) {
    id
    messages {
      role
      content
      __typename
    }
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoleChatMutationVariables,
  APITypes.DeleteRoleChatMutation
>;
export const createRoleSummaary = /* GraphQL */ `mutation CreateRoleSummaary(
  $input: CreateRoleSummaaryInput!
  $condition: ModelRoleSummaaryConditionInput
) {
  createRoleSummaary(input: $input, condition: $condition) {
    id
    summary
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoleSummaaryMutationVariables,
  APITypes.CreateRoleSummaaryMutation
>;
export const updateRoleSummaary = /* GraphQL */ `mutation UpdateRoleSummaary(
  $input: UpdateRoleSummaaryInput!
  $condition: ModelRoleSummaaryConditionInput
) {
  updateRoleSummaary(input: $input, condition: $condition) {
    id
    summary
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoleSummaaryMutationVariables,
  APITypes.UpdateRoleSummaaryMutation
>;
export const deleteRoleSummaary = /* GraphQL */ `mutation DeleteRoleSummaary(
  $input: DeleteRoleSummaaryInput!
  $condition: ModelRoleSummaaryConditionInput
) {
  deleteRoleSummaary(input: $input, condition: $condition) {
    id
    summary
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoleSummaaryMutationVariables,
  APITypes.DeleteRoleSummaaryMutation
>;
export const createOpenAIChatFunc = /* GraphQL */ `mutation CreateOpenAIChatFunc($input: CreateOpenAIChatFuncInput) {
  createOpenAIChatFunc(input: $input) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOpenAIChatFuncMutationVariables,
  APITypes.CreateOpenAIChatFuncMutation
>;
export const chatIcebreakerFunc = /* GraphQL */ `mutation ChatIcebreakerFunc($input: ChatIcebreakerFuncInput) {
  chatIcebreakerFunc(input: $input) {
    id
    messages {
      role
      content
      __typename
    }
    user
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ChatIcebreakerFuncMutationVariables,
  APITypes.ChatIcebreakerFuncMutation
>;
export const generateUserSummaryFunc = /* GraphQL */ `mutation GenerateUserSummaryFunc($input: GenerateUserSummaryFuncInput) {
  generateUserSummaryFunc(input: $input)
}
` as GeneratedMutation<
  APITypes.GenerateUserSummaryFuncMutationVariables,
  APITypes.GenerateUserSummaryFuncMutation
>;
export const chatRoleplayFunc = /* GraphQL */ `mutation ChatRoleplayFunc($input: RoleplayChatFuncInput) {
  chatRoleplayFunc(input: $input) {
    id
    messages {
      role
      content
      __typename
    }
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ChatRoleplayFuncMutationVariables,
  APITypes.ChatRoleplayFuncMutation
>;
export const generateRoleplaySummaryFunc = /* GraphQL */ `mutation GenerateRoleplaySummaryFunc($input: GenerateRoleplaySummaryFuncInput) {
  generateRoleplaySummaryFunc(input: $input) {
    id
    summary
    user
    roleplayId
    scenario
    difficulty
    scenarioPrompt
    owner
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.GenerateRoleplaySummaryFuncMutationVariables,
  APITypes.GenerateRoleplaySummaryFuncMutation
>;
