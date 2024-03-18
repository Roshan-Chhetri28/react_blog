import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                this.login({email, password});
            }
            else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    }
    async login({email, password}){
        try{
            const userLoggedIn = await this.account.createEmailPasswordSession(email, password);
            
        }
        catch(error){
            throw error;
        }
    }
    async getCurentUser(){
        try {
            const user = await this.account.get();
            if(user){
                return user;
            }
            else{
                return null;
            }
        }catch (error) {
            throw error;
        }

        
    }
    async logut(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            throw error;
        }
    }
}

const authServices = new AuthService();

export default authServices

