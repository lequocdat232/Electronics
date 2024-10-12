import express, { Express, NextFunction, Request, Response } from 'express';
import path from 'path';
import categoriesRouter from './routes/v1/categories.route'
import brandsRouter from './routes/v1/brands.route'
import StaffsRouter from './routes/v1/staffs.route'
import authRouter from './routes/v1/auth.route'
import uploadRouter from './routes/v1/upload.route'
import { sendJsonErrors } from './helpers/responseHandler';
import createError from 'http-errors';
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors())
// app.use(express.urlencoded({ extended: false }));

// app.get('/', (req: Request, res: Response) => {
//   res.status(200).json({message: 'Express + TypeScript Server'});
// });

app.use(express.static(path.join(__dirname,'../public')))

app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/brands', brandsRouter)
app.use('/api/v1/staffs', StaffsRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/upload', uploadRouter)

// HANDLER ERROR
// Phải nằm sau phần khai báo routes
// Lỗi 404, những routes không tồn tại
app.use((req: Request, res: Response, next: NextFunction)=>{
  // Next chuyển tiếp
  next(createError(404));
})

// Báo lỗi dạng json
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const statusCode = err.status || 500;
  // res.status(statusCode).json({ statusCode: statusCode, message: err.message });
  sendJsonErrors(res, err)
});


export default app