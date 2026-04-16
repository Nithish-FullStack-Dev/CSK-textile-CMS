import type { Request, Response } from "express";
export declare const getJobs: (req: Request, res: Response) => Promise<void>;
export declare const getJobsAdmin: (req: Request, res: Response) => Promise<void>;
export declare const getJobById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createJob: (req: any, res: Response) => Promise<void>;
export declare const updateJob: (req: any, res: Response) => Promise<void>;
export declare const deleteJob: (req: any, res: Response) => Promise<void>;
export declare const applyToJob: (req: Request, res: Response) => Promise<void>;
export declare const getApplications: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllApplications: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=jobController.d.ts.map