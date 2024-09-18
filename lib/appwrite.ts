import { Account, Client, ID, Avatars, Databases } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.bernard.aora",
  projectId: "66ea7ba7002563e67699",
  databaseId: "66ea805700018b9726bd",
  userCollectionId: "66ea80ad0024517b3295",
  videoCollectionId: "66ea8104002362910095",
  storageId: "66ea8548001087892254",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

// Register User
export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    // Create user account
    const newAccount = await account.create(
      ID.unique(), // Ensure ID.unique() generates a valid userId
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error("An error occurred while creating your account");
    }

    // Generate avatar URL
    const avatarUrl = avatars.getInitials(username);

    // Sign in the user
    await signIn(email, password);

    // Check if the session is valid before proceeding
    const session = await account.getSession("current");

    if (!session) {
      throw new Error("User is not authorized to perform this action.");
    }

    // Create user document in the database
    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(), // Again ensure valid userId here
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    if (!newUser) {
      throw new Error("An error occurred while creating your account");
    } else {
      return newUser;
    }
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createSession(email, password);

    if (!session) {
      throw new Error("An error occurred while signing in");
    } else {
      return session;
    }
  } catch (error) {
    console.error(error);
  }
};
