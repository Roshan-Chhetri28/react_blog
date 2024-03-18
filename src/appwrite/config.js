import { Client, Account, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Services{
    client = new Client()
    account
    databases
    bucket
    constuctor(){
        this.client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }
    async createPost({title, slug, Content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug, {
                title,
                Content,
                featuredImage, 
                status,
                userId
            })
        } catch (error) {
            throw error;
            
        }
    }
    async updatePost({slug, title, Content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug,{
                title,
                Content,
                featuredImage,
                status
            })
        } catch (error) {
            throw error
            
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appWriteDatabaseId, conf.appWriteCollectionId, slug
            )
            return true
        }
        catch(error){
            throw error;
            return false;
        }
    }
    async getpost(slug){
        try {
            return await this.databases.getDocument(conf.appWriteDatabaseId, conf.appWriteCollectionId, slug)
            
        } catch (error) {
            throw error
        }
    }
    async getposts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appWriteDatabaseId, conf.appWriteCollectionId, queries);
        } catch (error) {
            throw error;
        }
    }
}
const service = new Services();
export default service