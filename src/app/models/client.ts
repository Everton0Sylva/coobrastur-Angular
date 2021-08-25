export class Client {
    id: number = null;
    job: string = null;
    name: string = null;

    fromObj(obj) {
        this.id = obj.id === null || obj.id === undefined ? null : obj.id;
        this.job = obj.job === null || obj.job === undefined ? null : obj.job;
        this.name = obj.name === null || obj.name === undefined ? null : obj.name;
    }
}