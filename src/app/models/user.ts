export class User {
    id: number = null;
    email: string = null;
    first_name: string = null;
    last_name: string = null;
    avatar: string = null;

    fromObj(obj){
        this.id = obj.id === null || obj.id === undefined ? null : obj.id;
        this.email = obj.email === null || obj.email === undefined ? null : obj.email;
        this.first_name = obj.first_name === null || obj.first_name === undefined ? null : obj.first_name;
        this.last_name = obj.last_name === null || obj.last_name === undefined ? null : obj.last_name;
        this.avatar = obj.avatar === null || obj.avatar === undefined ? null : obj.avatar;
    }
}