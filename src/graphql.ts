
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    login(login: string, password: string): Auth | Promise<Auth>;
    courses(): Course[] | Promise<Course[]>;
    course(id: string): Course | Promise<Course>;
    navigations(): Navigation[] | Promise<Navigation[]>;
    navigation(id: string): Navigation | Promise<Navigation>;
    setting(): Setting | Promise<Setting>;
    users(): User[] | Promise<User[]>;
    user(id: string): User | Promise<User>;
    userByLogin(login: string): User | Promise<User>;
}

export interface Auth {
    access_token: string;
}

export interface IMutation {
    deleteCourseById(id: string): Course | Promise<Course>;
    createCourse(name: string, price: number, description?: string): Course | Promise<Course>;
    rpcCreateOrUpdateSetting(ip: string, port: number): Setting | Promise<Setting>;
    deleteUserById(id: string): User | Promise<User>;
    createUser(login: string, password: string): User | Promise<User>;
}

export interface Course {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface Navigation {
    id: number;
    name: string;
    url?: string;
    icon?: string;
}

export interface Setting {
    id: number;
    ip: string;
    port: number;
}

export interface User {
    id: number;
    login: string;
    password?: string;
}
