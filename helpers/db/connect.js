import { MongoClient } from 'mongodb';

export class connect {
    static instanceConnect;
    db;
    user;
    port;
    cluster;
    #url;
    #host;
    #pass;
    #dbName;

    // mongodb://mongo:nLwIuFObDkYKTCxxFNuQJanKJanylkKq@monorail.proxy.rlwy.net:28671

    constructor({ host, user, pass, port, cluster, dbName } = {
        host: "mongodb://",
        user: "mongo",
        pass: "nLwIuFObDkYKTCxxFNuQJanKJanylkKq",
        port: 28671,
        cluster: "monorail.proxy.rlwy.net",
        dbName: "ligaBetPlay"
    }) {
        if (connect.instanceConnect) {
            return connect.instanceConnect;
        }
        this.setHost = host;
        this.user = user;
        this.setPass = pass;
        this.port = port;
        this.cluster = cluster;
        this.setDbName = dbName;
        this.#open();
        connect.instanceConnect = this;
    }
    destructor(){
        connect.instanceConnect = undefined;
    }
    set setHost(host) {
        this.#host = host;
    }

    set setPass(pass) {
        this.#pass = pass;
    }

    set setDbName(dbName) {
        this.#dbName = dbName;
    }

    get getDbName() {
        return this.#dbName;
    }
    async reConnect() {
        await this.#open();
    }
    async #open() {
        console.log("Conexion exitosa");
        this.#url = `${this.#host}${this.user}:${this.#pass}@${this.cluster}:${this.port}`;
        this.conexion = new MongoClient(this.#url);
        await this.conexion.connect();
        console.log("Conexion realizada correctamente");
    }
}