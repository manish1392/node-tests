const utils = require('./utils');
const expect =  require('expect');


describe('Utils',()=>{
    
        describe('#add',()=>{
            it('should add two numbers',()=>{
                var res =utils.add(33,11);
    
                expect(res).toBe(44).toBeA('number');
    
                // if(res!==44){
                //     throw new Error(`Expected 44, but got ${res}.`);
                // }    
            });
    
            //test code for async Add
    
            it('should async add two numbers',(done)=>{
                utils.asyncAdd(4,3,(sum)=>{
                    expect(sum).toBe(7).toBeA('number');
                    done();
                });
            });
    
        });
        
        describe('#square',()=>{
            it('should square a number',()=>{
                var res=utils.square(5);
    
                expect(res).toBe(25).toBeA('number');
                // if(res!==25){
                //     throw new Error(`Expected 25, but got ${res}.`);
                // }  
            });
    
    
    
            it('should async square a number',(done)=>{
                utils.asyncSquare(3,(res)=>{
                    expect(res).toBe(9).toBeA('number');
                    done();
                });
            });
        });

});


//Playground Tests


it('should set firstName and lastName',()=>{
    var user = {location:'Chandigarh',age:24};
    var res = utils.setName(user,'Manish Arora');
    // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName:'Manish',
        lastName:'Arora'
    });
});


it('should expect some values',()=>{
    // to compare values like string , number ,boolean
    expect(12).toNotBe(11);
    expect(12).toBe(12);

    //to compare two objects or arrays  use ('toEqual' or 'toNotEqual') as  ('toBe' and 'toNotBe') compares === which is false for two different objects. 
    expect({name:'Manish'}).toEqual({name:'Manish'});
    expect({name:'Manish'}).toNotEqual({name:'manIsH'});

    //toInclude checks for a value if it is included in array or object
    // expect([2,3,4]).toInclude(5);  //fails
    expect([2,3,4]).toInclude(2);  //passes
    expect([2,3,4]).toExclude(5);//passes

    expect({
        name:'Manish',
        age:24,
        location:'Chandigarh,India'
    }).toInclude({
        age:24
    });

    expect({
        name:'Manish',
        age:24,
        location:'Chandigarh,India'
    }).toExclude({
        age:25
    });
});


