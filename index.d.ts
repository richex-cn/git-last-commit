export interface Commit {
  shortHash: string;
  hash: string;
  subject: string;
  sanitizedSubject: string;
  body: string;
  authoredOn: string;
  committedOn: string;
  author: {
    name: string;
    email: string;
  },
  committer: {
    name: string;
    email: string;
  },
  notes?: string;
  branch: string;
  tags: string[];
}
export interface Options {
  dst?: string;
  respectingMailmap?: boolean
}

type GetLastCommitCallback = (err: Error | null, commit: Commit) => void;

export const getLastCommit: (callback: GetLastCommitCallback, options?: Options) => void;
export const getLastCommitAsync: (options?: Options) => Promise<Commit>;
