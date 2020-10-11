import express, { Response, Request, NextFunction } from 'express';

const router = express.Router();

router.route('/nutrition')
    .get((req: Request, res: Response, next: NextFunction) => {
        res.send('Hi there!')
    });


export { router as nutritionRoutes }

