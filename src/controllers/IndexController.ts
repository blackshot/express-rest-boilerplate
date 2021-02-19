import {Controller, Get, QueryParam, Req, Res} from 'routing-controllers';
import {Request, Response} from 'express';
import { Service } from 'typedi';

@Service()
@Controller("/")
export class IndexController{
    @Get()
    index(@Req() req: Request, @Res() res: Response): string{
        return "Hola desde index";
    }
}