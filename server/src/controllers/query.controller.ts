import Query from "./../models/Query/Query";
import { Request, Response } from "express";
// import request from "request";

const QueryController = {
  async getQueries(_: Request, res: Response): Promise<Response> {
    try {
      const data = await Query.find({});
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getCountQueries(_: Request, res: Response): Promise<Response> {
    try {
      const count = await Query.countDocuments({}).lean();
      return res.status(200).json({
        count
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async addQuery(req: Request, res: Response): Promise<Response> {
    try {
      const query = await Query.create(req.body);
      return res.status(201).json(query);
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async updateQuery(req: Request, res: Response): Promise<Response> {
    try {
      const query = await Query.findByIdAndUpdate(
        req.body.query._id,
        req.body.query
      ).lean();
      return res.status(200).json(query);
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  },

  async deleteQuery(req: Request, res: Response): Promise<Response> {
    try {
      await Query.findByIdAndRemove(req.params.id).lean();
      return res.status(204).json({});
    } catch (err) {
      return res.status(500).json({
        error: err.message
      });
    }
  }
};

export = QueryController;
