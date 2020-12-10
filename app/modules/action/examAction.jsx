// action type
export const MOVE_TO_PROBLEM = 'exam/MOVE_TO_PROBLEM';
export const SOLVE_PROBLEM = 'exam/SOLVE_PROBLEM';
export const CHECK_PROBLEM = 'exam/CHECK_PROBLEM';
export const UNCHECK_PROBLEM = 'exam/UNCHECK_PROBLEM';

// action creators
export function moveToProblem(problemId) {
  return { type: MOVE_TO_PROBLEM, problemId };
}

export function solveProblem(problemId) {
  return { type: SOLVE_PROBLEM, problemId };
}

export function checkProblem(problemId) {
  return { type: CHECK_PROBLEM, problemId };
}

export function uncheckProblem(problemId) {
  return { type: UNCHECK_PROBLEM, problemId };
}
