/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../../server';
import {
  newEmployee, wrongNewEmployee, emailExist
} from './data';

    describe('Employee tests v2', () => {
        it('Should be able to sign up', (done) => {
            request(app)
            .post('/api/v2/auth/signup')
            .send(newEmployee)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(201);
                expect(res.body).to.be.a('object');
                done();
            });
        });

        it('Should not be able to sign up when the data are invalid', (done) => {
            request(app)
            .post('/api/v2/auth/signup')
            .send(wrongNewEmployee)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(400);
                expect(res.body).to.be.a('object');
                done();
            });
        });

        it('Should not be able to sign up when email is exist', (done) => {
            request(app)
            .post('/api/v2/auth/signup')
            .send(emailExist)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(409)
            .end((err, res) => {
                expect(res.body.status).to.be.equal(409);
                expect(res.body).to.be.a('object');
                done();
            });
        }); 
    });
