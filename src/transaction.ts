
export class Transaction{
    public id : number;
    public tdate : number;
    public custid :string;
    public bic :string;
    public code :string;
    public receivername :string;
    public recaccnumber :string;
    public amount : number;
    public status:string;
    public reason:string;

    constructor(id:number,tdate:number,custid:string,bic:string,code:string,receivername:string
        ,recaccnumber:string,amount:number,status:string,reason:string)
        {
            this.id=id;
            this.tdate=tdate;
            this.custid=custid;
            this.bic=bic;
            this.code=code;
            this.receivername=receivername;
            this.recaccnumber=recaccnumber;
            this.amount=amount;
            this.status=status;
            this.reason=reason;
            console.log(this.amount,this.bic,this.code,this.custid,this.id,this.reason,this.recaccnumber,this.receivername,this.status,this.tdate);

        }


}