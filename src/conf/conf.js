const conf = {
  appWriteUrl: String(import.meta.env.VITE_APPWIRTE_URL),
  appWriteProjectId: String(import.meta.env.VITE_APPWIRTE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWIRTE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWIRTE_COLLECTION_ID),
  appWriteBucketId: String(import.meta.env.VITE_APPWIRTE_BUCKET_ID),
};

export default conf
