// const NewServices=require('../services/News')
const { PrismaClient } = require("@prisma/client");
const badRequestsErrors = require("../errors/badRequests");
const newServices = require("../services/news");
const ErrorCode = require("../errors/root");


class newCtrollers {

  // post data
  async post(req, res, next) {
    try {
      const nwesDate = req.body;
      const nwePost = await newServices.post(nwesDate);
      res.status(200).json(nwePost);
    } catch (error) {
      next(new badRequestsErrors(error));
    }

    
  }

  //get All data
  async get(req, res, next) {
    try {
    
      const getData = await newServices.get();

      if (!getData) {
        throw new badRequestsErrors(`is not find data`);
      }

      res.status(200).json(getData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }



  //get Data By Id data
  async getID(req, res, next) {
    try {
      const id = req.params.id;
      const getData = await newServices.getID(id);

      if (!getData) {
        throw new badRequestsErrors(`is not find Id${id}`);
      }

      res.status(200).json(getData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }

  

  //delete
  async delete(req, res, next) {
    try {
      const id = req.params.id;
      const deleteData = await newServices.delete(id);

      if (!deleteData) {
        throw new badRequestsErrors(`is not find Id${id}`);
      }

      res.status(200).json(deleteData);
    } catch (error) {
      next(new badRequestsErrors(error));
    }
  }


  //apdateById
  async update(req, res, next) {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedPost = await newServices.update(id, updateData);
      res.status(200).json(updatedPost);
    } catch (error) {
      next(new BadRequestErrors(error.message, ErrorCode.GENERIC_ERROR));
    }
  }
}

module.exports = new newCtrollers();
