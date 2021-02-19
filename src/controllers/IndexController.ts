import {Authorized, Controller, Get, QueryParam, Req, Res} from 'routing-controllers';
import {Request, Response} from 'express';
import { Service } from 'typedi';

@Service()
@Controller("/")
export class IndexController{
    @Get()
    index(@Req() req: Request, @Res() res: Response): string{
        return "Hola desde index";
    }

    @Authorized(["NO"])
    @Get("ruta-super-secreta")
    superSecretRoute(@Req() req: Request, @Res() res: Response): string{
        return "Si lees esto, somos novios :$";
    }

    @Authorized(["SI"])
    @Get("ruta-no-tan-secreta")
    notMuchSecret(@Req() req: Request, @Res() res: Response): string{
        return '<img src="https://pics.me.me/thumb_persuadable-bouncer-image-gallery-list-view-know-your-meme-52152966.png"/>';
    }
}