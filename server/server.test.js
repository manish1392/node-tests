const request = require('supertest');
const expect =require('expect');

var app = require('./server').app;

// it('should return Hello World response',(done)=>{
//     request(app)
//       .get('/')
//       .expect(404)
//     //   .expect('Hello World!')
//       .expect({
//           error:'Page not found.'
//       })
//       .end(done);
// });


describe('Server',()=>{
    describe('GET /',()=>{
        it('should return Hello World response',(done)=>{
            request(app)
              .get('/')
              .expect(404)
              .expect((res)=>{
                expect(res.body).toInclude({
                    error:'Page not found.'
                });
              })
              .end(done);
        });        
    });

    describe('GET /users',()=>{
        it('should return my User object',(done)=>{
            request(app)
              .get('/users')
              .expect(200)
              .expect((res)=>{
                expect(res.body).toInclude({
                    name:'Manish',
                    age:24
                });
              })
              .end(done);
        });
    });
});




