// action type
export const MOVE_PROBLEM_ID = 'exam/MOVE_CURRENT_PROBLEM';

// action creators
export function moveCurrentProblem(problemId) {
  return { type: MOVE_CURRENT_PAGE, problemId };
}
