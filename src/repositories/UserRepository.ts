import { Service } from "typedi";

@Service()
export default class UserRepository {
    usersFakeDB: string[] = [
        "SirHector", "Marcelo", "Roberto", "XxThuBellakitaxX", "TestUserBKN"];
    
    getAll(): string[]{
        return this.usersFakeDB;
    }
    exists(uid:string): boolean{
        return this.usersFakeDB.indexOf(uid) !== -1;
    }
    
}