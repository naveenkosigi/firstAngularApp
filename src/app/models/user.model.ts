export class user{
  constructor(
    public email:string,
    public id:string,
    private _token:string,
    private tokenExp:Date
  ) {}

  get token(){
    if(!this.tokenExp || new Date() > this.tokenExp){
      return null;
    }
    return this._token;
  }
}
