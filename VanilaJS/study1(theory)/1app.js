//array []
{
    const arry = ['muyaho', '그', '만큼', '좋으시다는']
    console.log(arry);
    arry.push("거지")
    console.log(arry)
    arry.map((data)=>{
        console.log(data);
    })
    arry.forEach((dat)=>{
        console.log(dat);
})
}

//object {}
{
    const age = "Muyaho";
    const chunbok = {
        name: "김춘복",
        age: 87,
        job: "할아버지",
        description: "인생최후의지진강타",
        echo: ()=>{
            console.log(`${this.age}세${this.name}${this.job}${this.description}`);
        },
        echo2: function(){
            console.log(`${this.age}세${this.name}${this.job}${this.description}`);
        }
    }

    chunbok.echo();
    chunbok.echo2();
    console.log(chunbok);
    chunbok.damage = 200;
    console.log(chunbok);
}