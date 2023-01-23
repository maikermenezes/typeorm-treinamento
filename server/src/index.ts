// import { connection } from './database/connection';
import app from './app';
import 'dotenv/config';
import 'dotenv/config';
import 'reflect-metadata';
import './database';


app.listen(process.env.PORT || 3001, () => {
    console.log('📦 Server running');
});