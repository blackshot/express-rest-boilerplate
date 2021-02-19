import {JsonController, Get, Req, Res} from 'routing-controllers'
import { Request, Response } from 'express';
import { Service } from 'typedi';
import UserService from '@services/UserServiceImpl';

@Service()
@JsonController("/users")
export class UserController{
    constructor(private uService : UserService) {}

    @Get()
    getAll(@Req() req : Request, @Res() res : Response): Array<string>{
        return this.uService.all();
    }
}