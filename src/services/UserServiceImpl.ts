import { Service } from "typedi";
import UserRepository from '@repos/UserRepository';

@Service()
export default class UserServiceImpl {
    constructor(private repo : UserRepository){}

    all(): string[] {
        return this.repo.getAll();
    }
    exists(uid: string): boolean {
        return this.repo.exists(uid);
    }

}