// https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/#general-configuration
const awsExports = {
  aws_cognito_region: "eu-central-1", // (required) - Region where Amazon Cognito project was created
  aws_user_pools_id: "eu-central-1_XXXXXXXXX", // (optional) -  Amazon Cognito User Pool ID
  aws_user_pools_web_client_id: "dddddddddddddddddddddddddd", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  aws_cognito_identity_pool_id:
    "eu-central-1:aaaaaaaaa-cccc-dddd-eeee-bbbbbbbb", // (optional) - Amazon Cognito Identity Pool ID
  aws_mandatory_sign_in: "enable", // (optional) - Users are not allowed to get the aws credentials unless they are signed in

  aws_appsync_region: "eu-central-1", // (optional) - AWS AppSync region
  aws_appsync_graphqlEndpoint:
    "https://nnnnnnnnnnnnnnnnnnnnnnnnnn.appsync-api.eu-central-1.amazonaws.com/graphql", // (optional) - AWS AppSync endpoint
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS", // (optional) - Primary AWS AppSync authentication type
};

export default awsExports;
